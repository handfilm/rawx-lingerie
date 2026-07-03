/* ============================================================
   ICON SET — inline SVG, no external deps
============================================================ */
const ICONS = {
  all:        `<svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/></svg>`,
  newest:     `<svg class="icon" viewBox="0 0 24 24"><path d="M12 8v4l3 3"/><circle cx="12" cy="12" r="9"/></svg>`,
  az:         `<svg class="icon" viewBox="0 0 24 24"><path d="M3 8l4-5 4 5M3.5 6.5h7M17 3v18M13 17l4 4 4-4"/></svg>`,
  shuffle:    `<svg class="icon" viewBox="0 0 24 24"><path d="M3 6h4l10 12h4M17 6h4v4M3 18h4l3-3.5M17 18h4v-4M14 6.5L15.5 8"/></svg>`,
  grid:       `<svg class="icon" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>`,
  masonry:    `<svg class="icon" viewBox="0 0 24 24"><rect x="3" y="3" width="6" height="10"/><rect x="15" y="3" width="6" height="6"/><rect x="3" y="15" width="6" height="6"/><rect x="15" y="11" width="6" height="10"/></svg>`,
  list:       `<svg class="icon" viewBox="0 0 24 24"><rect x="3" y="4" width="4" height="4"/><rect x="3" y="10" width="4" height="4"/><rect x="3" y="16" width="4" height="4"/><path d="M10 6h11M10 12h11M10 18h11"/></svg>`,
  search:     `<svg class="icon" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>`,
  close:      `<svg class="icon" viewBox="0 0 24 24"><path d="M5 5l14 14M19 5L5 19"/></svg>`,
  fullscreen: `<svg class="icon" viewBox="0 0 24 24"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg>`,
  download:   `<svg class="icon" viewBox="0 0 24 24"><path d="M12 3v13M7 11l5 5 5-5M4 21h16"/></svg>`,
  copy:       `<svg class="icon" viewBox="0 0 24 24"><rect x="8" y="8" width="12" height="12" rx="1"/><path d="M4 16V5a1 1 0 011-1h11"/></svg>`,
  prev:       `<svg class="icon" viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>`,
  next:       `<svg class="icon" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>`,
  video:      `<svg class="icon" viewBox="0 0 24 24"><rect x="3" y="6" width="13" height="12" rx="1"/><path d="M16 10l5-3v10l-5-3"/></svg>`,
  play:       `<svg class="icon" viewBox="0 0 24 24"><path d="M6 4l14 8-14 8z"/></svg>`,
  pause:      `<svg class="icon" viewBox="0 0 24 24"><rect x="5" y="4" width="5" height="16"/><rect x="14" y="4" width="5" height="16"/></svg>`,
  star:       `<svg class="icon" viewBox="0 0 24 24"><path d="M12 2l2.4 6.8L21 11l-6.6 2.2L12 20l-2.4-6.8L3 11l6.6-2.2z"/></svg>`,
  starFill:   `<svg class="icon" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2l2.4 6.8L21 11l-6.6 2.2L12 20l-2.4-6.8L3 11l6.6-2.2z"/></svg>`,
  dash:       `<svg class="icon" viewBox="0 0 24 24"><path d="M4 20V10M12 20V4M20 20v-7"/></svg>`,
  /* category glyphs — abstract, non-literal */
  twoset:     `<svg class="icon" viewBox="0 0 24 24"><circle cx="8" cy="8" r="4"/><circle cx="16" cy="16" r="4"/></svg>`,
  misc:       `<svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 8v4l2.5 2.5"/></svg>`,
  activewear: `<svg class="icon" viewBox="0 0 24 24"><path d="M6 7l3-3h6l3 3 3 3-3 3v8H6v-8L3 10z"/></svg>`,
  bodysuit:   `<svg class="icon" viewBox="0 0 24 24"><path d="M9 3h6l1 5-2 2v11H10V10L8 8z"/></svg>`,
  essential:  `<svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3"/></svg>`,
  ig:         `<svg class="icon" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>`,
  image:      `<svg class="icon" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="1"/><circle cx="8.5" cy="9.5" r="1.5"/><path d="M21 16l-5-5-4 4-3-3-6 6"/></svg>`,
  images:     `<svg class="icon" viewBox="0 0 24 24"><rect x="6" y="6" width="15" height="14" rx="1"/><path d="M3 3v14a1 1 0 001 1"/></svg>`,
  lingerie:   `<svg class="icon" viewBox="0 0 24 24"><path d="M3 8l4 4 5-8 5 8 4-4-2 11H5z"/></svg>`,
  panty:      `<svg class="icon" viewBox="0 0 24 24"><path d="M4 4h16l-2 8-6 8-6-8z"/></svg>`,
  pin:        `<svg class="icon" viewBox="0 0 24 24"><path d="M12 21s7-7.2 7-12a7 7 0 10-14 0c0 4.8 7 12 7 12z"/><circle cx="12" cy="9" r="2.3"/></svg>`,
  scrap:      `<svg class="icon" viewBox="0 0 24 24"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M8.5 8l11 11M20 4L8.5 15.5M9 9l2 2"/></svg>`,
  thong:      `<svg class="icon" viewBox="0 0 24 24"><path d="M4 6c3 3 3 6 0 9M20 6c-3 3-3 6 0 9M9 10a3 3 0 006 0"/></svg>`
};
function icon(name){ return ICONS[name] || ICONS.misc; }

