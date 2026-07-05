/* ============================================================
   RAWx ENGINE (ABOUT PAGE - FULLY SYNCED WITH B2B)
============================================================ */

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('grid');
    if (!grid || typeof window.PHOTOS_ABOUT === 'undefined') return;

    // ১. গ্যালারি রেন্ডারিং লজিক
    window.PHOTOS_ABOUT.forEach((p, i) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="media-wrap" onclick="openLb(${p.id})">
                <img src="${p.src}" alt="${p.title}" loading="lazy" 
                     onerror="this.parentElement.innerHTML='<div class=error>!</div>'">
            </div>
            <div class="card-meta">${p.title}</div>
        `;
        grid.appendChild(card);
    });
});

/* ============================================================
   LIGHTBOX (B2B SYNCED)
============================================================ */
function openLb(id) {
    const p = window.PHOTOS_ABOUT.find(x => x.id === id);
    const lb = document.getElementById('lightbox');
    const holder = document.getElementById('lb-media-holder');
    
    if (!lb || !holder) return;

    // মিডিয়া লোড করা
    holder.innerHTML = `<img src="${p.src}" alt="${p.title}">`;
    lb.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeLb() {
    document.getElementById('lightbox').style.display = 'none';
    document.body.style.overflow = '';
}

// ক্লোজ করার জন্য ব্যাকগ্রাউন্ড ক্লিক
document.getElementById('lightbox')?.addEventListener('click', (e) => {
    if (e.target.id === 'lightbox') closeLb();
});