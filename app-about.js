/* ============================================================
   RAWx ENGINE — ABOUT / ARCHIVE PAGE (GOOGLE DRIVE SYNCED)
   Full feature set: grid/masonry/list views, tag + board filters,
   favorites, search, infinite scroll, stats dashboard, lightbox
   with slideshow/fullscreen/filmstrip, board-pin modal, and a
   buyer inquiry modal. Reads PHOTOS_ABOUT + SECTIONS from
   core-assets-about.js (loaded first).
============================================================ */

/* ============================================================
   SVG ICONS
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
  boards:     `<svg class="icon" viewBox="0 0 24 24"><path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>`,
  trash:      `<svg class="icon" viewBox="0 0 24 24"><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/></svg>`,
  plus:       `<svg class="icon" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>`,
  check:      `<svg class="icon" viewBox="0 0 24 24"><path d="M4 12l5 5L20 6"/></svg>`,
  star:       `<svg class="icon" viewBox="0 0 24 24"><path d="M12 2l2.4 6.8L21 11l-6.6 2.2L12 20l-2.4-6.8L3 11l6.6-2.2z"/></svg>`,
  starFill:   `<svg class="icon" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2l2.4 6.8L21 11l-6.6 2.2L12 20l-2.4-6.8L3 11l6.6-2.2z"/></svg>`,
  dash:       `<svg class="icon" viewBox="0 0 24 24"><path d="M4 20V10M12 20V4M20 20v-7"/></svg>`,
  quote:      `<svg class="icon" viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>`,
  /* Categories */
  twoset:      `<svg class="icon" viewBox="0 0 24 24"><circle cx="8" cy="8" r="4"/><circle cx="16" cy="16" r="4"/></svg>`,
  activewear:  `<svg class="icon" viewBox="0 0 24 24"><path d="M6 7l3-3h6l3 3 3 3-3 3v8H6v-8L3 10z"/></svg>`,
  bodysuit:    `<svg class="icon" viewBox="0 0 24 24"><path d="M9 3h6l1 5-2 2v11H10V10L8 8z"/></svg>`,
  essential:   `<svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3"/></svg>`,
  lingerie:    `<svg class="icon" viewBox="0 0 24 24"><path d="M3 8l4 4 5-8 5 8 4-4-2 11H5z"/></svg>`,
  panty:       `<svg class="icon" viewBox="0 0 24 24"><path d="M4 4h16l-2 8-6 8-6-8z"/></svg>`,
  scrap:       `<svg class="icon" viewBox="0 0 24 24"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M8.5 8l11 11M20 4L8.5 15.5M9 9l2 2"/></svg>`
};
function icon(name){ return ICONS[name] || ICONS.scrap; }

/* ============================================================
   ASSET REGISTRY — sourced from core-assets-about.js.
   `photos` is a shallow clone so favorites/board mutations here
   never touch the original PHOTOS_ABOUT array.
============================================================ */
let photos = (window.PHOTOS_ABOUT || []).map(p => ({ ...p }));

/* ============================================================
   FAVORITES + BOARDS (persisted separately from other pages)
============================================================ */
let favorites = new Set();
try { favorites = new Set(JSON.parse(localStorage.getItem('rawx_about_favs') || '[]')); } catch(e){}
function saveFavs(){ try { localStorage.setItem('rawx_about_favs', JSON.stringify([...favorites])); } catch(e){} }

let boards = [];
let boardItems = {};
(function loadBoards(){
  try {
    boards = JSON.parse(localStorage.getItem('rawx_about_boards') || '[]');
    const rawMap = JSON.parse(localStorage.getItem('rawx_about_board_map') || '{}');
    Object.keys(rawMap).forEach(id => { boardItems[id] = new Set(rawMap[id]); });
  } catch(e){}
})();
function saveBoards(){
  try {
    localStorage.setItem('rawx_about_boards', JSON.stringify(boards));
    const plain = {};
    Object.keys(boardItems).forEach(id => { plain[id] = [...boardItems[id]]; });
    localStorage.setItem('rawx_about_board_map', JSON.stringify(plain));
  } catch(e){}
}
function boardCount(id){ return boardItems[id] ? boardItems[id].size : 0; }
function createBoard(name){
  const id = 'b_' + Date.now() + '_' + Math.floor(Math.random()*9999);
  boards.push({ id, name });
  boardItems[id] = new Set();
  saveBoards();
  return id;
}
function deleteBoard(id){
  boards = boards.filter(b => b.id !== id);
  delete boardItems[id];
  if (state.board === id) state.board = null;
  saveBoards();
  render();
}
function toggleBoardItem(boardId, photoId){
  if (!boardItems[boardId]) boardItems[boardId] = new Set();
  if (boardItems[boardId].has(photoId)) boardItems[boardId].delete(photoId);
  else boardItems[boardId].add(photoId);
  saveBoards();
}
function isPinnedAnywhere(photoId){
  return boards.some(b => boardItems[b.id] && boardItems[b.id].has(photoId));
}

