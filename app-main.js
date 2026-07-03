(function(){
  'use strict';

  /* ---------------- Populate real production frames from core-assets.js ----------------
     Replaces every former Unsplash placeholder. Falls back to a flat void panel if
     core-assets.js failed to load, so the layout never breaks. */
  function firstImg(kind){
    var picks = (typeof pickFromKind === 'function') ? pickFromKind(kind, 1) : [];
    return picks[0] || null;
  }

  function populateFromCoreAssets(){
    if (typeof PHOTOS === 'undefined'){ return; } // core-assets.js not loaded — keep static layout

    // Hero slider — one still per slide, matched by data-kind
    document.querySelectorAll('.slide-media[data-kind]').forEach(function(el){
      var p = firstImg(el.dataset.kind);
      if (p) el.style.backgroundImage = "url('" + p.src + "')";
    });

    // Category strip — one still per tile
    document.querySelectorAll('.cat-tile[data-kind]').forEach(function(tile){
      var p = firstImg(tile.dataset.kind);
      var img = tile.querySelector('img');
      if (p && img) img.src = p.src;
    });

    // The Edit — capsule hero image
    var editImg = document.querySelector('.edit-image[data-kind]');
    if (editImg){
      var p = firstImg(editImg.dataset.kind);
      var img = editImg.querySelector('img');
      if (p && img) img.src = p.src;
    }

    // Campaign film strip
    var film = document.querySelector('.film-strip[data-kind]');
    if (film){
      var p = firstImg(film.dataset.kind);
      var img = film.querySelector('img');
      if (p && img) img.src = p.src;
    }

    // Archive / social proof grid
    document.querySelectorAll('.archive-cell[data-kind]').forEach(function(cell){
      var p = firstImg(cell.dataset.kind);
      var img = cell.querySelector('img');
      if (p && img) img.src = p.src;
    });
  }
  populateFromCoreAssets();

  /* ---------------- Calibration line on load ---------------- */
  window.addEventListener('load', function(){
    var cal = document.getElementById('calibration-line');
    requestAnimationFrame(function(){ cal.classList.add('run'); });
  });

  /* ---------------- Reticle cursor readout ---------------- */
  var reticle = document.getElementById('reticle');
  var coordEl = reticle.querySelector('.coord');
  var reticleActive = window.matchMedia('(min-width: 901px)').matches;
  if(reticleActive){
    document.addEventListener('mousemove', function(e){
      reticle.classList.add('on');
      reticle.style.left = e.clientX + 'px';
      reticle.style.top = e.clientY + 'px';
      var xPct = Math.round((e.clientX / window.innerWidth) * 999);
      var yPct = Math.round((e.clientY / window.innerHeight) * 999);
      coordEl.textContent = 'X' + String(xPct).padStart(3,'0') + ' Y' + String(yPct).padStart(3,'0');
    });
    document.addEventListener('mouseleave', function(){ reticle.classList.remove('on'); });
  }

  /* ---------------- Language selector ---------------- */
  var langSelect = document.getElementById('langSelect');
  var langCurrent = document.getElementById('langCurrent');
  langCurrent.addEventListener('click', function(e){
    e.stopPropagation();
    langSelect.classList.toggle('open');
  });
  document.querySelectorAll('.lang-menu button').forEach(function(btn){
    btn.addEventListener('click', function(){
      langCurrent.firstChild.textContent = btn.dataset.lang + ' ';
      langSelect.classList.remove('open');
    });
  });
  document.addEventListener('click', function(){ langSelect.classList.remove('open'); });

  /* ---------------- Hero slider ---------------- */
  var slides = document.querySelectorAll('.slide');
  var bars = document.querySelectorAll('.hero-progress .bar');
  var slideNow = document.getElementById('slideNow');
  var current = 0;
  var slideDuration = 6000;
  var timer;

  function goToSlide(i){
    slides[current].classList.remove('active');
    bars[current].classList.remove('active');
    current = i % slides.length;
    slides[current].classList.add('active');
    bars.forEach(function(b){ b.classList.remove('active'); b.querySelector('span').style.animation = 'none'; b.querySelector('span').offsetHeight; b.querySelector('span').style.animation=''; });
    bars[current].classList.add('active');
    slideNow.textContent = String(current+1).padStart(2,'0');
  }

  function startAutoplay(){
    clearInterval(timer);
    timer = setInterval(function(){ goToSlide(current+1); }, slideDuration);
  }
  startAutoplay();

  bars.forEach(function(bar, idx){
    bar.addEventListener('click', function(){
      goToSlide(idx);
      startAutoplay();
    });
  });

  /* ---------------- Bestsellers data + render ----------------
     Consumer name/price/tag stay editorial (D2C copy, not the
     B2B spec sheet) but the photography now comes straight out
     of the shared RAW registry via pickFromKind(). */
  var productMeta = [
    { kind:'bodysuit',   name:'Void Bodysuit — Onyx',       price:'$68', tag:'New' },
    { kind:'twoset',     name:'Second-Skin Set — Amber',    price:'$94', tag:'Bestseller' },
    { kind:'lingerie',   name:'Tension Bra — Red Line',     price:'$42', tag:null },
    { kind:'activewear', name:'Recovery Legging',           price:'$78', tag:'Restocked' },
    { kind:'essential',  name:'Essentials Brief Trio',      price:'$36', tag:null },
    { kind:'thong',      name:'Matte Micro Thong — Void',   price:'$28', tag:'New' }
  ];
  var track = document.getElementById('carouselTrack');
  var products = productMeta.map(function(m){
    var p = firstImg(m.kind);
    return { name:m.name, price:m.price, tag:m.tag, img: p ? p.src : '' };
  }).filter(function(p){ return !!p.img; });

  track.innerHTML = products.map(function(p){
    return '<div class="product-card">' +
      '<div class="product-img"><img src="'+p.img+'" alt="'+p.name+'">' +
      (p.tag ? '<span class="product-tag">'+p.tag+'</span>' : '') +
      '</div>' +
      '<div class="product-info"><span class="product-name">'+p.name+'</span><span class="product-price">'+p.price+'</span></div>' +
      '</div>';
  }).join('');

  document.getElementById('carNext').addEventListener('click', function(){
    track.scrollBy({ left: 320, behavior:'smooth' });
  });
  document.getElementById('carPrev').addEventListener('click', function(){
    track.scrollBy({ left: -320, behavior:'smooth' });
  });

  /* ---------------- Reveal on scroll ---------------- */
  var revealEls = document.querySelectorAll('.reveal');
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold:0.15 });
  revealEls.forEach(function(el){ io.observe(el); });

  /* ---------------- Calibration line re-fire on major scroll thresholds ---------------- */
  var fired = {};
  var thresholds = [
    { id:'edit', el:document.getElementById('edit') },
    { id:'campaign', el:document.getElementById('campaign') },
    { id:'footer', el:document.getElementById('footer') }
  ];
  var calLine = document.getElementById('calibration-line');
  var calIO = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      var id = entry.target.id;
      if(entry.isIntersecting && !fired[id]){
        fired[id] = true;
        calLine.classList.remove('run');
        void calLine.offsetWidth;
        calLine.classList.add('run');
      }
    });
  }, { threshold:0.2 });
  thresholds.forEach(function(t){ if(t.el) calIO.observe(t.el); });

  /* ---------------- Header background intensifies on scroll ---------------- */
  var header = document.querySelector('header');
  window.addEventListener('scroll', function(){
    header.style.background = window.scrollY > 40 ? 'rgba(10,10,10,0.85)' : 'rgba(10,10,10,0.55)';
  });

  /* ---------------- Play button (campaign film) ---------------- */
  document.querySelector('.play-btn').addEventListener('click', function(){
    this.style.opacity = '0.4';
    var self = this;
    setTimeout(function(){ self.style.opacity = '1'; }, 400);
  });

  /* ---------------- Email capture ---------------- */
  var form = document.getElementById('captureForm');
  var note = document.getElementById('captureNote');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    var email = document.getElementById('captureEmail').value;
    // Ready to be hooked to a Make.com webhook:
    // fetch('YOUR_MAKE_COM_WEBHOOK_URL', {
    //   method:'POST',
    //   headers:{'Content-Type':'application/json'},
    //   body: JSON.stringify({ email: email, source:'rawx-d2c-footer' })
    // });
    note.textContent = 'Access request logged for ' + email + '. Confirmation incoming.';
    note.classList.add('show');
    form.reset();
  });

})();
