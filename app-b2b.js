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
  /* Categories */
  hunkemoller:`<svg class="icon" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
  twoset:     `<svg class="icon" viewBox="0 0 24 24"><circle cx="8" cy="8" r="4"/><circle cx="16" cy="16" r="4"/></svg>`,
  activewear: `<svg class="icon" viewBox="0 0 24 24"><path d="M6 7l3-3h6l3 3 3 3-3 3v8H6v-8L3 10z"/></svg>`,
  bodysuit:   `<svg class="icon" viewBox="0 0 24 24"><path d="M9 3h6l1 5-2 2v11H10V10L8 8z"/></svg>`,
  essential:  `<svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3"/></svg>`,
  social:     `<svg class="icon" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>`,
  lingerie:   `<svg class="icon" viewBox="0 0 24 24"><path d="M3 8l4 4 5-8 5 8 4-4-2 11H5z"/></svg>`,
  panty:      `<svg class="icon" viewBox="0 0 24 24"><path d="M4 4h16l-2 8-6 8-6-8z"/></svg>`,
  scrap:      `<svg class="icon" viewBox="0 0 24 24"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M8.5 8l11 11M20 4L8.5 15.5M9 9l2 2"/></svg>`
};
function icon(name){ return ICONS[name] || ICONS.scrap; }

/* ============================================================
   ASSET REGISTRY — sourced from core-assets.js (shared spine).
   SECTIONS, BASE, isVideoExt, PHOTOS are all declared there and
   loaded via <script src="core-assets.js"></script> BEFORE this
   file. Do not redeclare them here — that throws a fatal
   "already declared" SyntaxError and blanks the whole page.

   `photos` is a shallow clone of the shared PHOTOS registry so
   this page's favorites/boards mutations never touch the
   original array used by index.html.
============================================================ */
let photos = PHOTOS.map(p => ({ ...p }));