/* ============================================================
   STATE
============================================================ */
let state = { mode:'all', view:'grid', tag:null, board:null, query:'', favOnly:false, dash:false };
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
  if (state.board){
    const set = boardItems[state.board] || new Set();
    data = data.filter(p => set.has(p.id));
  } else if (state.tag) data = data.filter(p => p.kind === state.tag);
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
   RENDERERS
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

function renderTagbar(){
  const bar = document.getElementById('tagbar');
  bar.innerHTML = '';
  const allChip = document.createElement('div');
  allChip.className = 'tag-chip' + (state.tag === null && !state.board ? ' active' : '');
  allChip.innerHTML = `${icon('all')}<span>All</span><span class="tag-count">${photos.length}</span>`;
  allChip.onclick = () => { state.tag = null; state.board = null; resetPaging(); render(); };
  bar.appendChild(allChip);
  SECTIONS.forEach(sec => {
    const count = photos.filter(p => p.kind === sec.key).length;
    if (!count) return;
    const chip = document.createElement('div');
    chip.className = 'tag-chip' + (state.tag === sec.key && !state.board ? ' active' : '');
    chip.innerHTML = `<span class="cat-icon">${icon(sec.key)}</span><span>${sec.label}</span><span class="tag-count">${count}</span>`;
    chip.onclick = () => { state.tag = (state.tag === sec.key ? null : sec.key); state.board = null; resetPaging(); render(); };
    bar.appendChild(chip);
  });
}

function renderBoardbar(){
  const bar = document.getElementById('boardbar');
  if (!bar) return;
  bar.innerHTML = '';
  boards.forEach(b => {
    const count = boardCount(b.id);
    const chip = document.createElement('div');
    chip.className = 'board-chip' + (state.board === b.id ? ' active' : '');
    chip.innerHTML = `
      <span class="board-chip-label">${icon('boards')}<span>${escapeHtml(b.name)}</span><span class="tag-count">${count}</span></span>
      <span class="board-chip-del">${icon('trash')}</span>
    `;
    chip.querySelector('.board-chip-label').onclick = () => {
      state.board = (state.board === b.id ? null : b.id);
      state.tag = null;
      resetPaging();
      render();
    };
    chip.querySelector('.board-chip-del').onclick = (e) => { e.stopPropagation(); deleteBoard(b.id); };
    bar.appendChild(chip);
  });
}

function escapeHtml(s){ return s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }

function renderDash(){
  const dash = document.getElementById('dash');
  dash.className = 'dash' + (state.dash ? ' open' : '');
  if (!state.dash) { dash.innerHTML = ''; return; }
  const counts = SECTIONS.map(s => photos.filter(p => p.kind === s.key).length);
  const max = Math.max(1, ...counts);
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

function mediaTag(p, forLightbox){
  if (p.video){
    return `<video src="${p.src}" ${forLightbox ? 'controls autoplay' : 'muted loop playsinline autoplay'} preload="metadata" onloadeddata="this.classList.add('loaded');this.parentElement.classList.add('loaded')"></video>`;
  }
  return `<img src="${p.src}" alt="${p.title}" loading="lazy" onload="this.classList.add('loaded');this.parentElement.classList.add('loaded')" onerror="this.parentElement.classList.add('loaded');this.alt='MISSING: ${p.file}'">`;
}

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
    slice.forEach((p, i) => frag.appendChild(buildCard(p, i)));
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
  const boardsStat = document.getElementById('stat-boards');
  if (boardsStat) boardsStat.textContent = boards.length;
  const heroCount = document.getElementById('hero-frame-count');
  if (heroCount) heroCount.textContent = photos.length + ' Frames';
  renderTagbar();
  renderBoardbar();
}