/* ============================================================
   SECTIONS, RAW, BASE, PHOTOS, PHOTOS_BY_KIND, GARMENT_SPECS,
   DESC_FRAGMENTS, PRODUCT_OVERRIDES, isVideoExt(), isGarment(),
   buildProductData(), pickFromKind() now all live in
   core-assets.js (shared with the D2C site) — loaded via the
   script tag at the top of the page, before this block.
============================================================ */

/* ============================================================
   STATE
============================================================ */
let favorites = new Set();
try { favorites = new Set(JSON.parse(localStorage.getItem('rawx_favs') || '[]')); } catch(e){}
function saveFavs(){ try { localStorage.setItem('rawx_favs', JSON.stringify([...favorites])); } catch(e){} }

let photos = PHOTOS; // sourced from core-assets.js — single source of truth

let state = { mode:'all', view:'grid', tag:null, query:'', favOnly:false, dash:false };
let activeSet = photos;
let visibleCount = 60;
const BATCH = 60;
let lbIndex = 0;
let zoomed = false;
let io = null;

/* ============================================================
   FILTER / SORT
============================================================ */
function seededShuffle(arr, seed){
  const a = [...arr];
  let s = seed;
  for (let i = a.length - 1; i > 0; i--) {
    s = (s * 9301 + 49297) % 233280;
    const j = Math.floor((s / 233280) * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
let shuffleSeed = Date.now() % 100000;

function getFiltered(){
  let data = [...photos];
  if (state.tag) data = data.filter(p => p.kind === state.tag);
  if (state.favOnly) data = data.filter(p => favorites.has(p.id));
  if (state.query){
    const q = state.query.toLowerCase();
    data = data.filter(p => p.title.toLowerCase().includes(q) || p.kind.toLowerCase().includes(q) || p.file.toLowerCase().includes(q));
  }
  if (state.mode === 'az') data.sort((a,b) => a.title.localeCompare(b.title));
  else if (state.mode === 'shuffle') data = seededShuffle(data, shuffleSeed);
  else if (state.mode === 'newest') data = [...data].reverse();
  return data;
}

/* ============================================================
   RENDER — TOOLBAR
============================================================ */
function renderToolbar(){
  const tb = document.getElementById('toolbar');
  tb.innerHTML = `
    <button class="btn ${state.mode==='all'?'active':''}" onclick="setMode('all')">${icon('all')}<span>All</span></button>
    <button class="btn ${state.mode==='newest'?'active':''}" onclick="setMode('newest')">${icon('newest')}<span>Newest</span></button>
    <button class="btn ${state.mode==='az'?'active':''}" onclick="setMode('az')">${icon('az')}<span>A–Z</span></button>
    <button class="btn ${state.mode==='shuffle'?'active':''}" onclick="reshuffle()">${icon('shuffle')}<span>Shuffle</span></button>
    <button class="btn fav-btn ${state.favOnly?'active':''}" onclick="toggleFavOnly()">${icon(state.favOnly?'starFill':'star')}<span>Favs</span></button>
    <button class="btn view-btn ${state.view==='grid'?'active':''}" onclick="setView('grid')">${icon('grid')}</button>
    <button class="btn view-btn ${state.view==='masonry'?'active':''}" onclick="setView('masonry')">${icon('masonry')}</button>
    <button class="btn view-btn ${state.view==='list'?'active':''}" onclick="setView('list')">${icon('list')}</button>
    <button class="btn ${state.dash?'active':''}" onclick="toggleDash()">${icon('dash')}<span>Stats</span></button>
    <div class="search-wrap">${icon('search')}<input id="search" placeholder="SEARCH FRAMES" oninput="onSearch(this.value)"></div>
    <div id="status"></div>
  `;
  document.getElementById('search').value = state.query;
}

/* ============================================================
   RENDER — TAGBAR
============================================================ */
function renderTagbar(){
  const bar = document.getElementById('tagbar');
  bar.innerHTML = '';
  const allChip = document.createElement('div');
  allChip.className = 'tag-chip' + (state.tag === null ? ' active' : '');
  allChip.innerHTML = `${icon('all')}<span>All</span><span class="tag-count">${photos.length}</span>`;
  allChip.onclick = () => { state.tag = null; resetPaging(); render(); };
  bar.appendChild(allChip);
  SECTIONS.forEach(sec => {
    const count = photos.filter(p => p.kind === sec.key).length;
    if (!count) return;
    const chip = document.createElement('div');
    chip.className = 'tag-chip' + (state.tag === sec.key ? ' active' : '');
    chip.innerHTML = `<span class="cat-icon">${icon(sec.key)}</span><span>${sec.label}</span><span class="tag-count">${count}</span>`;
    chip.onclick = () => { state.tag = (state.tag === sec.key ? null : sec.key); resetPaging(); render(); };
    bar.appendChild(chip);
  });
}

/* ============================================================
   RENDER — DASHBOARD
============================================================ */
function renderDash(){
  const dash = document.getElementById('dash');
  dash.className = 'dash' + (state.dash ? ' open' : '');
  if (!state.dash) { dash.innerHTML = ''; return; }
  const max = Math.max(...SECTIONS.map(s => photos.filter(p => p.kind === s.key).length));
  dash.innerHTML = SECTIONS.map(sec => {
    const count = photos.filter(p => p.kind === sec.key).length;
    if (!count) return '';
    const pct = Math.round((count / max) * 100);
    return `<div class="dash-row">
      <span class="dash-label">${sec.label}</span>
      <div class="dash-bar-track"><div class="dash-bar-fill" style="width:${pct}%"></div></div>
      <span class="dash-num">${count}</span>
    </div>`;
  }).join('');
}

/* ============================================================
   MEDIA TAG
============================================================ */
function mediaTag(p, forLightbox){
  if (p.video){
    return `<video src="${p.src}" ${forLightbox ? 'controls autoplay' : 'muted loop playsinline'} preload="metadata" onloadeddata="this.classList.add('loaded');this.parentElement.classList.add('loaded')"></video>`;
  }
  return `<img src="${p.src}" alt="${p.title}" loading="lazy" onload="this.classList.add('loaded');this.parentElement.classList.add('loaded')" onerror="this.parentElement.classList.add('loaded');this.alt='MISSING: ${p.file}'">`;
}

/* ============================================================
   RENDER — GRID (chunked / infinite-scroll for speed)
============================================================ */
function resetPaging(){ visibleCount = BATCH; }

function render(){
  renderToolbar();
  renderDash();
  const grid = document.getElementById('grid');
  grid.className = 'gallery ' + state.view;
  grid.innerHTML = '';

  activeSet = getFiltered();

  if (!activeSet.length){
    grid.innerHTML = `<div class="empty-state">${icon('search')}<span>NO FRAMES MATCH</span></div>`;
  } else {
    const slice = activeSet.slice(0, visibleCount);
    const frag = document.createDocumentFragment();
    slice.forEach(p => frag.appendChild(buildCard(p)));
    grid.appendChild(frag);

    if (visibleCount < activeSet.length){
      const sentinel = document.createElement('div');
      sentinel.id = 'sentinel';
      grid.appendChild(sentinel);
      observeSentinel(sentinel);
    }
  }

  document.getElementById('status').textContent = `${Math.min(visibleCount, activeSet.length)} / ${activeSet.length} SHOWN`;
  document.getElementById('stat-total').textContent = photos.length;
  document.getElementById('stat-visible').textContent = activeSet.length;
  document.getElementById('stat-cats').textContent = SECTIONS.filter(s => photos.some(p => p.kind === s.key)).length;
  document.getElementById('stat-fav').textContent = favorites.size;
  const heroCount = document.getElementById('hero-frame-count');
  if (heroCount) heroCount.textContent = photos.length + ' Frames';
  renderTagbar();
}

function buildCard(p){
  const div = document.createElement('div');
  const isFav = favorites.has(p.id);
  const b2b = buildProductData(p);

  if (!b2b){
    div.className = 'card';
    div.innerHTML = `
      <button class="fav-toggle ${isFav ? 'active' : ''}" onclick="event.stopPropagation();toggleFav(${p.id})">${icon(isFav ? 'starFill' : 'star')}</button>
      <div class="media-wrap" onclick="openLb(${p.id})">
        ${p.video ? `<div class="video-badge">${icon('video')}</div>` : ''}
        ${mediaTag(p, false)}
      </div>
      <div class="card-meta"><span>${p.title}</span><span class="cat-icon">${icon(p.kind)}</span></div>
    `;
    return div;
  }

  div.className = 'card is-product';
  div.innerHTML = `
    <button class="fav-toggle ${isFav ? 'active' : ''}" onclick="event.stopPropagation();toggleFav(${p.id})">${icon(isFav ? 'starFill' : 'star')}</button>
    <div class="media-wrap" onclick="openLb(${p.id})">
      ${p.video ? `<div class="video-badge">${icon('video')}</div>` : ''}
      ${mediaTag(p, false)}
    </div>
    <div class="prod-body">
      <div class="prod-code"><span>${b2b.code}</span><span class="cat-icon">${icon(p.kind)}</span></div>
      <div class="prod-name">${b2b.name}</div>
      <div class="prod-desc">${b2b.desc}</div>
      <div class="prod-specs">
        <div class="prod-spec">MOQ<b>${b2b.moq.toLocaleString()}</b></div>
        <div class="prod-spec">Sizes<b>${b2b.sizes}</b></div>
        ${b2b.price ? `<div class="prod-spec">Price<b>${b2b.price}</b></div>` : ''}
      </div>
      <div class="prod-actions">
        <a class="prod-btn" href="${p.src}" download="${p.file}" onclick="event.stopPropagation()">${icon('download')}<span>Tech-Pack</span></a>
        <button class="prod-btn inquire" onclick="event.stopPropagation();openInquiry(${p.id})">Request Quote</button>
      </div>
    </div>
  `;
  return div;
}

function observeSentinel(el){
  if (io) io.disconnect();
  io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        visibleCount = Math.min(visibleCount + BATCH, activeSet.length);
        render();
      }
    });
  }, { rootMargin: '600px' });
  io.observe(el);
}