/* Legacy placeholder kept only for reference — superseded by
   core-assets.js PHOTOS above.
const _LEGACY_rawFilesArray = [
"2set (1).jpg", "2set (1).webp", "2set (10).webp", "2set (11).webp", "2set (12).webp", "2set (13).webp", "2set (14).webp", "2set (15).webp", "2set (16).webp", "2set (17).webp", "2set (18).webp", "2set (19).webp", "2set (2).jpg", "2set (2).webp", "2set (20).webp", "2set (21).webp", "2set (22).webp", "2set (23).webp", "2set (24).webp", "2set (25).webp", "2set (26).webp", "2set (27).webp", "2set (28).webp", "2set (29).webp", "2set (3).jpg", "2set (3).webp", "2set (30).webp", "2set (31).webp", "2set (32).webp", "2set (33).webp", "2set (4).jpg", "2set (4).webp", "2set (5).jpg", "2set (5).webp", "2set (6).jpg", "2set (6).webp", "2set (7).webp", "2set (8).webp", "2set (9).webp", "2set.jpg", "2set.webp", "56915.webp", "activewear (1).webp", "activewear (10).webp", "activewear (11).webp", "activewear (12).webp", "activewear (13).webp", "activewear (14).webp", "activewear (15).webp", "activewear (16).webp", "activewear (17).webp", "activewear (18).webp", "activewear (19).webp", "activewear (2).webp", "activewear (20).webp", "activewear (21).webp", "activewear (22).webp", "activewear (23).webp", "activewear (24).webp", "activewear (25).webp", "activewear (26).webp", "activewear (27).webp", "activewear (28).webp", "activewear (29).webp", "activewear (3).webp", "activewear (30).webp", "activewear (31).webp", "activewear (32).webp", "activewear (33).webp", "activewear (34).webp", "activewear (35).webp", "activewear (36).webp", "activewear (37).webp", "activewear (38).webp", "activewear (39).webp", "activewear (4).webp", "activewear (40).webp", "activewear (41).webp", "activewear (42).webp", "activewear (43).webp", "activewear (44).webp", "activewear (45).webp", "activewear (46).webp", "activewear (47).webp", "activewear (48).webp", "activewear (49).webp", "activewear (5).webp", "activewear (50).webp", "activewear (51).webp", "activewear (52).webp", "activewear (53).webp", "activewear (54).webp", "activewear (55).webp", "activewear (56).webp", "activewear (57).webp", "activewear (58).webp", "activewear (59).webp", "activewear (6).webp", "activewear (7).webp", "activewear (8).webp", "activewear (9).webp", "bodysuit (1).webp", "bodysuit (11).jpeg", "bodysuit (12).jpeg", "bodysuit (13).jpeg", "bodysuit (14).jpeg", "bodysuit (14).png", "bodysuit (15).jpeg", "bodysuit (15).png", "bodysuit (16).jpeg", "bodysuit (16).webp", "bodysuit (17).jpeg", "bodysuit (17).webp", "bodysuit (18).jpeg", "bodysuit (18).webp", "bodysuit (19).webp", "bodysuit (2).webp", "bodysuit (20).webp", "bodysuit (3).webp", "bodysuit (4).webp", "bodysuit (5).webp", "bodysuit (6).webp", "bodysuit (61).jpg", "bodysuit (7).webp", "bodysuit (8).webp", "bodysuit (9).webp", "bodysuit.jpg", "bodysuit.webp", "essential (1).webp", "essential (2).webp", "essential (3).webp", "essential (4).webp", "essential (5).webp", "essential (6).webp", "essential (7).webp", "essential (8).webp", "essential (9).webp", "Hunkemoller (1).jpg", "Hunkemoller (1).webp", "Hunkemoller (10).jpg", "Hunkemoller (10).webp", "Hunkemoller (100).jpg", "Hunkemoller (100).webp", "Hunkemoller (101).jpg", "Hunkemoller (101).webp", "Hunkemoller (102).jpg", "Hunkemoller (102).webp", "Hunkemoller (103).jpg", "Hunkemoller (103).webp", "Hunkemoller (104).jpg", "Hunkemoller (104).webp", "Hunkemoller (105).jpg", "Hunkemoller (105).webp", "Hunkemoller (106).jpg", "Hunkemoller (106).webp", "Hunkemoller (107).jpg", "Hunkemoller (107).webp", "Hunkemoller (108).jpg", "Hunkemoller (108).webp", "Hunkemoller (109).jpg", "Hunkemoller (109).webp", "Hunkemoller (11).jpg", "Hunkemoller (11).webp", "Hunkemoller (110).jpg", "Hunkemoller (110).webp", "Hunkemoller (111).jpg", "Hunkemoller (111).webp", "Hunkemoller (112).jpg", "Hunkemoller (112).webp", "Hunkemoller (113).jpg", "Hunkemoller (113).webp", "Hunkemoller (114).jpg", "Hunkemoller (114).webp", "Hunkemoller (115).jpg", "Hunkemoller (115).webp", "Hunkemoller (116).jpg", "Hunkemoller (116).webp", "Hunkemoller (117).jpg", "Hunkemoller (117).webp", "Hunkemoller (118).webp", "Hunkemoller (119).webp", "Hunkemoller (12).jpg", "Hunkemoller (12).webp", "Hunkemoller (120).webp", "Hunkemoller (121).webp", "Hunkemoller (122).webp", "Hunkemoller (123).webp", "Hunkemoller (124).webp", "Hunkemoller (125).webp", "Hunkemoller (126).webp", "Hunkemoller (127).webp", "Hunkemoller (128).webp", "Hunkemoller (129).webp", "Hunkemoller (13).jpg", "Hunkemoller (13).webp", "Hunkemoller (130).webp", "Hunkemoller (131).webp", "Hunkemoller (132).webp", "Hunkemoller (133).webp", "Hunkemoller (134).webp", "Hunkemoller (135).webp", "Hunkemoller (136).webp", "Hunkemoller (137).webp", "Hunkemoller (138).webp", "Hunkemoller (139).webp", "Hunkemoller (14).jpg", "Hunkemoller (14).webp", "Hunkemoller (140).webp", "Hunkemoller (141).webp", "Hunkemoller (142).webp", "Hunkemoller (143).webp", "Hunkemoller (144).webp", "Hunkemoller (145).webp", "Hunkemoller (146).webp", "Hunkemoller (147).webp", "Hunkemoller (148).webp", "Hunkemoller (149).webp", "Hunkemoller (15).jpg", "Hunkemoller (15).webp", "Hunkemoller (150).webp", "Hunkemoller (151).webp", "Hunkemoller (152).webp", "Hunkemoller (153).webp", "Hunkemoller (154).webp", "Hunkemoller (155).webp", "Hunkemoller (156).webp", "Hunkemoller (157).webp", "Hunkemoller (158).webp", "Hunkemoller (159).webp", "Hunkemoller (16).jpg", "Hunkemoller (16).webp", "Hunkemoller (160).webp", "Hunkemoller (161).webp", "Hunkemoller (162).webp", "Hunkemoller (163).webp", "Hunkemoller (164).webp", "Hunkemoller (165).webp", "Hunkemoller (166).webp", "Hunkemoller (167).webp", "Hunkemoller (168).webp", "Hunkemoller (169).webp", "Hunkemoller (17).jpg", "Hunkemoller (17).webp", "Hunkemoller (170).webp", "Hunkemoller (171).webp", "Hunkemoller (172).webp", "Hunkemoller (173).webp", "Hunkemoller (174).webp", "Hunkemoller (175).webp", "Hunkemoller (176).webp", "Hunkemoller (177).webp", "Hunkemoller (178).webp", "Hunkemoller (179).webp", "Hunkemoller (18).jpg", "Hunkemoller (18).webp", "Hunkemoller (180).webp", "Hunkemoller (181).webp", "Hunkemoller (182).webp", "Hunkemoller (183).webp", "Hunkemoller (184).webp", "Hunkemoller (185).webp", "Hunkemoller (186).webp", "Hunkemoller (187).webp", "Hunkemoller (19).jpg", "Hunkemoller (19).webp", "Hunkemoller (2).jpg", "Hunkemoller (2).webp", "Hunkemoller (20).jpg", "Hunkemoller (20).webp", "Hunkemoller (21).jpg", "Hunkemoller (21).webp", "Hunkemoller (22).jpg", "Hunkemoller (22).webp", "Hunkemoller (23).jpg", "Hunkemoller (23).webp", "Hunkemoller (24).jpg", "Hunkemoller (24).webp", "Hunkemoller (25).jpg", "Hunkemoller (25).webp", "Hunkemoller (26).jpg", "Hunkemoller (26).webp", "Hunkemoller (27).jpg", "Hunkemoller (27).webp", "Hunkemoller (28).jpg", "Hunkemoller (28).webp", "Hunkemoller (29).jpg", "Hunkemoller (29).webp", "Hunkemoller (3).jpg", "Hunkemoller (3).webp", "Hunkemoller (30).jpg", "Hunkemoller (30).webp", "Hunkemoller (31).jpg", "Hunkemoller (31).webp", "Hunkemoller (32).jpg", "Hunkemoller (32).webp", "Hunkemoller (33).jpg", "Hunkemoller (33).webp", "Hunkemoller (34).jpg", "Hunkemoller (34).webp", "Hunkemoller (35).jpg", "Hunkemoller (35).webp", "Hunkemoller (36).jpg", "Hunkemoller (36).webp", "Hunkemoller (37).jpg", "Hunkemoller (37).webp", "Hunkemoller (38).jpg", "Hunkemoller (38).webp", "Hunkemoller (39).jpg", "Hunkemoller (39).webp", "Hunkemoller (4).jpg", "Hunkemoller (4).webp", "Hunkemoller (40).jpg", "Hunkemoller (40).webp", "Hunkemoller (41).jpg", "Hunkemoller (41).webp", "Hunkemoller (42).jpg", "Hunkemoller (42).webp", "Hunkemoller (43).jpg", "Hunkemoller (43).webp", "Hunkemoller (44).jpg", "Hunkemoller (44).webp", "Hunkemoller (45).jpg", "Hunkemoller (45).webp", "Hunkemoller (46).jpg", "Hunkemoller (46).webp", "Hunkemoller (47).jpg", "Hunkemoller (47).webp", "Hunkemoller (48).jpg", "Hunkemoller (48).webp", "Hunkemoller (49).jpg", "Hunkemoller (49).webp", "Hunkemoller (5).jpg", "Hunkemoller (5).webp", "Hunkemoller (50).jpg", "Hunkemoller (50).webp", "Hunkemoller (51).jpg", "Hunkemoller (51).webp", "Hunkemoller (52).jpg", "Hunkemoller (52).webp", "Hunkemoller (53).jpg", "Hunkemoller (53).webp", "Hunkemoller (54).jpg", "Hunkemoller (54).webp", "Hunkemoller (55).jpg", "Hunkemoller (55).webp", "Hunkemoller (56).jpg", "Hunkemoller (56).webp", "Hunkemoller (57).jpg", "Hunkemoller (57).webp", "Hunkemoller (58).jpg", "Hunkemoller (58).webp", "Hunkemoller (59).jpg", "Hunkemoller (59).webp", "Hunkemoller (6).jpg", "Hunkemoller (6).webp", "Hunkemoller (60).jpg", "Hunkemoller (60).webp", "Hunkemoller (61).jpg", "Hunkemoller (61).webp", "Hunkemoller (62).jpg", "Hunkemoller (62).webp", "Hunkemoller (63).jpg", "Hunkemoller (63).webp", "Hunkemoller (64).jpg", "Hunkemoller (64).webp", "Hunkemoller (65).jpg", "Hunkemoller (65).webp", "Hunkemoller (66).jpg", "Hunkemoller (66).webp", "Hunkemoller (67).jpg", "Hunkemoller (67).webp", "Hunkemoller (68).jpg", "Hunkemoller (68).webp", "Hunkemoller (69).jpg", "Hunkemoller (69).webp", "Hunkemoller (7).jpg", "Hunkemoller (7).webp", "Hunkemoller (70).jpg", "Hunkemoller (70).webp", "Hunkemoller (71).jpg", "Hunkemoller (71).webp", "Hunkemoller (72).jpg", "Hunkemoller (72).webp", "Hunkemoller (73).jpg", "Hunkemoller (73).webp", "Hunkemoller (74).jpg", "Hunkemoller (74).webp", "Hunkemoller (75).jpg", "Hunkemoller (75).webp", "Hunkemoller (76).jpg", "Hunkemoller (76).webp", "Hunkemoller (77).jpg", "Hunkemoller (77).webp", "Hunkemoller (78).jpg", "Hunkemoller (78).webp", "Hunkemoller (79).jpg", "Hunkemoller (79).webp", "Hunkemoller (8).jpg", "Hunkemoller (8).webp", "Hunkemoller (80).jpg", "Hunkemoller (80).webp", "Hunkemoller (81).jpg", "Hunkemoller (81).webp", "Hunkemoller (82).jpg", "Hunkemoller (82).webp", "Hunkemoller (83).jpg", "Hunkemoller (83).webp", "Hunkemoller (84).jpg", "Hunkemoller (84).webp", "Hunkemoller (85).jpg", "Hunkemoller (85).webp", "Hunkemoller (86).jpg", "Hunkemoller (86).webp", "Hunkemoller (87).jpg", "Hunkemoller (87).webp", "Hunkemoller (88).jpg", "Hunkemoller (88).webp", "Hunkemoller (89).jpg", "Hunkemoller (89).webp", "Hunkemoller (9).jpg", "Hunkemoller (9).webp", "Hunkemoller (90).jpg", "Hunkemoller (90).webp", "Hunkemoller (91).jpg", "Hunkemoller (91).webp", "Hunkemoller (92).jpg", "Hunkemoller (92).webp", "Hunkemoller (93).jpg", "Hunkemoller (93).webp", "Hunkemoller (94).jpg", "Hunkemoller (94).webp", "Hunkemoller (95).jpg", "Hunkemoller (95).webp", "Hunkemoller (96).jpg", "Hunkemoller (96).webp", "Hunkemoller (97).jpg", "Hunkemoller (97).webp", "Hunkemoller (98).jpg", "Hunkemoller (98).webp", "Hunkemoller (99).jpg", "Hunkemoller (99).webp", "ig (1).png", "ig (1).webp", "ig (10).webp", "ig (11).webp", "ig (12).webp", "ig (13).webp", "ig (2).jpg", "ig (2).webp", "ig (3).webp", "ig (4).webp", "ig (5).webp", "ig (6).webp", "ig (7).webp", "ig (8).webp", "ig (9).webp", "image (13).jpg", "image (14).jpg", "image (15).jpg", "image (16).jpg", "image (17).jpg", "image (18).jpg", "image (19).jpg", "image (20).jpg", "images (19).jpeg", "images (20).jpeg", "images (21).jpeg", "images (22).jpeg", "images (23).jpeg", "images (24).jpeg", "images (25).jpeg", "Lingerie (1).webp", "Lingerie (10).webp", "Lingerie (11).webp", "Lingerie (12).webp", "Lingerie (13).webp", "Lingerie (14).webp", "Lingerie (15).webp", "Lingerie (16).webp", "Lingerie (17).webp", "Lingerie (18).webp", "Lingerie (19).webp", "Lingerie (2).webp", "Lingerie (20).webp", "Lingerie (21).webp", "Lingerie (22).webp", "Lingerie (23).webp", "Lingerie (24).webp", "Lingerie (25).webp", "Lingerie (26).webp", "Lingerie (27).webp", "Lingerie (28).webp", "Lingerie (29).webp", "Lingerie (3).webp", "Lingerie (30).webp", "Lingerie (31).webp", "Lingerie (32).webp", "Lingerie (33).webp", "Lingerie (34).webp", "Lingerie (4).webp", "Lingerie (5).webp", "Lingerie (6).webp", "Lingerie (7).webp", "Lingerie (8).webp", "Lingerie (9).webp", "panty (1).webp", "panty (10).webp", "panty (11).webp", "panty (12).webp", "panty (13).webp", "panty (14).webp", "panty (15).webp", "panty (16).webp", "panty (17).webp", "panty (18).webp", "panty (19).webp", "panty (2).webp", "panty (20).webp", "panty (21).webp", "panty (22).webp", "panty (23).webp", "panty (24).webp", "panty (25).webp", "panty (26).webp", "panty (27).webp", "panty (28).webp", "panty (29).webp", "panty (3).webp", "panty (30).webp", "panty (31).webp", "panty (32).webp", "panty (33).webp", "panty (34).webp", "panty (35).webp", "panty (4).webp", "panty (5).webp", "panty (6).webp", "panty (7).webp", "panty (8).webp", "panty (9).webp", "pin (1).jpg", "pin (10).jpg", "pin (11).jpg", "pin (12).jpg", "pin (13).jpg", "pin (14).jpg", "pin (15).jpg", "pin (16).jpg", "pin (17).jpg", "pin (18).jpg", "pin (19).jpg", "pin (2).jpg", "pin (20).jpg", "pin (21).jpg", "pin (22).jpg", "pin (23).jpg", "pin (24).jpg", "pin (25).jpg", "pin (26).jpg", "pin (27).jpg", "pin (28).jpg", "pin (29).jpg", "pin (30).jpg", "pin (31).jpg", "pin (32).jpg", "pin (33).jpg", "pin (34).jpg", "pin (36).jpg", "pin (37).jpg", "pin (38).jpg", "pin (39).jpg", "pin (4).jpg", "pin (40).jpg", "pin (41).jpg", "pin (42).jpg", "pin (43).jpg", "pin (45).jpg", "pin (46).jpg", "pin (47).jpg", "pin (48).jpg", "pin (49).jpg", "pin (5).jpg", "pin (50).jpg", "pin (51).jpg", "pin (52).jpg", "pin (54).jpg", "pin (55).jpg", "pin (56).jpg", "pin (57).jpg", "pin (58).jpg", "pin (59).jpg", "pin (6).jpg", "pin (60).jpg", "pin (61).jpg", "pin (62).jpg", "pin (63).jpg", "pin (64).jpg", "pin (65).jpg", "pin (66).jpg", "pin (67).jpg", "pin (68).jpg", "pin (69).jpg", "pin (7).jpg", "pin (8).jpg", "pin (9).jpg", "scrap (1).jpeg", "scrap (1).jpg", "scrap (1).png", "scrap (1).webp", "scrap (10).jpg", "scrap (10).png", "scrap (11).jpg", "scrap (12).jpg", "scrap (13).jpg", "scrap (14).jpg", "scrap (15).jpg", "scrap (16).jpg", "scrap (17).jpg", "scrap (18).jpg", "scrap (19).jpg", "scrap (2).jpg", "scrap (2).png", "scrap (20).jpg", "scrap (21).jpg", "scrap (22).jpg", "scrap (23).jpg", "scrap (24).jpg", "scrap (25).jpg", "scrap (26).jpg", "scrap (27).jpg", "scrap (28).jpg", "scrap (29).jpg", "scrap (3).jpg", "scrap (3).png", "scrap (30).jpg", "scrap (31).jpg", "scrap (32).jpg", "scrap (33).jpg", "scrap (34).jpg", "scrap (35).jpg", "scrap (36).jpg", "scrap (37).jpg", "scrap (38).jpg", "scrap (39).jpg", "scrap (4).jpg", "scrap (4).png", "scrap (40).jpg", "scrap (41).jpg", "scrap (42).jpg", "scrap (43).jpg", "scrap (44).jpg", "scrap (45).jpg", "scrap (46).jpg", "scrap (47).jpg", "scrap (48).jpg", "scrap (49).jpg", "scrap (5).jpg", "scrap (5).png", "scrap (50).jpg", "scrap (51).jpg", "scrap (52).jpg", "scrap (53).jpg", "scrap (54).jpg", "scrap (55).jpg", "scrap (56).jpg", "scrap (57).jpg", "scrap (58).jpg", "scrap (59).jpg", "scrap (6).jpg", "scrap (6).png", "scrap (60).jpg", "scrap (61).jpg", "scrap (62).jpg", "scrap (63).jpg", "scrap (64).jpg", "scrap (65).jpg", "scrap (66).jpg", "scrap (67).jpg", "scrap (68).jpg", "scrap (69).jpg", "scrap (7).jpg", "scrap (7).png", "scrap (70).jpg", "scrap (71).jpg", "scrap (72).jpg", "scrap (73).jpg", "scrap (74).jpg", "scrap (75).jpg", "scrap (76).jpg", "scrap (77).jpg", "scrap (78).jpg", "scrap (79).jpg", "scrap (8).jpg", "scrap (8).png", "scrap (80).jpg", "scrap (81).jpg", "scrap (82).jpg", "scrap (83).jpg", "scrap (84).jpg", "scrap (85).jpg", "scrap (86).jpg", "scrap (87).jpg", "scrap (88).jpg", "scrap (89).jpg", "scrap (9).jpg", "scrap (9).png", "scrap (90).jpg", "scrap (91).jpg", "thong (1).jpg", "thong (1).png", "thong (1).webp", "thong (10).webp", "thong (11).webp", "thong (12).webp", "thong (13).webp", "thong (14).webp", "thong (15).webp", "thong (16).webp", "thong (17).webp", "thong (18).webp", "thong (19).webp", "thong (2).png", "thong (2).webp", "thong (20).webp", "thong (21).webp", "thong (22).webp", "thong (23).webp", "thong (24).webp", "thong (25).webp", "thong (26).webp", "thong (27).webp", "thong (28).webp", "thong (29).webp", "thong (3).webp", "thong (30).webp", "thong (31).webp", "thong (32).webp", "thong (33).webp", "thong (34).webp", "thong (35).webp", "thong (36).webp", "thong (37).webp", "thong (38).webp", "thong (39).webp", "thong (4).webp", "thong (40).webp", "thong (41).webp", "thong (42).webp", "thong (43).webp", "thong (44).webp", "thong (45).webp", "thong (46).webp", "thong (47).webp", "thong (48).webp", "thong (49).webp", "thong (5).webp", "thong (50).webp", "thong (51).webp", "thong (52).webp", "thong (53).webp", "thong (6).webp", "thong (7).webp", "thong (8).webp", "thong (9).webp", "thong.png", "thong.webp"
];

function isVideoExt(fn){ return /\.(mp4|webm|mov)$/i.test(fn); }

// FIX: rawFilesArray is an array of strings, so we map over it correctly!
let photos = rawFilesArray.map((filename, i) => {
    const lower = filename.toLowerCase();
    let kind = 'scrap';

    if (lower.includes('hunkemoller')) kind = 'hunkemoller';
    else if (lower.includes('2set') || lower.includes('2-piece')) kind = 'twoset';
    else if (lower.includes('activewear')) kind = 'activewear';
    else if (lower.includes('bodysuit')) kind = 'bodysuit';
    else if (lower.includes('lingerie') || lower.includes('luxury')) kind = 'lingerie';
    else if (lower.includes('panty') || lower.includes('thong')) kind = 'panty';
    else if (lower.includes('ig') || lower.includes('pin')) kind = 'social';
    else if (lower.includes('essential')) kind = 'essential';

    // ⚠️ GITHUB CASE-SENSITIVITY FIX ⚠️
    // এটি গিটহাবের জন্য ক্যাপিটাল লেটারগুলোকে স্বয়ংক্রিয়ভাবে ছোট হাতের করে দেবে
    let safeFileName = filename.replace('Hunkemoller', 'hunkemoller').replace('Lingerie', 'lingerie');

    return {
        id: i,
        title: filename.replace(/\.[^/.]+$/, ""), // এক্সটেনশন রিমুভ করবে
        kind: kind,
        file: filename,
        src: BASE + encodeURIComponent(safeFileName), // ফিক্সড URL
        video: /\.(mp4|webm|mov)$/i.test(filename)
    };
});
*/