function buildCard(p, staggerIndex){
  const div = document.createElement('div');
  div.className = 'card';
  div.dataset.id = p.id;
  if (typeof staggerIndex === 'number'){
    div.style.setProperty('--i', staggerIndex % 24);
  }
  const isFav = favorites.has(p.id);
  const isPinned = isPinnedAnywhere(p.id);
  div.innerHTML = `
    <button class="fav-toggle ${isFav ? 'active' : ''}" onclick="event.stopPropagation();toggleFav(${p.id})">${icon(isFav ? 'starFill' : 'star')}</button>
    <button class="pin-toggle ${isPinned ? 'active' : ''}" onclick="event.stopPropagation();openBoardModal(${p.id})">${icon('boards')}</button>
    <div class="media-wrap" onclick="openLb(${p.id})">
      ${p.video ? `<div class="video-badge">${icon('video')}</div>` : ''}
      ${mediaTag(p, false)}
    </div>
    <div class="card-meta"><span>${p.title}</span><span class="cat-icon">${icon(p.kind)}</span></div>
  `;
  return div;
}

function observeSentinel(el){
  if (io) io.disconnect();
  io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) appendMore();
    });
  }, { rootMargin: '600px' });
  io.observe(el);
}

function appendMore(){
  const prevCount = visibleCount;
  visibleCount = Math.min(visibleCount + BATCH, activeSet.length);
  const grid = document.getElementById('grid');
  const oldSentinel = document.getElementById('sentinel');
  if (oldSentinel) oldSentinel.remove();

  const newSlice = activeSet.slice(prevCount, visibleCount);
  const frag = document.createDocumentFragment();
  newSlice.forEach((p, i) => frag.appendChild(buildCard(p, i)));
  grid.appendChild(frag);

  if (visibleCount < activeSet.length){
    const sentinel = document.createElement('div');
    sentinel.id = 'sentinel';
    grid.appendChild(sentinel);
    observeSentinel(sentinel);
  }
  document.getElementById('status').textContent = `${Math.min(visibleCount, activeSet.length)} / ${activeSet.length} SHOWN`;
  document.getElementById('stat-visible').textContent = activeSet.length;
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
  popToggle(id, '.fav-toggle');
  if (document.getElementById('lightbox').style.display === 'flex') updateLbFavBtn();
}

