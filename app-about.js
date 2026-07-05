/* ============================================================
   RAWx ENGINE (ABOUT PAGE - B2B SYNCED VERSION)
============================================================ */

/* ============================================================
   SVG ICONS (Same as B2B)
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
  trash:      `<svg class="icon" viewBox="0 0 24 24"><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/></svg>`,
  plus:       `<svg class="icon" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>`,
  check:      `<svg class="icon" viewBox="0 0 24 24"><path d="M4 12l5 5L20 6"/></svg>`,
  star:       `<svg class="icon" viewBox="0 0 24 24"><path d="M12 2l2.4 6.8L21 11l-6.6 2.2L12 20l-2.4-6.8L3 11l6.6-2.2z"/></svg>`,
  starFill:   `<svg class="icon" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2l2.4 6.8L21 11l-6.6 2.2L12 20l-2.4-6.8L3 11l6.6-2.2z"/></svg>`,
  dash:       `<svg class="icon" viewBox="0 0 24 24"><path d="M4 20V10M12 20V4M20 20v-7"/></svg>`,
  scrap:      `<svg class="icon" viewBox="0 0 24 24"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M8.5 8l11 11M20 4L8.5 15.5M9 9l2 2"/></svg>`
};
function icon(name){ return ICONS[name] || ICONS.scrap; }

/* ============================================================
   INIT ENGINE
============================================================ */
let photos = window.PHOTOS_ABOUT; // core-assets-about.js থেকে লোড হচ্ছে
let state = { mode:'all', view:'grid', query:'' };
let visibleCount = 60;
const BATCH = 60;
let lbIndex = 0;
let zoomed = false;

/* ============================================================
   UI RENDERING
============================================================ */
function render(){
  const grid = document.getElementById('grid');
  grid.innerHTML = '';
  
  const slice = photos.slice(0, visibleCount);
  slice.forEach((p, i) => {
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `
      <div class="media-wrap" onclick="openLb(${p.id})">
        <img src="${p.src}" alt="${p.title}" loading="lazy">
      </div>
      <div class="card-meta">${p.title}</div>
    `;
    grid.appendChild(div);
  });

  if (visibleCount < photos.length) {
     const sentinel = document.createElement('div');
     sentinel.id = 'sentinel';
     grid.appendChild(sentinel);
     observeSentinel(sentinel);
  }
}

function observeSentinel(el){
  new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
        visibleCount += BATCH;
        render();
    }
  }).observe(el);
}

/* ============================================================
   LIGHTBOX LOGIC
============================================================ */
function openLb(id){
  lbIndex = photos.findIndex(p => p.id === id);
  const lb = document.getElementById('lightbox');
  lb.style.display = 'flex';
  document.getElementById('lb-media-holder').innerHTML = `<img src="${photos[lbIndex].src}">`;
}

function closeLb(){
  document.getElementById('lightbox').style.display = 'none';
}

// ইনিশিয়ালাইজেশন
document.addEventListener('DOMContentLoaded', () => {
    render();
});