function setMode(mode){ state.mode = mode; resetPaging(); render(); }
function reshuffle(){ shuffleSeed = Date.now() % 100000; state.mode = 'shuffle'; resetPaging(); render(); }
function setView(view){ state.view = view; resetPaging(); render(); }
function onSearch(val){ state.query = val.trim(); resetPaging(); render(); }
function toggleFavOnly(){ state.favOnly = !state.favOnly; resetPaging(); render(); }
function toggleDash(){ state.dash = !state.dash; render(); }
function toggleFav(id){
  if (favorites.has(id)) favorites.delete(id); else favorites.add(id);
  saveFavs();
  render();
  if (document.getElementById('lightbox').style.display === 'flex') updateLbFavBtn();
}

/* ============================================================
   TOAST
============================================================ */
let toastTimer = null;
function showToast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 1600);
}

/* ============================================================
   INQUIRY MODAL — B2B "Request Quote" panel
============================================================ */
let inqProductId = null;

// Paste your Make.com "Custom Webhook" URL here (Scenario > Webhooks > Add).
// Leave blank to always fall back to the mailto: draft.
const MAKE_WEBHOOK_URL = ''; // e.g. 'https://hook.us1.make.com/xxxxxxxxxxxxxxxxxxxxxxxxxxxx'
const FALLBACK_EMAIL = 'sourcing@handfilm.com';