function popToggle(id, selector){
  const card = document.querySelector(`.card[data-id="${id}"]`);
  const el = card && card.querySelector(selector);
  if (!el) return;
  el.classList.remove('pop');
  void el.offsetWidth;
  el.classList.add('pop');
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
   SLIDESHOW
============================================================ */
const SPEED_OPTIONS = [1.5, 2, 3, 5, 8, 12];
let speedIndex = 2;
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
function toggleSlideshow(){ slidePlaying ? stopSlideshow() : startSlideshow(); }
function startSlideshow(){ slidePlaying = true; updatePlayBtn(); armSlide(); }
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

/* ============================================================
   ADD-TO-BOARD MODAL
============================================================ */
let modalPhotoId = null;
function openBoardModal(photoId){
  modalPhotoId = photoId;
  const p = photos.find(x => x.id === photoId);
  const thumbRow = document.getElementById('board-modal-thumb');
  thumbRow.innerHTML = p.video
    ? `<div style="width:44px;height:44px;background:#222;display:flex;align-items:center;justify-content:center;flex-shrink:0;">${icon('video')}</div><span>${p.title}</span>`
    : `<img src="${p.src}" alt=""><span>${p.title}</span>`;
  renderBoardModalList();
  document.getElementById('board-modal-overlay').classList.add('open');
  document.getElementById('board-new-input').value = '';
}
function closeBoardModal(){
  document.getElementById('board-modal-overlay').classList.remove('open');
  const pinnedId = modalPhotoId;
  modalPhotoId = null;
  render();
  if (pinnedId !== null) popToggle(pinnedId, '.pin-toggle');
  if (document.getElementById('lightbox').style.display === 'flex') updateLbFavBtn();
}
function renderBoardModalList(){
  const list = document.getElementById('board-modal-list');
  if (!boards.length){
    list.innerHTML = `<div class="board-empty-msg" style="padding:22px;text-align:center;color:var(--dim2);font-size:10px;">NO BOARDS YET — CREATE ONE BELOW</div>`;
    return;
  }
  list.innerHTML = '';
  boards.forEach(b => {
    const checked = boardItems[b.id] && boardItems[b.id].has(modalPhotoId);
    const row = document.createElement('div');
    row.className = 'board-row' + (checked ? ' checked' : '');
    row.innerHTML = `
      <span class="board-checkbox">${checked ? icon('check') : ''}</span>
      <span>${escapeHtml(b.name)}</span>
      <span style="margin-left:auto;color:var(--dim2);font-size:9px;">${boardCount(b.id)}</span>
      <span style="opacity:0.5;padding:4px;" onclick="event.stopPropagation();deleteBoard('${b.id}');renderBoardModalList();">${icon('trash')}</span>
    `;
    row.onclick = (e) => {
      if (e.target.closest('span[onclick]')) return;
      toggleBoardItem(b.id, modalPhotoId);
      renderBoardModalList();
    };
    list.appendChild(row);
  });
}
function submitNewBoard(){
  const input = document.getElementById('board-new-input');
  const name = input.value.trim();
  if (!name) return;
  const id = createBoard(name);
  if (id && modalPhotoId !== null) toggleBoardItem(id, modalPhotoId);
  input.value = '';
  renderBoardModalList();
}

/* ============================================================
   LIGHTBOX
============================================================ */
function openLb(id){
  lbIndex = activeSet.findIndex(p => p.id === id);
  zoomed = false;
  showLbFrame();
  const lb = document.getElementById('lightbox');
  lb.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  void lb.offsetWidth;
  requestAnimationFrame(() => lb.classList.add('open'));
}

function updateLbFavBtn(){
  const p = activeSet[lbIndex];
  const btn = document.getElementById('lb-fav');
  const isFav = favorites.has(p.id);
  btn.innerHTML = icon(isFav ? 'starFill' : 'star');
  btn.classList.toggle('active', isFav);
  const boardBtn = document.getElementById('lb-board');
  if (boardBtn) boardBtn.classList.toggle('active', isPinnedAnywhere(p.id));
}

function toggleFavInLb(){ toggleFav(activeSet[lbIndex].id); }

function copyLbPath(){
  const text = activeSet[lbIndex].file;
  if (navigator.clipboard) navigator.clipboard.writeText(text).then(() => showToast('FILENAME COPIED'));
  else showToast('COPY UNSUPPORTED');
}

function showLbFrame(){
  const p = activeSet[lbIndex];
  const holder = document.getElementById('lb-media-holder');
  holder.innerHTML = mediaTag(p, true);
  const mediaEl = holder.querySelector('img,video');
  if (mediaEl && mediaEl.tagName === 'IMG'){
    mediaEl.onclick = () => { zoomed = !zoomed; mediaEl.classList.toggle('zoomed', zoomed); };
  }
  document.getElementById('lb-cat-icon').innerHTML = icon(p.kind);
  document.getElementById('lb-title').textContent = `${p.title.toUpperCase()} // FRM ${lbIndex + 1} OF ${activeSet.length}`;
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
  const lb = document.getElementById('lightbox');
  lb.classList.remove('open');
  document.body.style.overflow = '';
  if (document.fullscreenElement) document.exitFullscreen();
  setTimeout(() => {
    lb.style.display = 'none';
    document.getElementById('lb-media-holder').innerHTML = '';
  }, 300);
}
function toggleFullscreen(){
  const lb = document.getElementById('lightbox');
  if (!document.fullscreenElement) lb.requestFullscreen?.();
  else document.exitFullscreen?.();
}

document.addEventListener('keydown', e => {
  const boardOverlay = document.getElementById('board-modal-overlay');
  if (boardOverlay && boardOverlay.classList.contains('open')){
    if (e.key === 'Escape') closeBoardModal();
    return;
  }
  if (document.getElementById('lightbox').style.display !== 'flex'){
    if (e.key === '/' ){ e.preventDefault(); document.getElementById('search')?.focus(); }
    return;
  }
  if (e.key === 'Escape') closeLb();
  if (e.key === 'ArrowRight') navLb(1);
  if (e.key === 'ArrowLeft') navLb(-1);
  if (e.key === 'f' || e.key === 'F') toggleFullscreen();
  if (e.key === 'p' || e.key === 'P') toggleSlideshow();
  if (e.key === 'b' || e.key === 'B') openBoardModal(activeSet[lbIndex].id);
  if (e.key === ' '){ e.preventDefault(); toggleFavInLb(); }
});

let touchStartX = 0;
document.addEventListener('DOMContentLoaded', () => {
  const stage = document.getElementById('lb-stage');
  if (!stage) return;
  stage.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; });
  stage.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 50) navLb(dx > 0 ? -1 : 1);
  });
});

