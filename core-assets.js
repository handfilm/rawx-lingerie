/* ============================================================
   RAWx CORE ASSET SPINE (CLEAN V6 + SECTIONS FIXED)
============================================================ */

// এই অংশটি Grok এর কোডে ছিল না, যা আপনার পেজগুলোকে ক্র্যাশ করাচ্ছিল
window.SECTIONS = [
  { key: 'hunkemoller', label: 'Hunkemoller' },
  { key: 'activewear',  label: 'Activewear' },
  { key: 'bodysuit',    label: 'Bodysuit' },
  { key: 'lingerie',    label: 'Lingerie / Luxury' },
  { key: 'twoset',      label: '2-Piece Set' },
  { key: 'panty',       label: 'Panty / Thong' },
  { key: 'essential',   label: 'Essential' },
  { key: 'social',      label: 'Social / IG' },
  { key: 'scrap',       label: 'Archive / Scrap' }
];

const BASE_IMG = 'assets/images/';
const BASE_VID = 'assets/videos/';

const RAW = [
  "ash (1).mp4", "ash (2).mp4", "ash (3).mp4", "ash (4).mp4", "ash (5).mp4", "ash (6).mp4", "ash (7).mp4", "ash (8).mp4", "ash (9).mp4", "ash (10).mp4", "ash (11).mp4", "ash (12).mp4",
  "ileana (1).mp4", "ileana (2).mp4", "ileana (3).mp4", "ileana (4).mp4",
  "nayanthara (1).mp4", "nayanthara (2).mp4", "nayanthara (3).mp4", "nayanthara (4).mp4",
  "2set (1).jpg", "2set (1).webp", "2set (2).jpg", "2set (2).webp", "2set (3).jpg", "2set (3).webp", "2set (4).jpg", "2set (4).webp", "2set (5).jpg", "2set (5).webp", "2set (6).jpg", "2set (6).webp",
  "2set (7).webp", "2set (8).webp", "2set (9).webp", "2set (10).webp", "2set (11).webp", "2set (12).webp", "2set (13).webp", "2set (14).webp", "2set (15).webp", "2set (16).webp", "2set (17).webp", "2set (18).webp",
  "2set (19).webp", "2set (20).webp", "2set (21).webp", "2set (22).webp", "2set (23).webp", "2set (24).webp", "2set (25).webp", "2set (26).webp", "2set (27).webp", "2set (28).webp", "2set (29).webp", "2set (30).webp",
  "2set (31).webp", "2set (32).webp", "2set (33).webp", "2set.jpg", "2set.webp",
  "activewear (1).webp", "activewear (2).webp", "activewear (3).webp", "activewear (4).webp", "activewear (5).webp", "activewear (6).webp", "activewear (7).webp", "activewear (8).webp", "activewear (9).webp",
  "activewear (10).webp", "activewear (11).webp", "activewear (12).webp", "activewear (13).webp", "activewear (14).webp", "activewear (15).webp", "activewear (16).webp", "activewear (17).webp", "activewear (18).webp", "activewear (19).webp",
  "activewear (20).webp", "activewear (21).webp", "activewear (22).webp", "activewear (23).webp", "activewear (24).webp", "activewear (25).webp", "activewear (26).webp", "activewear (27).webp", "activewear (28).webp", "activewear (29).webp",
  "activewear (30).webp", "activewear (31).webp", "activewear (32).webp", "activewear (33).webp", "activewear (34).webp", "activewear (35).webp", "activewear (36).webp", "activewear (37).webp", "activewear (38).webp", "activewear (39).webp",
  "activewear (40).webp", "activewear (41).webp", "activewear (42).webp", "activewear (43).webp", "activewear (44).webp", "activewear (45).webp", "activewear (46).webp", "activewear (47).webp", "activewear (48).webp", "activewear (49).webp",
  "activewear (50).webp", "activewear (51).webp", "activewear (52).webp", "activewear (53).webp", "activewear (54).webp", "activewear (55).webp", "activewear (56).webp", "activewear (57).webp", "activewear (58).webp", "activewear (59).webp",
  "bodysuit (1).webp", "bodysuit (2).webp", "bodysuit (3).webp", "bodysuit (4).webp", "bodysuit (5).webp", "bodysuit (6).webp", "bodysuit (7).webp", "bodysuit (8).webp", "bodysuit (9).webp", "bodysuit (11).jpeg", "bodysuit (12).jpeg",
  "bodysuit (13).jpeg", "bodysuit (14).jpeg", "bodysuit (14).png", "bodysuit (15).jpeg", "bodysuit (15).png", "bodysuit (16).jpeg", "bodysuit (16).webp", "bodysuit (17).jpeg", "bodysuit (17).webp", "bodysuit (18).jpeg", "bodysuit (18).webp",
  "bodysuit (19).webp", "bodysuit (20).webp", "bodysuit (61).jpg", "bodysuit.jpg", "bodysuit.webp",
  "essential (1).webp", "essential (2).webp", "essential (3).webp", "essential (4).webp", "essential (5).webp", "essential (6).webp", "essential (7).webp", "essential (8).webp", "essential (9).webp",
  "hunkemoller (1).jpg", "hunkemoller (1).webp", "hunkemoller (2).jpg", "hunkemoller (2).webp", "hunkemoller (3).jpg", "hunkemoller (3).webp", "hunkemoller (4).jpg", "hunkemoller (4).webp",
  "hunkemoller (5).jpg", "hunkemoller (5).webp", "hunkemoller (6).jpg", "hunkemoller (6).webp", "hunkemoller (7).jpg", "hunkemoller (7).webp", "hunkemoller (8).jpg", "hunkemoller (8).webp",
  "hunkemoller (9).jpg", "hunkemoller (9).webp", "hunkemoller (10).jpg", "hunkemoller (10).webp", "hunkemoller (11).jpg", "hunkemoller (11).webp", "hunkemoller (12).jpg", "hunkemoller (12).webp",
  "hunkemoller (13).jpg", "hunkemoller (13).webp", "hunkemoller (14).jpg", "hunkemoller (14).webp", "hunkemoller (15).jpg", "hunkemoller (15).webp", "hunkemoller (16).jpg", "hunkemoller (16).webp",
  "hunkemoller (17).jpg", "hunkemoller (17).webp", "hunkemoller (18).jpg", "hunkemoller (18).webp", "hunkemoller (19).jpg", "hunkemoller (19).webp", "hunkemoller (20).jpg", "hunkemoller (20).webp",
  "hunkemoller (21).jpg", "hunkemoller (21).webp", "hunkemoller (22).jpg", "hunkemoller (22).webp", "hunkemoller (23).jpg", "hunkemoller (23).webp", "hunkemoller (24).jpg", "hunkemoller (24).webp",
  "hunkemoller (25).jpg", "hunkemoller (25).webp", "hunkemoller (26).jpg", "hunkemoller (26).webp", "hunkemoller (27).jpg", "hunkemoller (27).webp", "hunkemoller (28).jpg", "hunkemoller (28).webp",
  "hunkemoller (29).jpg", "hunkemoller (29).webp", "hunkemoller (30).jpg", "hunkemoller (30).webp", "hunkemoller (31).jpg", "hunkemoller (31).webp", "hunkemoller (32).jpg", "hunkemoller (32).webp",
  "hunkemoller (33).jpg", "hunkemoller (33).webp", "hunkemoller (34).jpg", "hunkemoller (34).webp", "hunkemoller (35).jpg", "hunkemoller (35).webp", "hunkemoller (36).jpg", "hunkemoller (36).webp",
  "hunkemoller (37).jpg", "hunkemoller (37).webp", "hunkemoller (38).jpg", "hunkemoller (38).webp", "hunkemoller (39).jpg", "hunkemoller (39).webp", "hunkemoller (40).jpg", "hunkemoller (40).webp",
  "hunkemoller (41).jpg", "hunkemoller (41).webp", "hunkemoller (42).jpg", "hunkemoller (42).webp", "hunkemoller (43).jpg", "hunkemoller (43).webp", "hunkemoller (44).jpg", "hunkemoller (44).webp",
  "hunkemoller (45).jpg", "hunkemoller (45).webp", "hunkemoller (46).jpg", "hunkemoller (46).webp", "hunkemoller (47).jpg", "hunkemoller (47).webp", "hunkemoller (48).jpg", "hunkemoller (48).webp",
  "hunkemoller (49).jpg", "hunkemoller (49).webp", "hunkemoller (50).jpg", "hunkemoller (50).webp", "hunkemoller (51).jpg", "hunkemoller (51).webp", "hunkemoller (52).jpg", "hunkemoller (52).webp",
  "hunkemoller (53).jpg", "hunkemoller (53).webp", "hunkemoller (54).jpg", "hunkemoller (54).webp", "hunkemoller (55).jpg", "hunkemoller (55).webp", "hunkemoller (56).jpg", "hunkemoller (56).webp",
  "hunkemoller (57).jpg", "hunkemoller (57).webp", "hunkemoller (58).jpg", "hunkemoller (58).webp", "hunkemoller (59).jpg", "hunkemoller (59).webp", "hunkemoller (60).jpg", "hunkemoller (60).webp",
  "hunkemoller (61).jpg", "hunkemoller (61).webp", "hunkemoller (62).jpg", "hunkemoller (62).webp", "hunkemoller (63).jpg", "hunkemoller (63).webp", "hunkemoller (64).jpg", "hunkemoller (64).webp",
  "hunkemoller (65).jpg", "hunkemoller (65).webp", "hunkemoller (66).jpg", "hunkemoller (66).webp", "hunkemoller (67).jpg", "hunkemoller (67).webp", "hunkemoller (68).jpg", "hunkemoller (68).webp",
  "hunkemoller (69).jpg", "hunkemoller (69).webp", "hunkemoller (70).jpg", "hunkemoller (70).webp", "hunkemoller (71).jpg", "hunkemoller (71).webp", "hunkemoller (72).jpg", "hunkemoller (72).webp",
  "hunkemoller (73).jpg", "hunkemoller (73).webp", "hunkemoller (74).jpg", "hunkemoller (74).webp", "hunkemoller (75).jpg", "hunkemoller (75).webp", "hunkemoller (76).jpg", "hunkemoller (76).webp",
  "hunkemoller (77).jpg", "hunkemoller (77).webp", "hunkemoller (78).jpg", "hunkemoller (78).webp", "hunkemoller (79).jpg", "hunkemoller (79).webp", "hunkemoller (80).jpg", "hunkemoller (80).webp",
  "hunkemoller (81).jpg", "hunkemoller (81).webp", "hunkemoller (82).jpg", "hunkemoller (82).webp", "hunkemoller (83).jpg", "hunkemoller (83).webp", "hunkemoller (84).jpg", "hunkemoller (84).webp",
  "hunkemoller (85).jpg", "hunkemoller (85).webp", "hunkemoller (86).jpg", "hunkemoller (86).webp", "hunkemoller (87).jpg", "hunkemoller (87).webp", "hunkemoller (88).jpg", "hunkemoller (88).webp",
  "hunkemoller (89).jpg", "hunkemoller (89).webp", "hunkemoller (90).jpg", "hunkemoller (90).webp", "hunkemoller (91).jpg", "hunkemoller (91).webp", "hunkemoller (92).jpg", "hunkemoller (92).webp",
  "hunkemoller (93).jpg", "hunkemoller (93).webp", "hunkemoller (94).jpg", "hunkemoller (94).webp", "hunkemoller (95).jpg", "hunkemoller (95).webp", "hunkemoller (96).jpg", "hunkemoller (96).webp",
  "hunkemoller (97).jpg", "hunkemoller (97).webp", "hunkemoller (98).jpg", "hunkemoller (98).webp", "hunkemoller (99).jpg", "hunkemoller (99).webp", "hunkemoller (100).jpg", "hunkemoller (100).webp",
  "hunkemoller (101).jpg", "hunkemoller (101).webp", "hunkemoller (102).jpg", "hunkemoller (102).webp", "hunkemoller (103).jpg", "hunkemoller (103).webp", "hunkemoller (104).jpg", "hunkemoller (104).webp",
  "hunkemoller (105).jpg", "hunkemoller (105).webp", "hunkemoller (106).jpg", "hunkemoller (106).webp", "hunkemoller (107).jpg", "hunkemoller (107).webp", "hunkemoller (108).jpg", "hunkemoller (108).webp",
  "hunkemoller (109).jpg", "hunkemoller (109).webp", "hunkemoller (110).jpg", "hunkemoller (110).webp", "hunkemoller (111).jpg", "hunkemoller (111).webp", "hunkemoller (112).jpg", "hunkemoller (112).webp",
  "hunkemoller (113).jpg", "hunkemoller (113).webp", "hunkemoller (114).jpg", "hunkemoller (114).webp", "hunkemoller (115).jpg", "hunkemoller (115).webp", "hunkemoller (116).jpg", "hunkemoller (116).webp",
  "hunkemoller (117).jpg", "hunkemoller (117).webp", "hunkemoller (118).jpg", "hunkemoller (118).webp", "hunkemoller (119).jpg", "hunkemoller (119).webp", "hunkemoller (120).jpg", "hunkemoller (120).webp",
  "hunkemoller (121).jpg", "hunkemoller (121).webp", "hunkemoller (122).jpg", "hunkemoller (122).webp", "hunkemoller (123).jpg", "hunkemoller (123).webp", "hunkemoller (124).jpg", "hunkemoller (124).webp",
  "hunkemoller (125).jpg", "hunkemoller (125).webp", "hunkemoller (126).jpg", "hunkemoller (126).webp", "hunkemoller (127).jpg", "hunkemoller (127).webp", "hunkemoller (128).jpg", "hunkemoller (128).webp",
  "hunkemoller (129).jpg", "hunkemoller (129).webp", "hunkemoller (130).jpg", "hunkemoller (130).webp", "hunkemoller (131).jpg", "hunkemoller (131).webp", "hunkemoller (132).jpg", "hunkemoller (132).webp",
  "hunkemoller (133).jpg", "hunkemoller (133).webp", "hunkemoller (134).jpg", "hunkemoller (134).webp", "hunkemoller (135).jpg", "hunkemoller (135).webp", "hunkemoller (136).jpg", "hunkemoller (136).webp",
  "hunkemoller (137).jpg", "hunkemoller (137).webp", "hunkemoller (138).jpg", "hunkemoller (138).webp", "hunkemoller (139).jpg", "hunkemoller (139).webp", "hunkemoller (140).jpg", "hunkemoller (140).webp",
  "hunkemoller (141).jpg", "hunkemoller (141).webp", "hunkemoller (142).jpg", "hunkemoller (142).webp", "hunkemoller (143).jpg", "hunkemoller (143).webp", "hunkemoller (144).jpg", "hunkemoller (144).webp",
  "hunkemoller (145).jpg", "hunkemoller (145).webp", "hunkemoller (146).jpg", "hunkemoller (146).webp", "hunkemoller (147).jpg", "hunkemoller (147).webp", "hunkemoller (148).jpg", "hunkemoller (148).webp",
  "hunkemoller (149).jpg", "hunkemoller (149).webp", "hunkemoller (150).jpg", "hunkemoller (150).webp", "hunkemoller (151).jpg", "hunkemoller (151).webp", "hunkemoller (152).jpg", "hunkemoller (152).webp",
  "hunkemoller (153).jpg", "hunkemoller (153).webp", "hunkemoller (154).jpg", "hunkemoller (154).webp", "hunkemoller (155).jpg", "hunkemoller (155).webp", "hunkemoller (156).jpg", "hunkemoller (156).webp",
  "hunkemoller (157).jpg", "hunkemoller (157).webp", "hunkemoller (158).jpg", "hunkemoller (158).webp", "hunkemoller (159).webp", "hunkemoller (160).webp", "hunkemoller (161).webp", "hunkemoller (162).webp",
  "hunkemoller (163).webp", "hunkemoller (164).webp", "hunkemoller (165).webp", "hunkemoller (166).webp", "hunkemoller (167).webp", "hunkemoller (168).webp", "hunkemoller (169).webp", "hunkemoller (170).webp",
  "hunkemoller (171).webp", "hunkemoller (172).webp", "hunkemoller (173).webp", "hunkemoller (174).webp", "hunkemoller (175).webp", "hunkemoller (176).webp", "hunkemoller (177).webp", "hunkemoller (178).webp",
  "hunkemoller (179).webp", "hunkemoller (180).webp", "hunkemoller (181).webp", "hunkemoller (182).webp", "hunkemoller (183).webp", "hunkemoller (184).webp", "hunkemoller (185).webp", "hunkemoller (186).webp",
  "hunkemoller (187).webp", "hunkemoller.jpg",
  "Lingerie (1).webp", "Lingerie (2).webp", "Lingerie (3).webp", "Lingerie (4).webp", "Lingerie (5).webp", "Lingerie (6).webp", "Lingerie (7).webp", "Lingerie (8).webp", "Lingerie (9).webp",
  "Lingerie (10).webp", "Lingerie (11).webp", "Lingerie (12).webp", "Lingerie (13).webp", "Lingerie (14).webp", "Lingerie (15).webp", "Lingerie (16).webp", "Lingerie (17).webp", "Lingerie (18).webp",
  "Lingerie (19).webp", "Lingerie (20).webp", "Lingerie (21).webp", "Lingerie (22).webp", "Lingerie (23).webp", "Lingerie (24).webp", "Lingerie (25).webp", "Lingerie (26).webp", "Lingerie (27).webp",
  "Lingerie (28).webp", "Lingerie (29).webp", "Lingerie (30).webp", "Lingerie (31).webp", "Lingerie (32).webp", "Lingerie (33).webp", "Lingerie (34).webp",
  "panty (1).webp", "panty (2).webp", "panty (3).webp", "panty (4).webp", "panty (5).webp", "panty (6).webp", "panty (7).webp", "panty (8).webp", "panty (9).webp",
  "panty (10).webp", "panty (11).webp", "panty (12).webp", "panty (13).webp", "panty (14).webp", "panty (15).webp", "panty (16).webp", "panty (17).webp", "panty (18).webp", "panty (19).webp",
  "panty (20).webp", "panty (21).webp", "panty (22).webp", "panty (23).webp", "panty (24).webp", "panty (25).webp", "panty (26).webp", "panty (27).webp", "panty (28).webp", "panty (29).webp",
  "panty (30).webp", "panty (31).webp", "panty (32).webp", "panty (33).webp", "panty (34).webp", "panty (35).webp",
  "thong (1).jpg", "thong (1).png", "thong (1).webp", "thong (2).png", "thong (2).webp", "thong (3).webp", "thong (4).webp", "thong (5).webp", "thong (6).webp", "thong (7).webp", "thong (8).webp", "thong (9).webp",
  "thong (10).webp", "thong (11).webp", "thong (12).webp", "thong (13).webp", "thong (14).webp", "thong (15).webp", "thong (16).webp", "thong (17).webp", "thong (18).webp", "thong (19).webp",
  "thong (20).webp", "thong (21).webp", "thong (22).webp", "thong (23).webp", "thong (24).webp", "thong (25).webp", "thong (26).webp", "thong (27).webp", "thong (28).webp", "thong (29).webp",
  "thong (30).webp", "thong (31).webp", "thong (32).webp", "thong (33).webp", "thong (34).webp", "thong (35).webp", "thong (36).webp", "thong (37).webp", "thong (38).webp", "thong (39).webp",
  "thong (40).webp", "thong (41).webp", "thong (42).webp", "thong (43).webp", "thong (44).webp", "thong (45).webp", "thong (46).webp", "thong (47).webp", "thong (48).webp", "thong (49).webp",
  "thong (50).webp", "thong (51).webp", "thong (52).webp", "thong (53).webp", "thong.png", "thong.webp",
  "ig (1).png", "ig (1).webp", "ig (2).jpg", "ig (2).webp", "ig (3).webp", "ig (4).webp", "ig (5).webp", "ig (6).webp", "ig (7).webp", "ig (8).webp", "ig (9).webp", "ig (10).webp", "ig (11).webp", "ig (12).webp", "ig (13).webp",
  "pin (1).jpg", "pin (2).jpg", "pin (3).jpg", "pin (4).jpg", "pin (5).jpg", "pin (6).jpg", "pin (7).jpg", "pin (8).jpg", "pin (9).jpg", "pin (10).jpg", "pin (11).jpg", "pin (12).jpg", "pin (13).jpg", "pin (14).jpg",
  "pin (15).jpg", "pin (16).jpg", "pin (17).jpg", "pin (18).jpg", "pin (19).jpg", "pin (20).jpg", "pin (21).jpg", "pin (22).jpg", "pin (23).jpg", "pin (24).jpg", "pin (25).jpg", "pin (26).jpg", "pin (27).jpg",
  "pin (28).jpg", "pin (29).jpg", "pin (30).jpg", "pin (31).jpg", "pin (32).jpg", "pin (33).jpg", "pin (34).jpg", "pin (36).jpg", "pin (37).jpg", "pin (38).jpg", "pin (39).jpg", "pin (40).jpg", "pin (41).jpg",
  "pin (42).jpg", "pin (43).jpg", "pin (45).jpg", "pin (46).jpg", "pin (47).jpg", "pin (48).jpg", "pin (49).jpg", "pin (50).jpg", "pin (51).jpg", "pin (52).jpg", "pin (54).jpg", "pin (55).jpg", "pin (56).jpg",
  "pin (57).jpg", "pin (58).jpg", "pin (59).jpg", "pin (60).jpg", "pin (61).jpg", "pin (62).jpg", "pin (63).jpg", "pin (64).jpg", "pin (65).jpg", "pin (66).jpg", "pin (67).jpg", "pin (68).jpg", "pin (69).jpg",
  "scrap (1).jpeg", "scrap (1).jpg", "scrap (1).png", "scrap (1).webp", "scrap (2).jpg", "scrap (2).png", "scrap (3).jpg", "scrap (3).png", "scrap (4).jpg", "scrap (4).png", "scrap (5).jpg", "scrap (5).png",
  "scrap (6).jpg", "scrap (6).png", "scrap (7).jpg", "scrap (7).png", "scrap (8).jpg", "scrap (8).png", "scrap (9).jpg", "scrap (9).png", "scrap (10).jpg", "scrap (10).png", "scrap (11).jpg", "scrap (12).jpg",
  "scrap (13).jpg", "scrap (14).jpg", "scrap (15).jpg", "scrap (16).jpg", "scrap (17).jpg", "scrap (18).jpg", "scrap (19).jpg", "scrap (20).jpg", "scrap (21).jpg", "scrap (22).jpg", "scrap (23).jpg", "scrap (24).jpg",
  "scrap (25).jpg", "scrap (26).jpg", "scrap (27).jpg", "scrap (28).jpg", "scrap (29).jpg", "scrap (30).jpg", "scrap (31).jpg", "scrap (32).jpg", "scrap (33).jpg", "scrap (34).jpg", "scrap (35).jpg", "scrap (36).jpg",
  "scrap (37).jpg", "scrap (38).jpg", "scrap (39).jpg", "scrap (40).jpg", "scrap (41).jpg", "scrap (42).jpg", "scrap (43).jpg", "scrap (44).jpg", "scrap (45).jpg", "scrap (46).jpg", "scrap (47).jpg", "scrap (48).jpg",
  "scrap (49).jpg", "scrap (50).jpg", "scrap (51).jpg", "scrap (52).jpg", "scrap (53).jpg", "scrap (54).jpg", "scrap (55).jpg", "scrap (56).jpg", "scrap (57).jpg", "scrap (58).jpg", "scrap (59).jpg", "scrap (60).jpg",
  "scrap (61).jpg", "scrap (62).jpg", "scrap (63).jpg", "scrap (64).jpg", "scrap (65).jpg", "scrap (66).jpg", "scrap (67).jpg", "scrap (68).jpg", "scrap (69).jpg", "scrap (70).jpg", "scrap (71).jpg", "scrap (72).jpg",
  "scrap (73).jpg", "scrap (74).jpg", "scrap (75).jpg", "scrap (76).jpg", "scrap (77).jpg", "scrap (78).jpg", "scrap (79).jpg", "scrap (80).jpg", "scrap (81).jpg", "scrap (82).jpg", "scrap (83).jpg", "scrap (84).jpg",
  "scrap (85).jpg", "scrap (86).jpg", "scrap (87).jpg", "scrap (88).jpg", "scrap (89).jpg", "scrap (90).jpg", "scrap (91).jpg", "scrap (92).jpg", "scrap (93).jpg", "scrap (94).jpg", "scrap (95).jpg", "scrap (96).jpg",
  "scrap (97).jpg", "scrap (98).jpg", "scrap (99).jpg",
  "shadow-p (1).jpg", "shadow-p (2).jpg", "shadow-p (3).jpg", "shadow-p (4).jpg", "shadow-p (5).jpg",
  "assd.jpg", "filelist.txt", "568729895_17976130670937481_5742723096325179072_n..jpg"
];

function isVideoExt(fn) {
  return /\.(mp4|webm|mov)$/i.test(fn);
}

window.PHOTOS = RAW.map((filename, i) => {
  const isVideo = isVideoExt(filename);
  return {
    id: i,
    title: filename.replace(/\.[^/.]+$/, ""),
    kind: filename.includes('2set') ? 'twoset' :
          filename.includes('activewear') ? 'activewear' :
          filename.includes('bodysuit') ? 'bodysuit' :
          filename.includes('hunkemoller') ? 'hunkemoller' :
          filename.includes('Lingerie') ? 'lingerie' :
          filename.includes('panty') || filename.includes('thong') ? 'panty' :
          filename.includes('ig') || filename.includes('pin') ? 'social' : 'scrap',
    file: filename,
    video: isVideo,
    src: (isVideo ? BASE_VID : BASE_IMG) + filename
  };
});

console.log("RAWx Engine: Assets Loaded (" + window.PHOTOS.length + " frames)");