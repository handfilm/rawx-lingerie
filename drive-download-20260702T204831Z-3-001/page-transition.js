/* ============================================================
   RAWx PAGE TRANSITION — shared portal-jump effect
   Loaded by both index.html and index-b2b.html. Injects its own
   styles and a full-bleed veil, then intercepts clicks on any
   link pointing to index.html or index-b2b.html so a jump
   between the D2C and B2B portals reads as moving between two
   rooms of one machine, not two different websites.
   Self-contained — no dependency on core-assets.js.
============================================================ */
(function(){
  'use strict';

  var CSS = [
    '#rawx-transition{position:fixed;inset:0;z-index:99999;background:#0a0a0a;',
    'opacity:0;pointer-events:none;transition:opacity .3s ease;}',
    '#rawx-transition.on{opacity:1;pointer-events:all;}',
    '#rawx-transition::after{content:"";position:absolute;left:0;right:0;top:-4px;height:3px;',
    'background:linear-gradient(90deg,transparent,#ff2e2e,#ffb020,transparent);',
    'box-shadow:0 0 22px 2px rgba(255,46,46,.65);opacity:0;}',
    '#rawx-transition.on::after{animation:rawxScan .5s linear forwards;}',
    '@keyframes rawxScan{0%{top:-4px;opacity:1;}100%{top:100%;opacity:1;}}',
    '@media (prefers-reduced-motion:reduce){',
    '  #rawx-transition{transition:opacity .01ms;}',
    '  #rawx-transition.on::after{animation:none;display:none;}',
    '}'
  ].join('');

  function init(){
    var style = document.createElement('style');
    style.textContent = CSS;
    document.head.appendChild(style);

    var veil = document.createElement('div');
    veil.id = 'rawx-transition';
    document.body.appendChild(veil);

    function isPortalLink(href){
      return /(^|\/)index(-b2b)?\.html(\?|#|$)/.test(href);
    }

    document.addEventListener('click', function(e){
      var a = e.target.closest('a[href]');
      if (!a) return;
      var href = a.getAttribute('href');
      if (!href || !isPortalLink(href)) return;
      if (a.target === '_blank' || e.metaKey || e.ctrlKey || e.shiftKey) return;

      e.preventDefault();
      veil.classList.add('on');
      setTimeout(function(){ window.location.href = href; }, 460);
    });
  }

  if (document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