/* ============================================================
   STATE & FAVORITES / BOARDS
============================================================ */
let favorites = new Set();
try { favorites = new Set(JSON.parse(localStorage.getItem('rawx_favs') || '[]')); } catch(e){}
function saveFavs(){ try { localStorage.setItem('rawx_favs', JSON.stringify([...favorites])); } catch(e){} }

let boards = [];
let boardItems = {}; 
try {
  boards = JSON.parse(localStorage.getItem('rawx_boards') || '[]');
  const rawMap = JSON.parse(localStorage.getItem('rawx_board_map') || '{}');
  Object.keys(rawMap).forEach(k => boardItems[k] = new Set(rawMap[k]));
} catch(e){}
function saveBoards(){
  try {
    localStorage.setItem('rawx_boards', JSON.stringify(boards));
    const plain = {};
    Object.keys(boardItems).forEach(k => plain[k] = [...boardItems[k]]);
    localStorage.setItem('rawx_board_map', JSON.stringify(plain));
  } catch(e){}
}
function boardCount(id){ return boardItems[id] ? boardItems[id].size : 0; }
function createBoard(name){
  name = name.trim();
  if (!name) return null;
  const id = 'b_' + Date.now() + '_' + Math.floor(Math.random()*999);
  boards.push({ id, name });
  boardItems[id] = new Set();
  saveBoards();
  return id;
}
function deleteBoard(id){
  const b = boards.find(x => x.id === id);
  if (!b) return;
  if (!confirm(`Delete board "${b.name}"? This only removes the board, not the files.`)) return;
  boards = boards.filter(x => x.id !== id);
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

function mediaTag(p, forLightbox){
  if (p.video){
    return `<video src="${p.src}" ${forLightbox ? 'controls autoplay' : 'muted loop playsinline'} preload="metadata" onloadeddata="this.classList.add('loaded');this.parentElement.classList.add('loaded')"></video>`;
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
    grid.innerHTML = `<div class="empty-state">${icon('search')}<span>NO PROTOCOLS MATCH</span></div>`;
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
  document.getElementById('stat-boards').textContent = boards.length;
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
  boardBtn.classList.toggle('active', isPinnedAnywhere(p.id));
}

function toggleFavInLb(){ toggleFav(activeSet[lbIndex].id); }

function copyLbPath(){
  const text = BASE + activeSet[lbIndex].file;
  if (navigator.clipboard) navigator.clipboard.writeText(text).then(() => showToast('PATH COPIED'));
  else showToast('COPY UNSUPPORTED');
}

function getTechPrompt(kind) {
    if(kind === 'hunkemoller') return "Hunkemoller commercial photography, studio lighting, hyper-detailed fabric, 85mm lens";
    if(kind === 'activewear') return "High contrast athletic styling, utilitarian aesthetic, dynamic lighting, technical fabric";
    if(kind === 'twoset') return "Fashion catalog layout, coordinated 2-piece set, brutalist backdrop, sharp focus";
    if(kind === 'social') return "Social media editorial framing, 35mm lens, raw film aesthetic, high engagement format";
    return "8K resolution, Hasselblad quality, industrial realism, cinematic lighting protocol";
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
  document.getElementById('lb-prompt-text').textContent = getTechPrompt(p.kind);
  
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
  if (document.getElementById('board-modal-overlay').classList.contains('open')){
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
document.getElementById('lb-stage').addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; });
document.getElementById('lb-stage').addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(dx) > 50) navLb(dx > 0 ? -1 : 1);
});

/* ============================================================
   MAGNETIC MICRO-INTERACTION
============================================================ */
const MAGNETIC_SELECTOR = '.btn, .tag-chip, .board-chip, .lb-btn, .b2b-btn';
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
   FIXED INIT FUNCTION FOR ALL ICONS
============================================================ */
function initLbIcons(){
    const iconsById = {
        'lb-fullscreen': 'fullscreen', 
        'lb-download': 'download', 
        'lb-copy': 'copy', 
        'lb-board': 'boards', 
        'lb-play': 'play',
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

/* INITS */
window.addEventListener('DOMContentLoaded', () => {
    initLbIcons();
    updateSpeedBtn();
    render();
});