function openInquiry(id){
  const p = photos.find(x => x.id === id);
  const b2b = buildProductData(p);
  if (!p || !b2b) return;
  inqProductId = id;

  document.getElementById('inq-name').textContent = b2b.name;
  document.getElementById('inq-media').innerHTML = mediaTag(p, false);
  document.getElementById('inq-desc').textContent = b2b.desc;
  document.getElementById('inq-material').textContent = b2b.material;
  document.getElementById('inq-moq').textContent = b2b.moq.toLocaleString() + ' units';
  document.getElementById('inq-sizes').textContent = b2b.sizes;
  document.getElementById('inq-ref').textContent = b2b.code;

  const extraGrid = document.getElementById('inq-extra-grid');
  if (b2b.price || b2b.colorways){
    extraGrid.style.display = '';
    document.getElementById('inq-price').textContent = b2b.price || '—';
    document.getElementById('inq-colorways').textContent = b2b.colorways || '—';
  } else {
    extraGrid.style.display = 'none';
  }

  document.getElementById('inq-form').reset();

  document.getElementById('inquiry-modal').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeInquiry(){
  document.getElementById('inquiry-modal').style.display = 'none';
  document.body.style.overflow = '';
  inqProductId = null;
}

async function submitInquiry(e){
  e.preventDefault();
  const p = photos.find(x => x.id === inqProductId);
  const b2b = buildProductData(p);
  if (!p || !b2b) return;

  const company = document.getElementById('inq-company').value;
  const email = document.getElementById('inq-email').value;
  const country = document.getElementById('inq-country').value;
  const qty = document.getElementById('inq-qty').value || 'Not specified';
  const notes = document.getElementById('inq-notes').value || 'None';

  const payload = {
    frame_ref: b2b.code,
    product_name: b2b.name,
    material: b2b.material,
    moq: b2b.moq,
    sizes: b2b.sizes,
    price: b2b.price || null,
    colorways: b2b.colorways || null,
    frame_file: p.file,
    frame_url: p.src,
    company, email, country,
    target_quantity: qty,
    notes,
    submitted_at: new Date().toISOString()
  };

  const btn = document.getElementById('inq-submit-btn');
  const originalHTML = btn.innerHTML;
  btn.disabled = true;
  btn.innerHTML = '<span>Sending…</span>';

  const openMailtoFallback = () => {
    const subject = `B2B Inquiry — ${b2b.code}`;
    const body = [
      `Frame Reference: ${b2b.code} (${b2b.name})`,
      `Material Specs: ${b2b.material}`,
      `MOQ: ${b2b.moq.toLocaleString()} units`,
      `Available Sizes: ${b2b.sizes}`,
      b2b.price ? `Price: ${b2b.price}` : null,
      ``,
      `Company: ${company}`,
      `Country: ${country}`,
      `Target Quantity: ${qty}`,
      `Notes: ${notes}`
    ].filter(Boolean).join('\n');
    window.location.href = `mailto:${FALLBACK_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  if (!MAKE_WEBHOOK_URL){
    openMailtoFallback();
    showToast('INQUIRY DRAFTED — SET WEBHOOK URL');
    btn.disabled = false;
    btn.innerHTML = originalHTML;
    closeInquiry();
    return;
  }

  try {
    const res = await fetch(MAKE_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (!res.ok) throw new Error('Webhook responded ' + res.status);
    showToast('INQUIRY SENT');
    closeInquiry();
  } catch (err){
    console.error('Webhook submit failed, falling back to email:', err);
    openMailtoFallback();
    showToast('SEND FAILED — OPENING EMAIL');
  } finally {
    btn.disabled = false;
    btn.innerHTML = originalHTML;
  }
}

document.getElementById('inquiry-modal').addEventListener('click', e => {
  if (e.target.id === 'inquiry-modal') closeInquiry();
});

/* ============================================================
   LIGHTBOX / CINEMA MODE
============================================================ */
function initLbIcons(){
  document.getElementById('lb-fullscreen').innerHTML = icon('fullscreen');
  document.getElementById('lb-download').innerHTML = icon('download');
  document.getElementById('lb-copy').innerHTML = icon('copy');
  document.getElementById('lb-play').innerHTML = icon('play');
  document.querySelector('.lb-close').innerHTML = icon('close');
  document.querySelector('.lb-nav.prev').innerHTML = icon('prev');
  document.querySelector('.lb-nav.next').innerHTML = icon('next');
  document.querySelector('.inq-close').innerHTML = icon('close');
  document.getElementById('inq-submit-btn').innerHTML = icon('next') + '<span>Send Inquiry</span>';
  updateSpeedBtn();
}

/* ============================================================
   SLIDESHOW
============================================================ */
const SPEED_OPTIONS = [1.5, 2, 3, 5, 8, 12];
let speedIndex = 2; // default 3s
let slideTimer = null;
let slidePlaying = false;

function updateSpeedBtn(){
  document.getElementById('lb-speed').textContent = SPEED_OPTIONS[speedIndex] + 'S';
}
function cycleSpeed(){
  speedIndex = (speedIndex + 1) % SPEED_OPTIONS.length;
  updateSpeedBtn();
  if (slidePlaying) armSlide();
}

function updatePlayBtn(){
  const btn = document.getElementById('lb-play');
  btn.innerHTML = icon(slidePlaying ? 'pause' : 'play');
  btn.classList.toggle('active', slidePlaying);
}

function toggleSlideshow(){
  slidePlaying ? stopSlideshow() : startSlideshow();
}

function startSlideshow(){
  slidePlaying = true;
  updatePlayBtn();
  armSlide();
}

function stopSlideshow(){
  slidePlaying = false;
  updatePlayBtn();
  clearTimeout(slideTimer);
  const bar = document.getElementById('lb-progress');
  bar.classList.remove('running');
  bar.style.width = '0%';
}

function armSlide(){
  clearTimeout(slideTimer);
  const secs = SPEED_OPTIONS[speedIndex];
  const bar = document.getElementById('lb-progress');
  bar.classList.remove('running');
  bar.style.width = '0%';
  void bar.offsetWidth;
  requestAnimationFrame(() => {
    bar.classList.add('running');
    bar.style.transitionDuration = secs + 's';
    bar.style.width = '100%';
  });
  slideTimer = setTimeout(() => { if (slidePlaying) navLb(1); }, secs * 1000);
}

function openLb(id){
  lbIndex = activeSet.findIndex(p => p.id === id);
  zoomed = false;
  showLbFrame();
  document.getElementById('lightbox').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function updateLbFavBtn(){
  const p = activeSet[lbIndex];
  const btn = document.getElementById('lb-fav');
  const isFav = favorites.has(p.id);
  btn.innerHTML = icon(isFav ? 'starFill' : 'star');
  btn.classList.toggle('active', isFav);
}

function toggleFavInLb(){
  const p = activeSet[lbIndex];
  toggleFav(p.id);
}

function copyLbPath(){
  const p = activeSet[lbIndex];
  const text = BASE + p.file;
  if (navigator.clipboard){
    navigator.clipboard.writeText(text).then(() => showToast('PATH COPIED')).catch(() => showToast('COPY FAILED'));
  } else {
    showToast('COPY UNSUPPORTED');
  }
}

function showLbFrame(){
  const p = activeSet[lbIndex];
  const holder = document.getElementById('lb-media-holder');
  holder.innerHTML = mediaTag(p, true);
  const mediaEl = holder.querySelector('img,video');
  if (mediaEl && mediaEl.tagName === 'IMG'){
    mediaEl.onclick = () => { zoomed = !zoomed; mediaEl.classList.toggle('zoomed', zoomed); };
  }
  const sec = SECTIONS.find(s => s.key === p.kind);
  document.getElementById('lb-cat-icon').innerHTML = icon(p.kind);
  document.getElementById('lb-title').textContent = p.title.toUpperCase();
  document.getElementById('lb-counter').textContent = `FRAME ${lbIndex + 1} / ${activeSet.length} — ${sec ? sec.label.toUpperCase() : ''}`;
  document.getElementById('lb-download').href = p.src;
  document.getElementById('lb-download').setAttribute('download', p.file);
  updateLbFavBtn();
  preloadNeighbors();
  renderFilmstrip();
  if (slidePlaying) armSlide();
}

function preloadNeighbors(){
  [1, -1].forEach(dir => {
    const idx = (lbIndex + dir + activeSet.length) % activeSet.length;
    const p = activeSet[idx];
    if (p && !p.video){ const img = new Image(); img.src = p.src; }
  });
}

function renderFilmstrip(){
  const strip = document.getElementById('filmstrip');
  strip.innerHTML = '';
  const frag = document.createDocumentFragment();
  activeSet.forEach((p, i) => {
    const el = document.createElement(p.video ? 'div' : 'img');
    el.className = 'fs-thumb' + (i === lbIndex ? ' active' : '');
    if (!p.video){ el.src = p.src; el.loading = 'lazy'; } else { el.innerHTML = icon('video'); el.style.cssText += 'display:flex;align-items:center;justify-content:center;background:#222;color:#fff;'; }
    el.onclick = () => { lbIndex = i; zoomed = false; showLbFrame(); };
    frag.appendChild(el);
  });
  strip.appendChild(frag);
  const activeThumb = strip.querySelector('.active');
  if (activeThumb) activeThumb.scrollIntoView({ inline: 'center', block: 'nearest' });
}

function navLb(dir){ lbIndex = (lbIndex + dir + activeSet.length) % activeSet.length; zoomed = false; showLbFrame(); }

function closeLb(){
  stopSlideshow();
  document.getElementById('lightbox').style.display = 'none';
  document.getElementById('lb-media-holder').innerHTML = '';
  document.body.style.overflow = '';
  if (document.fullscreenElement) document.exitFullscreen();
}
function toggleFullscreen(){
  const lb = document.getElementById('lightbox');
  if (!document.fullscreenElement) lb.requestFullscreen?.();
  else document.exitFullscreen?.();
}

document.addEventListener('keydown', e => {
  if (document.getElementById('lightbox').style.display !== 'flex'){
    if (e.key === '/' ){ e.preventDefault(); document.getElementById('search')?.focus(); }
    return;
  }
  if (e.key === 'Escape') closeLb();
  if (e.key === 'ArrowRight') navLb(1);
  if (e.key === 'ArrowLeft') navLb(-1);
  if (e.key === 'f' || e.key === 'F') toggleFullscreen();
  if (e.key === 'p' || e.key === 'P') toggleSlideshow();
  if (e.key === ' '){ e.preventDefault(); toggleFavInLb(); }
});

let touchStartX = 0;
document.getElementById('lb-stage').addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; });
document.getElementById('lb-stage').addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(dx) > 50) navLb(dx > 0 ? -1 : 1);
});

initLbIcons();
render();