/* ============================================================
   BUYER INQUIRY MODAL
============================================================ */
const SPEC_BY_KIND = {
  twoset:     { material: 'Nylon-spandex blend, matte finish',      moq: '150 units / colorway', sizes: 'XS–XL' },
  activewear: { material: 'Compression poly-spandex, 4-way stretch', moq: '200 units / colorway', sizes: 'XS–XXL' },
  bodysuit:   { material: 'Microfiber-elastane, seamless construction', moq: '150 units / colorway', sizes: 'XS–XL' },
  essential:  { material: 'Cotton-modal blend, tag-free',           moq: '300 units / colorway', sizes: 'XS–XXL' },
  thong:      { material: 'Microfiber-lace blend',                  moq: '300 units / colorway', sizes: 'XS–L' },
  panty:      { material: 'Cotton-elastane blend',                  moq: '300 units / colorway', sizes: 'XS–XL' },
  lingerie:   { material: 'Lace-mesh blend, underwire optional',    moq: '150 units / colorway', sizes: 'XS–XL' }
};
function specForKind(kind){
  return SPEC_BY_KIND[kind] || { material: 'Spec sheet on request', moq: 'Quoted per style', sizes: 'XS–XL' };
}

function openInquiry(id){
  const p = photos.find(x => x.id === id);
  if (!p) return;
  document.getElementById('inq-name').textContent = p.title;
  document.getElementById('inq-media').innerHTML = p.video
    ? `<div style="display:flex;align-items:center;justify-content:center;width:100%;height:100%;background:#141414;">${icon('video')}</div>`
    : `<img src="${p.src}" alt="${p.title}">`;
  document.getElementById('inq-desc').textContent = `Production reference frame — ${p.title}, sourced from the RAWx wholesale registry.`;
  const spec = specForKind(p.kind);
  document.getElementById('inq-material').textContent = spec.material;
  document.getElementById('inq-moq').textContent = spec.moq;
  document.getElementById('inq-sizes').textContent = spec.sizes;
  document.getElementById('inq-ref').textContent = 'RAWX-' + String(p.id).padStart(4, '0');
  document.getElementById('inquiry-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeInquiry(){
  document.getElementById('inquiry-modal').classList.remove('open');
  document.body.style.overflow = document.getElementById('lightbox').style.display === 'flex' ? 'hidden' : '';
}
function submitInquiry(e){
  e.preventDefault();
  const company = document.getElementById('inq-company').value;
  showToast(`INQUIRY SENT — ${company || 'BUYER'} LOGGED`);
  document.getElementById('inq-form').reset();
  closeInquiry();
}

/* ============================================================
   MAGNETIC MICRO-INTERACTION
============================================================ */
const MAGNETIC_SELECTOR = '.btn, .tag-chip, .board-chip, .lb-btn';
const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let magneticEl = null;

function resetMagnetic(el){
  if (!el) return;
  el.style.transform = '';
}

if (!reduceMotion){
  document.addEventListener('mousemove', (e) => {
    const el = e.target.closest ? e.target.closest(MAGNETIC_SELECTOR) : null;
    if (el){
      if (magneticEl && magneticEl !== el) resetMagnetic(magneticEl);
      magneticEl = el;
      const r = el.getBoundingClientRect();
      const relX = e.clientX - r.left - r.width / 2;
      const relY = e.clientY - r.top - r.height / 2;
      const strength = 0.16;
      const maxPull = 6;
      const tx = Math.max(-maxPull, Math.min(maxPull, relX * strength));
      const ty = Math.max(-maxPull, Math.min(maxPull, relY * strength));
      el.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
    } else if (magneticEl){
      resetMagnetic(magneticEl);
      magneticEl = null;
    }
  }, { passive: true });

  document.addEventListener('mouseleave', () => {
    if (magneticEl){ resetMagnetic(magneticEl); magneticEl = null; }
  });
}

/* ============================================================
   ICON INIT FOR STATIC BUTTONS
============================================================ */
function initLbIcons(){
  const iconsById = {
    'lb-fullscreen': 'fullscreen',
    'lb-download': 'download',
    'lb-copy': 'copy',
    'lb-board': 'boards',
    'lb-play': 'play',
    'lb-inquiry': 'quote',
    'board-modal-close': 'close',
    'board-new-btn': 'plus'
  };
  for (let id in iconsById) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = icon(iconsById[id]);
  }
  const closeBtn = document.querySelector('.lb-close');
  if (closeBtn) closeBtn.innerHTML = icon('close');
  const prevBtn = document.querySelector('.lb-nav.prev');
  if (prevBtn) prevBtn.innerHTML = icon('prev');
  const nextBtn = document.querySelector('.lb-nav.next');
  if (nextBtn) nextBtn.innerHTML = icon('next');
}

/* ============================================================
   INIT
============================================================ */
window.addEventListener('DOMContentLoaded', () => {
  initLbIcons();
  updateSpeedBtn();
  render();
});
