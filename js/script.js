/* =====================================================================
   Épisode 9 — Support pédagogique · Portfolio TSSR
   script.js (JavaScript « vanilla », sans bibliothèque)
   ---------------------------------------------------------------------
   1. Le code de l'épisode (source unique pour l'affichage, la copie et
      le téléchargement)
   2. Mémorisation locale (préférences, coches, progression)
   3. Coloration syntaxique
   4. Réglages d'affichage : thème, contraste, taille du texte
   5. Code complet : affichage, onglets, copie, téléchargement
   6. Fiches, étapes, corrections
   7. Checklists et validation
   8. QCM
   9. Progression, sommaire, retour en haut
   ===================================================================== */

(function () {
  'use strict';

  /* ---------- 1. LE CODE DE L'ÉPISODE (sans commentaires pédagogiques) ---------- */

  const EPISODE_FILES = {
    index: {
      fileName: 'index.html',
      mimeType: 'text/html;charset=utf-8',
      language: 'html',
      /* Lignes ajoutées (+) par l'épisode 9 (aucune ligne modifiée ni supprimée) */
      newLines: [645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690, 691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720, 721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 1336, 1337, 1338, 1339, 1340, 1341, 1342, 1343, 1344, 1345, 1346, 1347, 1348, 1349, 1350, 1351, 1352, 1353, 1354, 1355, 1356, 1357, 1358, 1359, 1360, 1361, 1362, 1363, 1364, 1365, 1366, 1367, 1368, 1369, 1370, 1371, 1372, 1373, 1374, 1375, 1376, 1377, 1378, 1379, 1380, 1381, 1382, 1383, 1384, 1385, 1386, 1387, 1388, 1389, 1390, 1391, 1392, 1393, 1394, 1395, 1396, 1397, 1398, 1399, 1400, 1401, 1402, 1403, 1404, 1405, 1406, 1407, 1408, 1409, 1410, 1411, 1412, 1413, 1414, 1415, 1416, 1417, 1418, 1419, 1420, 1421, 1422, 1423, 1424, 1425, 1426, 1427, 1428, 1429, 1430, 1431, 1432, 1433, 1434, 1435, 1436, 1437, 1438, 1439, 1440, 1441, 1442, 1443, 1444, 1445, 1446, 1447, 1448, 1449, 1450, 1451, 1452, 1453, 1454, 1455, 1456, 1457, 1458, 1459, 1460, 1461, 1462, 1463, 1464, 1465, 1466, 1467, 1468, 1469, 1470, 1471, 1472, 1473, 1474, 1475, 1476, 1477, 1478, 1479, 1480, 1481, 1482, 1483, 1484, 1485, 1486, 1487, 1488, 1489, 1490, 1491, 1492, 1493, 1494, 1495, 1496, 1497, 1498, 1499, 1500, 1501, 1502, 1503, 1504, 1505, 1506, 1507, 1508, 1509, 1510, 1511, 1512, 1513, 1514, 1515, 1516, 1517, 1518, 1519, 1520, 1521, 1522, 1523, 1524, 1525, 1526, 1527, 1528, 1529, 1530, 1531, 1532, 1533, 1534, 1535, 1536, 1537, 1538, 1539, 1540, 1541, 1542, 1543, 1544, 1545, 1546, 1547, 1548, 1549, 1550, 1551, 1552, 1553, 1554, 1555, 1556, 1557],
      modifiedLines: [],
      lines: [
        "<!DOCTYPE html>",
        "<html lang=\"fr\" data-theme=\"dark\" dir=\"ltr\">",
        "<head>",
        "  <meta charset=\"UTF-8\" />",
        "  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />",
        "  <meta name=\"description\" content=\"Portfolio professionnel de Lucas Moreau – Technicien Supérieur Systèmes et Réseaux (TSSR) en recherche d'un premier poste, formé chez MODE 83 à Draguignan (Var). Disponible immédiatement en région PACA.\" />",
        "  <meta name=\"keywords\" content=\"TSSR, technicien systèmes et réseaux, emploi, recrutement, premier poste, réseaux, systèmes, Windows Server, Linux, Active Directory, cybersécurité, virtualisation, MODE 83, Draguignan, Var, PACA\" />",
        "  <meta name=\"robots\" content=\"index, follow\" />",
        "  <meta name=\"theme-color\" content=\"#060d1a\" />",
        "  <meta name=\"author\" content=\"Lucas Moreau\" />",
        "",
        "  <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" />",
        "  <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin />",
        "  <link href=\"https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@300;400;500;600&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap\" rel=\"stylesheet\" />",
        "",
        "  <link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css\" />",
        "  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css\" />",
        "  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css\" />",
        "",
        "  <script src=\"config.js\"></script>",
        "  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js\"></script>",
        "",
        "  <link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"images/favicon-32x32.png\">",
        "  <link rel=\"icon\" type=\"image/png\" sizes=\"192x192\" href=\"images/favicon-192x192.png\">",
        "  <link rel=\"icon\" type=\"image/webp\" href=\"images/favicon-400x400.webp\">",
        "  <link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"images/apple-touch-icon.png\">",
        "",
        "  <title>Portfolio TSSR | Recherche d'emploi – Technicien Systèmes &amp; Réseaux · MODE 83 Draguignan</title>",
        "  <style>",
        "    :root {",
        "      --clr-bg:          #060d1a;",
        "      --clr-bg2:         #0b1628;",
        "      --clr-surface:     rgba(255,255,255,.04);",
        "      --clr-surface2:    rgba(255,255,255,.07);",
        "      --clr-border:      rgba(96,165,250,.18);",
        "      --clr-accent:      #3b82f6;",
        "      --clr-accent2:     #60a5fa;",
        "      --clr-accent3:     #93c5fd;",
        "      --clr-teal:        #0ea5e9;",
        "      --clr-cyan:        #22d3ee;",
        "      --clr-text:        #e2e8f0;",
        "      --clr-text-soft:   #94a3b8;",
        "      --clr-text-faint:  #475569;",
        "      --clr-heading:     #f0f6ff;",
        "      --clr-white:       #ffffff;",
        "      --clr-danger:      #f87171;",
        "      --clr-success:     #34d399;",
        "      --clr-warn:        #fbbf24;",
        "      --radius-sm:       6px;",
        "      --radius-md:       12px;",
        "      --radius-lg:       20px;",
        "      --radius-xl:       32px;",
        "      --shadow-glow:     0 0 40px rgba(59,130,246,.25);",
        "      --shadow-card:     0 8px 32px rgba(0,0,0,.45);",
        "      --trans:           .3s cubic-bezier(.4,0,.2,1);",
        "      --font-display:    'Syne', sans-serif;",
        "      --font-mono:       'IBM Plex Mono', monospace;",
        "      --font-body:       'DM Sans', sans-serif;",
        "      --fz-min:          1.05rem;",
        "    }",
        "",
        "    [data-theme=\"light\"] {",
        "      --clr-bg:          #f0f4fa;",
        "      --clr-bg2:         #e2e8f0;",
        "      --clr-surface:     rgba(255,255,255,.7);",
        "      --clr-surface2:    rgba(255,255,255,.9);",
        "      --clr-border:      rgba(59,130,246,.2);",
        "      --clr-accent:      #2563eb;",
        "      --clr-accent2:     #3b82f6;",
        "      --clr-accent3:     #60a5fa;",
        "      --clr-teal:        #0284c7;",
        "      --clr-cyan:        #0891b2;",
        "      --clr-text:        #1e293b;",
        "      --clr-text-soft:   #475569;",
        "      --clr-text-faint:  #94a3b8;",
        "      --clr-heading:     #0f172a;",
        "      --clr-white:       #ffffff;",
        "      --shadow-glow:     0 0 40px rgba(37,99,235,.15);",
        "      --shadow-card:     0 8px 32px rgba(0,0,0,.12);",
        "    }",
        "",
        "    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }",
        "",
        "    html { scroll-behavior: smooth; font-size: 16px; }",
        "",
        "    body {",
        "      font-family: var(--font-body);",
        "      background-color: var(--clr-bg);",
        "      color: var(--clr-text);",
        "      font-size: var(--fz-min);",
        "      line-height: 1.7;",
        "      overflow-x: hidden;",
        "      transition: background-color var(--trans), color var(--trans);",
        "    }",
        "",
        "    ::-webkit-scrollbar               { width: 7px; }",
        "    ::-webkit-scrollbar-track         { background: var(--clr-bg2); }",
        "    ::-webkit-scrollbar-thumb         {",
        "      background: linear-gradient(180deg, var(--clr-accent), var(--clr-teal));",
        "      border-radius: 10px; height: 120px;",
        "    }",
        "    ::-webkit-scrollbar-thumb:hover   {",
        "      background: linear-gradient(180deg, var(--clr-accent2), var(--clr-cyan));",
        "      box-shadow: 0 0 8px var(--clr-accent);",
        "    }",
        "",
        "    .skip-link {",
        "      position: absolute;",
        "      top: -60px; left: 1rem;",
        "      background: var(--clr-accent);",
        "      color: var(--clr-white);",
        "      padding: .6rem 1.2rem;",
        "      border-radius: var(--radius-md);",
        "      font-weight: 600;",
        "      font-size: var(--fz-min);",
        "      z-index: 9999;",
        "      transition: top .2s;",
        "      text-decoration: none;",
        "    }",
        "    .skip-link:focus { top: 1rem; }",
        "",
        "    #read-progress {",
        "      position: fixed; top: 0; left: 0;",
        "      height: 3px; width: 0%;",
        "      background: linear-gradient(90deg, var(--clr-accent), var(--clr-cyan));",
        "      z-index: 9998;",
        "      transition: width .1s linear;",
        "      box-shadow: 0 0 10px var(--clr-accent);",
        "    }",
        "",
        "    #mainNav {",
        "      position: fixed; top: 0; left: 0; right: 0;",
        "      z-index: 1050;",
        "      padding: .9rem 0;",
        "      background: rgba(6,13,26,.82);",
        "      backdrop-filter: blur(18px) saturate(1.4);",
        "      -webkit-backdrop-filter: blur(18px) saturate(1.4);",
        "      border-bottom: 1px solid var(--clr-border);",
        "      transition: all var(--trans);",
        "    }",
        "    #mainNav.scrolled {",
        "      padding: .55rem 0;",
        "      background: rgba(6,13,26,.95);",
        "      box-shadow: 0 4px 30px rgba(0,0,0,.4);",
        "    }",
        "    [data-theme=\"light\"] #mainNav { background: rgba(240,244,250,.88); }",
        "    [data-theme=\"light\"] #mainNav.scrolled { background: rgba(240,244,250,.97); }",
        "",
        "    .nav-brand {",
        "      font-family: var(--font-display);",
        "      font-weight: 800; font-size: 1.3rem;",
        "      color: var(--clr-heading) !important;",
        "      text-decoration: none; letter-spacing: -.02em;",
        "    }",
        "    .nav-brand span { color: var(--clr-accent2); }",
        "",
        "    .navbar-nav .nav-link {",
        "      font-family: var(--font-mono);",
        "      font-size: .92rem;",
        "      font-weight: 500;",
        "      color: var(--clr-text-soft) !important;",
        "      letter-spacing: .02em;",
        "      padding: .4rem .5rem !important;",
        "      border-radius: var(--radius-sm);",
        "      transition: all var(--trans);",
        "      position: relative;",
        "    }",
        "    .navbar-nav .nav-link::before {",
        "      content: '';",
        "      position: absolute; bottom: 0; left: 50%; right: 50%;",
        "      height: 2px; background: var(--clr-accent2);",
        "      border-radius: 2px; transition: all var(--trans);",
        "    }",
        "    .navbar-nav .nav-link:hover,",
        "    .navbar-nav .nav-link:focus {",
        "      color: var(--clr-accent2) !important;",
        "      background: rgba(59,130,246,.08);",
        "    }",
        "    .navbar-nav .nav-link:hover::before,",
        "    .navbar-nav .nav-link:focus::before { left: 10%; right: 10%; }",
        "",
        "    .navbar-nav .nav-link.active {",
        "      color: var(--clr-accent2) !important;",
        "      background: rgba(59,130,246,.08);",
        "    }",
        "    .navbar-nav .nav-link.active::before { left: 10%; right: 10%; }",
        "",
        "    #themeToggle {",
        "      background: var(--clr-surface2);",
        "      border: 1px solid var(--clr-border);",
        "      color: var(--clr-text);",
        "      padding: .4rem .9rem;",
        "      border-radius: var(--radius-lg);",
        "      cursor: pointer; font-size: var(--fz-min);",
        "      transition: all var(--trans);",
        "      display: flex; align-items: center; gap: .5rem;",
        "      white-space: nowrap;",
        "    }",
        "    #themeToggle:hover { background: var(--clr-accent); color: #fff; border-color: var(--clr-accent); }",
        "    #themeToggle:focus-visible { outline: 2px solid var(--clr-accent2); outline-offset: 3px; }",
        "",
        "    #hero {",
        "      min-height: 100vh;",
        "      display: flex; align-items: center;",
        "      position: relative; overflow: hidden;",
        "      padding: 7rem 0 4rem;",
        "    }",
        "    #hero::before {",
        "      content: ''; position: absolute; inset: 0;",
        "      background-image:",
        "        linear-gradient(rgba(59,130,246,.07) 1px, transparent 1px),",
        "        linear-gradient(90deg, rgba(59,130,246,.07) 1px, transparent 1px);",
        "      background-size: 40px 40px; z-index: 0;",
        "    }",
        "    #hero::after {",
        "      content: ''; position: absolute;",
        "      top: -10%; left: -10%; width: 70%; height: 70%;",
        "      background: radial-gradient(ellipse at center, rgba(59,130,246,.12) 0%, transparent 65%);",
        "      z-index: 0; animation: floatGlow 6s ease-in-out infinite alternate;",
        "    }",
        "    @keyframes floatGlow {",
        "      from { transform: translate(0,0) scale(1); }",
        "      to   { transform: translate(4%,3%) scale(1.05); }",
        "    }",
        "    .hero-content { position: relative; z-index: 1; }",
        "",
        "    .status-badge {",
        "      display: inline-flex; align-items: center; gap: .5rem;",
        "      background: rgba(52,211,153,.1);",
        "      border: 1px solid rgba(52,211,153,.3);",
        "      color: var(--clr-success);",
        "      font-family: var(--font-mono);",
        "      font-size: var(--fz-min); font-weight: 500;",
        "      letter-spacing: .04em;",
        "      padding: .4rem 1rem; border-radius: 100px;",
        "      margin-bottom: 1.4rem;",
        "    }",
        "    .status-dot {",
        "      width: 7px; height: 7px;",
        "      background: var(--clr-success); border-radius: 50%;",
        "      animation: pulse-dot 1.6s ease infinite; flex-shrink: 0;",
        "    }",
        "    @keyframes pulse-dot {",
        "      0%,100% { opacity: 1; transform: scale(1); }",
        "      50%      { opacity: .5; transform: scale(.75); }",
        "    }",
        "",
        "    .hero-title {",
        "      font-family: var(--font-display); font-weight: 800;",
        "      font-size: clamp(2.4rem, 6vw, 4.2rem);",
        "      line-height: 1.1; color: var(--clr-heading);",
        "      letter-spacing: -.03em; margin-bottom: 1rem;",
        "    }",
        "    .hero-title .accent { color: var(--clr-accent2); }",
        "    .hero-title .typing-cursor {",
        "      display: inline-block; width: 3px; height: 1em;",
        "      background: var(--clr-accent2); margin-left: 3px;",
        "      vertical-align: text-bottom;",
        "      animation: blink .75s step-end infinite;",
        "    }",
        "    @keyframes blink { 50% { opacity: 0; } }",
        "",
        "    .hero-subtitle {",
        "      font-family: var(--font-mono);",
        "      font-size: clamp(var(--fz-min), 1.8vw, 1.15rem);",
        "      color: var(--clr-accent3); letter-spacing: .04em; margin-bottom: 1.3rem;",
        "    }",
        "    .hero-desc {",
        "      font-size: clamp(var(--fz-min), 2vw, 1.15rem);",
        "      color: var(--clr-text-soft);",
        "      max-width: 520px; margin-bottom: 2.2rem; line-height: 1.8;",
        "    }",
        "",
        "    .hero-avatar-wrap {",
        "      position: relative; display: flex;",
        "      justify-content: center; align-items: center;",
        "    }",
        "    .hero-avatar-ring {",
        "      position: relative;",
        "      width: clamp(220px,30vw,300px);",
        "      height: clamp(220px,30vw,300px);",
        "    }",
        "    .hero-avatar-ring::before,",
        "    .hero-avatar-ring::after {",
        "  content: '';",
        "  position: absolute;",
        "  inset: -12px;",
        "  border-radius: 50%;",
        "  border: 2px solid transparent;",
        "",
        "  background: conic-gradient(",
        "    from 0deg,",
        "    var(--clr-accent),",
        "    var(--clr-teal),",
        "    transparent 60%",
        "  ) border-box;",
        "",
        "  -webkit-mask:",
        "    linear-gradient(#fff 0 0) padding-box,",
        "    linear-gradient(#fff 0 0);",
        "",
        "  -webkit-mask-composite: destination-out;",
        "",
        "  mask:",
        "    linear-gradient(#fff 0 0) padding-box,",
        "    linear-gradient(#fff 0 0);",
        "",
        "  mask-composite: exclude;",
        "",
        "  animation: spinRing 8s linear infinite;",
        "}",
        "    .hero-avatar-ring::after {",
        "      inset: -22px; border-width: 1px; opacity: .4;",
        "      animation-duration: 14s; animation-direction: reverse;",
        "    }",
        "    @keyframes spinRing { to { transform: rotate(360deg); } }",
        "",
        "    .hero-avatar {",
        "      width: 100%; height: 100%; border-radius: 50%;",
        "      background: linear-gradient(145deg, #1a3a5c 0%, #0b1e38 40%, #112244 100%);",
        "      border: 3px solid var(--clr-border);",
        "      display: flex; flex-direction: column;",
        "      align-items: center; justify-content: center; gap: .4rem;",
        "      overflow: hidden; position: relative;",
        "    }",
        "    .hero-avatar i { font-size: clamp(4rem,10vw,5.5rem); color: var(--clr-accent3); opacity: .8; }",
        "    .hero-avatar .avatar-label {",
        "      font-family: var(--font-mono); font-size: var(--fz-min);",
        "      color: var(--clr-accent2); letter-spacing: .1em; opacity: .85;",
        "    }",
        "",
        "    .floating-chip {",
        "      position: absolute;",
        "      background: var(--clr-surface); backdrop-filter: blur(10px);",
        "      border: 1px solid var(--clr-border); border-radius: var(--radius-md);",
        "      padding: .5rem 1rem; font-family: var(--font-mono);",
        "      font-size: var(--fz-min); color: var(--clr-accent3); white-space: nowrap;",
        "      animation: chipFloat 4s ease-in-out infinite alternate;",
        "    }",
        "    .floating-chip:nth-child(2) { top: 5%;  left: -8%;  animation-delay: 0s;   animation-duration: 4.2s; }",
        "    .floating-chip:nth-child(3) { bottom: 8%; right: -8%; animation-delay: 1.3s; animation-duration: 3.8s; }",
        "    .floating-chip:nth-child(4) { top: 40%;  right: -12%; animation-delay: 0.6s; animation-duration: 5s; }",
        "    @keyframes chipFloat {",
        "      from { transform: translateY(0); }",
        "      to   { transform: translateY(-8px); }",
        "    }",
        "",
        "    .btn-hero-primary {",
        "      display: inline-flex; align-items: center; gap: .55rem;",
        "      background: linear-gradient(135deg, var(--clr-accent), var(--clr-teal));",
        "      color: #fff; font-family: var(--font-display); font-weight: 700;",
        "      font-size: var(--fz-min); padding: .85rem 1.9rem;",
        "      border-radius: var(--radius-lg); text-decoration: none; border: none;",
        "      cursor: pointer; transition: all var(--trans);",
        "      box-shadow: 0 4px 24px rgba(59,130,246,.35);",
        "    }",
        "    .btn-hero-primary:hover { transform: translateY(-3px); box-shadow: 0 8px 36px rgba(59,130,246,.55); color: #fff; }",
        "    .btn-hero-primary:focus-visible { outline: 3px solid var(--clr-accent2); outline-offset: 4px; }",
        "",
        "    .btn-hero-secondary {",
        "      display: inline-flex; align-items: center; gap: .55rem;",
        "      background: transparent; color: var(--clr-text);",
        "      font-family: var(--font-display); font-weight: 600;",
        "      font-size: var(--fz-min); padding: .85rem 1.9rem;",
        "      border-radius: var(--radius-lg); text-decoration: none;",
        "      border: 1px solid var(--clr-border); cursor: pointer;",
        "      transition: all var(--trans);",
        "    }",
        "    .btn-hero-secondary:hover {",
        "      background: var(--clr-surface2); border-color: var(--clr-accent2);",
        "      color: var(--clr-accent2); transform: translateY(-3px);",
        "    }",
        "    .btn-hero-secondary:focus-visible { outline: 3px solid var(--clr-accent2); outline-offset: 4px; }",
        "",
        "    .hero-stats { display: flex; gap: 2rem; margin-top: 2.8rem; flex-wrap: wrap; }",
        "    .hero-stat { text-align: left; }",
        "    .hero-stat .stat-val {",
        "      font-family: var(--font-display); font-weight: 800; font-size: 1.6rem;",
        "      color: var(--clr-heading); line-height: 1;",
        "    }",
        "    .hero-stat .stat-val span { color: var(--clr-accent2); }",
        "    .hero-stat .stat-lbl {",
        "      font-family: var(--font-mono); font-size: var(--fz-min);",
        "      color: var(--clr-text-faint); letter-spacing: .04em;",
        "      margin-top: .3rem; line-height: 1.4;",
        "    }",
        "    .hero-stat-sep { width: 1px; background: var(--clr-border); align-self: stretch; }",
        "",
        "    .scroll-indicator {",
        "      position: absolute; bottom: 2.5rem; left: 50%;",
        "      transform: translateX(-50%);",
        "      display: flex; flex-direction: column; align-items: center; gap: .4rem;",
        "      cursor: pointer; animation: bounceDown 2s ease infinite; z-index: 1;",
        "      text-decoration: none;",
        "    }",
        "    .scroll-indicator span {",
        "      font-family: var(--font-mono); font-size: var(--fz-min);",
        "      letter-spacing: .08em; color: var(--clr-text-faint);",
        "    }",
        "    .scroll-indicator i { color: var(--clr-accent2); font-size: var(--fz-min); }",
        "    @keyframes bounceDown {",
        "      0%,20%,50%,80%,100% { transform: translateX(-50%) translateY(0); }",
        "      40% { transform: translateX(-50%) translateY(6px); }",
        "      60% { transform: translateX(-50%) translateY(3px); }",
        "    }",
        "",
        "    section { padding: 5.5rem 0; }",
        "",
        "    .section-label {",
        "      font-family: var(--font-mono); font-size: var(--fz-min);",
        "      letter-spacing: .12em; color: var(--clr-accent2);",
        "      text-transform: uppercase; display: flex; align-items: center; gap: .7rem;",
        "      margin-bottom: .8rem;",
        "    }",
        "    .section-label::before { content: '//'; opacity: .5; }",
        "",
        "    .section-title {",
        "      font-family: var(--font-display); font-weight: 800;",
        "      font-size: clamp(1.8rem, 4vw, 2.8rem);",
        "      color: var(--clr-heading); letter-spacing: -.02em;",
        "      line-height: 1.15; margin-bottom: 1rem;",
        "    }",
        "    .section-title .accent { color: var(--clr-accent2); }",
        "",
        "    .section-desc {",
        "      color: var(--clr-text-soft); font-size: var(--fz-min);",
        "      max-width: 600px; line-height: 1.75;",
        "    }",
        "",
        "    .section-divider {",
        "      display: flex; align-items: center; gap: .8rem; margin: .6rem 0 3rem;",
        "    }",
        "    .section-divider .line {",
        "      height: 2px; width: 48px;",
        "      background: linear-gradient(90deg, var(--clr-accent), transparent);",
        "      border-radius: 2px;",
        "    }",
        "    .section-divider .dot {",
        "      width: 6px; height: 6px; border-radius: 50%; background: var(--clr-accent2);",
        "    }",
        "",
        "    .reveal {",
        "      opacity: 0; transform: translateY(30px);",
        "      transition: opacity .65s cubic-bezier(.4,0,.2,1), transform .65s cubic-bezier(.4,0,.2,1);",
        "    }",
        "    .reveal.visible { opacity: 1; transform: translateY(0); }",
        "    .reveal-left  { transform: translateX(-30px); }",
        "    .reveal-right { transform: translateX(30px); }",
        "    .reveal-left.visible, .reveal-right.visible { transform: translateX(0); }",
        "",
        "    .glass-card {",
        "      background: var(--clr-surface); backdrop-filter: blur(14px);",
        "      -webkit-backdrop-filter: blur(14px);",
        "      border: 1px solid var(--clr-border); border-radius: var(--radius-lg);",
        "      padding: 2rem; transition: all var(--trans); box-shadow: var(--shadow-card);",
        "    }",
        "    .glass-card:hover {",
        "      border-color: rgba(59,130,246,.4);",
        "      box-shadow: var(--shadow-glow), var(--shadow-card); transform: translateY(-4px);",
        "    }",
        "",
        "    #about { background: var(--clr-bg2); }",
        "",
        "    .about-text p {",
        "      color: var(--clr-text); font-size: var(--fz-min);",
        "      line-height: 1.85; margin-bottom: 1.1rem;",
        "    }",
        "    .about-text strong { color: var(--clr-accent2); font-weight: 600; }",
        "",
        "    .about-info-grid {",
        "      display: grid; grid-template-columns: 1fr 1fr; gap: .85rem; margin-top: 1.8rem;",
        "    }",
        "    .about-info-item {",
        "      display: flex; align-items: center; gap: .65rem;",
        "      font-size: var(--fz-min); color: var(--clr-text-soft);",
        "    }",
        "    .about-info-item i { width: 20px; color: var(--clr-accent2); flex-shrink: 0; }",
        "",
        "    .motive-list { list-style: none; padding: 0; display: flex; flex-direction: column; gap: .75rem; }",
        "    .motive-list li {",
        "      display: flex; align-items: flex-start; gap: .85rem;",
        "      font-size: var(--fz-min); color: var(--clr-text-soft);",
        "      padding: .8rem 1rem; background: var(--clr-surface);",
        "      border: 1px solid var(--clr-border); border-radius: var(--radius-md);",
        "      transition: all var(--trans);",
        "    }",
        "    .motive-list li:hover { border-color: var(--clr-accent2); color: var(--clr-text); transform: translateX(4px); }",
        "    .motive-list li .ico {",
        "      width: 34px; height: 34px;",
        "      background: linear-gradient(135deg, var(--clr-accent), var(--clr-teal));",
        "      border-radius: var(--radius-sm); display: flex; align-items: center;",
        "      justify-content: center; flex-shrink: 0; font-size: var(--fz-min); color: #fff;",
        "    }",
        "    .motive-list li strong {",
        "      color: var(--clr-heading); display: block;",
        "      margin-bottom: .2rem; font-size: var(--fz-min);",
        "    }",
        "",
        "    #skills { background: var(--clr-bg); }",
        "",
        "    .skill-cat-title {",
        "      font-family: var(--font-mono); font-size: var(--fz-min);",
        "      letter-spacing: .1em; color: var(--clr-accent2);",
        "      text-transform: uppercase; margin-bottom: 1.2rem;",
        "    }",
        "",
        "    .skill-card {",
        "      background: var(--clr-surface); border: 1px solid var(--clr-border);",
        "      border-radius: var(--radius-md); padding: 1.2rem 1.4rem;",
        "      transition: all var(--trans); cursor: default;",
        "    }",
        "    .skill-card:hover {",
        "      border-color: rgba(59,130,246,.45); background: var(--clr-surface2);",
        "      transform: translateY(-3px); box-shadow: 0 6px 24px rgba(59,130,246,.15);",
        "    }",
        "    .skill-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: .75rem; }",
        "    .skill-name {",
        "      display: flex; align-items: center; gap: .6rem;",
        "      font-family: var(--font-display); font-weight: 600;",
        "      font-size: var(--fz-min); color: var(--clr-text);",
        "    }",
        "    .skill-name i { color: var(--clr-accent2); font-size: var(--fz-min); }",
        "    .skill-pct { font-family: var(--font-mono); font-size: var(--fz-min); color: var(--clr-accent3); font-weight: 600; }",
        "",
        "    .skill-bar-bg { height: 5px; background: rgba(255,255,255,.06); border-radius: 10px; overflow: hidden; }",
        "    .skill-bar {",
        "      height: 100%; border-radius: 10px;",
        "      background: linear-gradient(90deg, var(--clr-accent), var(--clr-teal));",
        "      width: 0%; transition: width 1.2s cubic-bezier(.4,0,.2,1); position: relative;",
        "    }",
        "    .skill-bar::after {",
        "      content: ''; position: absolute; right: 0; top: 50%; transform: translateY(-50%);",
        "      width: 8px; height: 8px; background: var(--clr-cyan);",
        "      border-radius: 50%; box-shadow: 0 0 6px var(--clr-cyan);",
        "    }",
        "",
        "    .tech-badge {",
        "      display: inline-flex; align-items: center; gap: .4rem;",
        "      background: var(--clr-surface); border: 1px solid var(--clr-border);",
        "      padding: .4rem .85rem; border-radius: 100px;",
        "      font-family: var(--font-mono); font-size: var(--fz-min);",
        "      color: var(--clr-text-soft); transition: all var(--trans);",
        "    }",
        "    .tech-badge:hover { border-color: var(--clr-accent2); color: var(--clr-accent2); background: rgba(59,130,246,.07); }",
        "",
        "    #parcours { background: var(--clr-bg2); }",
        "",
        "    .timeline { position: relative; padding-left: 2.5rem; }",
        "    .timeline::before {",
        "      content: ''; position: absolute; left: .6rem; top: 0; bottom: 0;",
        "      width: 2px;",
        "      background: linear-gradient(180deg, var(--clr-accent), var(--clr-teal), transparent);",
        "      border-radius: 2px;",
        "    }",
        "    .timeline-item { position: relative; padding-bottom: 2.5rem; }",
        "    .timeline-item:last-child { padding-bottom: 0; }",
        "    .timeline-dot {",
        "      position: absolute; left: -2.5rem; top: .25rem;",
        "      width: 14px; height: 14px;",
        "      background: var(--clr-accent); border: 3px solid var(--clr-bg2);",
        "      border-radius: 50%; box-shadow: 0 0 12px var(--clr-accent); transition: all var(--trans);",
        "    }",
        "    .timeline-item:hover .timeline-dot { transform: scale(1.4); box-shadow: 0 0 20px var(--clr-accent2); }",
        "",
        "    .timeline-date {",
        "      font-family: var(--font-mono); font-size: var(--fz-min);",
        "      color: var(--clr-accent2); letter-spacing: .06em; margin-bottom: .5rem;",
        "    }",
        "    .timeline-title {",
        "      font-family: var(--font-display); font-weight: 700;",
        "      font-size: 1.1rem; color: var(--clr-heading); margin-bottom: .25rem;",
        "    }",
        "    .timeline-company { font-size: var(--fz-min); color: var(--clr-text-soft); margin-bottom: .65rem; }",
        "    .timeline-desc { font-size: var(--fz-min); color: var(--clr-text-soft); line-height: 1.75; }",
        "    .timeline-tags { display: flex; flex-wrap: wrap; gap: .45rem; margin-top: .85rem; }",
        "    .timeline-tag {",
        "      font-family: var(--font-mono); font-size: var(--fz-min);",
        "      color: var(--clr-teal); background: rgba(14,165,233,.08);",
        "      border: 1px solid rgba(14,165,233,.2); padding: .28rem .75rem; border-radius: 100px;",
        "    }",
        "",
        "    .premier-stage-banner {",
        "      background: linear-gradient(135deg, rgba(59,130,246,.08), rgba(14,165,233,.06));",
        "      border: 1px solid rgba(59,130,246,.25);",
        "      border-radius: var(--radius-lg);",
        "      padding: 1.5rem 1.8rem;",
        "      margin-bottom: 2.5rem;",
        "      display: flex; align-items: flex-start; gap: 1rem;",
        "    }",
        "    .premier-stage-banner .ico-wrap {",
        "      width: 46px; height: 46px; flex-shrink: 0;",
        "      background: linear-gradient(135deg, var(--clr-accent), var(--clr-teal));",
        "      border-radius: var(--radius-md);",
        "      display: flex; align-items: center; justify-content: center;",
        "      font-size: 1.2rem; color: #fff;",
        "    }",
        "    .premier-stage-banner p { font-size: var(--fz-min); color: var(--clr-text-soft); margin: 0; line-height: 1.7; }",
        "    .premier-stage-banner strong { color: var(--clr-accent2); }",
        "",
        "    #formation { background: var(--clr-bg); }",
        "",
        "    .formation-card {",
        "      background: var(--clr-surface); border: 1px solid var(--clr-border);",
        "      border-radius: var(--radius-lg); padding: 2rem 2.2rem; transition: all var(--trans);",
        "    }",
        "    .formation-card:hover { border-color: rgba(59,130,246,.4); box-shadow: var(--shadow-glow); }",
        "",
        "    .formation-logo {",
        "      width: 52px; height: 52px;",
        "      background: linear-gradient(135deg, var(--clr-accent), var(--clr-teal));",
        "      border-radius: var(--radius-md);",
        "      display: flex; align-items: center; justify-content: center;",
        "      font-size: 1.4rem; color: #fff; margin-bottom: 1.2rem; flex-shrink: 0;",
        "    }",
        "    .formation-badge {",
        "      display: inline-block; font-family: var(--font-mono);",
        "      font-size: var(--fz-min); letter-spacing: .06em;",
        "      padding: .35rem .85rem; border-radius: 100px; margin-bottom: .8rem;",
        "    }",
        "    .badge-niveau5  { background: rgba(251,191,36,.1); border: 1px solid rgba(251,191,36,.3);  color: var(--clr-warn); }",
        "    .badge-encours  { background: rgba(59,130,246,.1);  border: 1px solid rgba(59,130,246,.3);  color: var(--clr-accent3); }",
        "    .badge-success  { background: rgba(52,211,153,.1);  border: 1px solid rgba(52,211,153,.3);  color: var(--clr-success); }",
        "",
        "    .competence-chip {",
        "      display: inline-flex; align-items: center; gap: .35rem;",
        "      font-size: var(--fz-min); padding: .35rem .8rem; border-radius: 100px;",
        "      background: rgba(59,130,246,.08); border: 1px solid rgba(59,130,246,.2);",
        "      color: var(--clr-accent3); margin: .2rem;",
        "    }",
        "    .bloc-comp {",
        "      background: var(--clr-surface2); border: 1px solid var(--clr-border);",
        "      border-radius: var(--radius-md); padding: 1rem 1.1rem;",
        "    }",
        "    .bloc-comp-title {",
        "      font-family: var(--font-display); font-weight: 700;",
        "      font-size: var(--fz-min); color: var(--clr-heading); margin-bottom: .45rem;",
        "    }",
        "    .bloc-comp-desc { font-size: var(--fz-min); color: var(--clr-text-soft); line-height: 1.65; margin: 0; }",
        "",
        "    .cert-item {",
        "      display: flex; align-items: center; gap: .7rem;",
        "      font-size: var(--fz-min); color: var(--clr-text-soft); margin-bottom: .55rem;",
        "    }",
        "",
        "    #projects { background: var(--clr-bg2); }",
        "",
        "    .project-card {",
        "      background: var(--clr-surface); border: 1px solid var(--clr-border);",
        "      border-radius: var(--radius-lg); overflow: hidden; transition: all var(--trans);",
        "      height: 100%; display: flex; flex-direction: column;",
        "    }",
        "    .project-card:hover {",
        "      border-color: rgba(59,130,246,.45);",
        "      transform: translateY(-5px); box-shadow: var(--shadow-glow), var(--shadow-card);",
        "    }",
        "    .project-img {",
        "      height: 160px; position: relative; overflow: hidden;",
        "      display: flex; align-items: center; justify-content: center;",
        "    }",
        "    .project-img i { font-size: 3.5rem; opacity: .7; color: var(--clr-accent3); z-index: 1; }",
        "    .project-img::before { content: ''; position: absolute; inset: 0; opacity: .18; }",
        "    .pi-blue::before   { background: linear-gradient(135deg, #1e3a5f, #1a4b7c); }",
        "    .pi-teal::before   { background: linear-gradient(135deg, #134e4a, #0f766e); }",
        "    .pi-purple::before { background: linear-gradient(135deg, #2e1065, #4c1d95); }",
        "    .pi-orange::before { background: linear-gradient(135deg, #78350f, #92400e); }",
        "    .pi-green::before  { background: linear-gradient(135deg, #14532d, #166534); }",
        "    .pi-red::before    { background: linear-gradient(135deg, #7f1d1d, #991b1b); }",
        "    .project-img::after {",
        "      content: ''; position: absolute; inset: 0;",
        "      background-image:",
        "        linear-gradient(rgba(59,130,246,.04) 1px, transparent 1px),",
        "        linear-gradient(90deg, rgba(59,130,246,.04) 1px, transparent 1px);",
        "      background-size: 20px 20px;",
        "    }",
        "    .project-body { padding: 1.5rem; flex: 1; display: flex; flex-direction: column; }",
        "    .project-category {",
        "      font-family: var(--font-mono); font-size: var(--fz-min);",
        "      letter-spacing: .08em; color: var(--clr-teal); text-transform: uppercase; margin-bottom: .5rem;",
        "    }",
        "    .project-title {",
        "      font-family: var(--font-display); font-weight: 700;",
        "      font-size: var(--fz-min); color: var(--clr-heading); margin-bottom: .65rem;",
        "    }",
        "    .project-desc { font-size: var(--fz-min); color: var(--clr-text-soft); line-height: 1.7; flex: 1; margin-bottom: 1rem; }",
        "    .project-footer {",
        "      display: flex; justify-content: space-between; align-items: center;",
        "      border-top: 1px solid var(--clr-border); padding-top: 1rem;",
        "    }",
        "",
        "    .project-img img {",
        "      position: absolute; inset: 0;",
        "      width: 100%; height: 100%;",
        "      object-fit: cover; z-index: 1;",
        "      transition: transform var(--trans);",
        "    }",
        "    .project-card:hover .project-img img { transform: scale(1.06); }",
        "    .project-img .img-overlay {",
        "      position: absolute; inset: 0; z-index: 2; pointer-events: none;",
        "      background: linear-gradient(180deg, transparent 45%, rgba(6,13,26,.6));",
        "    }",
        "    .project-img .exe-badge {",
        "      position: absolute; top: .7rem; right: .7rem; z-index: 3;",
        "      display: inline-flex; align-items: center; gap: .35rem;",
        "      font-family: var(--font-mono); font-size: .74rem; font-weight: 600;",
        "      letter-spacing: .05em; text-transform: uppercase;",
        "      color: var(--clr-white); background: rgba(6,13,26,.82);",
        "      border: 1px solid var(--clr-border);",
        "      padding: .3rem .6rem; border-radius: 100px;",
        "      backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);",
        "    }",
        "    .project-img .exe-badge i { color: var(--clr-cyan); }",
        "    [data-theme=\"light\"] .project-img .exe-badge { color: #e2e8f0; }",
        "",
        "    .project-dl { margin-top: 1rem; border-top: 1px solid var(--clr-border); padding-top: 1rem; }",
        "    .dl-btn {",
        "      display: inline-flex; align-items: center; justify-content: center; gap: .55rem;",
        "      width: 100%;",
        "      font-family: var(--font-mono); font-size: .95rem; font-weight: 600;",
        "      color: var(--clr-white); text-decoration: none;",
        "      background: linear-gradient(135deg, var(--clr-accent), var(--clr-teal));",
        "      border: 1px solid rgba(59,130,246,.5); border-radius: 100px;",
        "      padding: .7rem 1.1rem;",
        "      transition: transform var(--trans), box-shadow var(--trans), filter var(--trans);",
        "    }",
        "    .dl-btn:hover {",
        "      transform: translateY(-2px); color: var(--clr-white);",
        "      box-shadow: 0 8px 22px rgba(59,130,246,.35); filter: brightness(1.08);",
        "    }",
        "    .dl-btn:focus-visible { outline: 2px solid var(--clr-accent2); outline-offset: 2px; }",
        "    .dl-hint {",
        "      display: block; margin-top: .55rem; text-align: center;",
        "      font-family: var(--font-mono); font-size: .74rem; color: var(--clr-text-faint);",
        "    }",
        "    .dl-hint i { color: var(--clr-teal); }",
        "",
        "    .dl-meta { display: flex; flex-wrap: wrap; gap: .4rem; margin-bottom: .7rem; }",
        "    .dl-chip {",
        "      display: inline-flex; align-items: center; gap: .35rem;",
        "      font-family: var(--font-mono); font-size: .72rem; font-weight: 500;",
        "      color: var(--clr-text-soft);",
        "      background: var(--clr-surface2);",
        "      border: 1px solid var(--clr-border);",
        "      padding: .28rem .6rem; border-radius: 100px;",
        "    }",
        "    .dl-chip i { font-size: .85em; }",
        "    .dl-chip.dl-size i { color: var(--clr-accent2); }",
        "    .dl-chip.dl-safe {",
        "      color: var(--clr-success);",
        "      border-color: rgba(52,211,153,.35);",
        "      background: rgba(52,211,153,.08);",
        "    }",
        "    .dl-chip.dl-safe i { color: var(--clr-success); }",
        "",
        "    #toast {",
        "      position: fixed; bottom: 5.5rem; right: 2rem;",
        "      background: var(--clr-bg2); border: 1px solid var(--clr-border);",
        "      border-radius: var(--radius-md); padding: .9rem 1.4rem;",
        "      font-size: var(--fz-min); color: var(--clr-text); z-index: 2000;",
        "      opacity: 0; transform: translateX(30px);",
        "      transition: all .35s cubic-bezier(.4,0,.2,1);",
        "      max-width: 300px; box-shadow: var(--shadow-card); pointer-events: none;",
        "    }",
        "    #toast.show { opacity: 1; transform: translateX(0); }",
        "",
        "    @media (max-width: 991.98px) { .hero-avatar-wrap { margin-top: 3rem; } .floating-chip { display: none; } }",
        "    @media (max-width: 767.98px) { section { padding: 4rem 0; } .about-info-grid { grid-template-columns: 1fr; } .hero-stats { gap: 1.2rem; } }",
        "    @media (max-width: 575.98px) { #hero { padding: 6rem 0 3rem; } .hero-stat-sep { display: none; } }",
        "    @media (max-width: 319.98px) { .hero-title { font-size: 1.8rem; } .section-title { font-size: 1.5rem; } }",
        "",
        "    :focus-visible { outline: 2px solid var(--clr-accent2); outline-offset: 3px; border-radius: 3px; }",
        "    ::selection { background: rgba(59,130,246,.3); color: var(--clr-heading); }",
        "  </style>",
        "",
        "  <style>",
        "  .navbar-nav          { flex-wrap: nowrap; }",
        "  .navbar-nav .nav-link { white-space: nowrap; }",
        "</style>",
        "</head>",
        "",
        "<body>",
        "  <a href=\"#main-content\" class=\"skip-link\">Passer au contenu principal</a>",
        "  <div id=\"toast\" role=\"status\" aria-live=\"polite\"></div>",
        "",
        "  <header>",
        "    <nav id=\"mainNav\" class=\"navbar navbar-expand-lg\" role=\"navigation\" aria-label=\"Navigation principale\">",
        "      <div class=\"container-fluid px-3 px-xl-4\">",
        "        <a class=\"nav-brand navbar-brand\" href=\"#hero\" aria-label=\"Lucas Moreau – Retour en haut\">LM<span>.</span></a>",
        "",
        "        <button class=\"navbar-toggler border-0 p-1\" type=\"button\"",
        "          data-bs-toggle=\"collapse\" data-bs-target=\"#navContent\"",
        "          aria-controls=\"navContent\" aria-expanded=\"false\"",
        "          aria-label=\"Ouvrir le menu de navigation\"",
        "          style=\"color: var(--clr-text-soft);\">",
        "          <i class=\"fas fa-bars\" aria-hidden=\"true\"></i>",
        "        </button>",
        "",
        "        <div class=\"collapse navbar-collapse\" id=\"navContent\">",
        "          <ul class=\"navbar-nav ms-auto align-items-lg-center gap-1 my-2 my-lg-0\">",
        "            <li class=\"nav-item\"><a class=\"nav-link\" href=\"#about\">À propos</a></li>",
        "            <li class=\"nav-item\"><a class=\"nav-link\" href=\"#skills\">Compétences</a></li>",
        "            <li class=\"nav-item\"><a class=\"nav-link\" href=\"#parcours\">Parcours</a></li>",
        "            <li class=\"nav-item\"><a class=\"nav-link\" href=\"#formation\">Formation</a></li>",
        "            <li class=\"nav-item\"><a class=\"nav-link\" href=\"#projects\">Projets</a></li>",
        "            <li class=\"nav-item\"><a class=\"nav-link\" href=\"#stage\">Objectif</a></li>",
        "            <li class=\"nav-item\"><a class=\"nav-link\" href=\"#contact\">Contact</a></li>",
        "          </ul>",
        "          <div class=\"ms-lg-3 mt-2 mt-lg-0\">",
        "            <button id=\"themeToggle\" aria-label=\"Basculer le thème clair/sombre\" title=\"Changer le thème\">",
        "              <i class=\"fas fa-moon\" id=\"themeIcon\" aria-hidden=\"true\"></i>",
        "              <span id=\"themeLabel\">Mode clair</span>",
        "            </button>",
        "          </div>",
        "        </div>",
        "      </div>",
        "    </nav>",
        "  </header>",
        "",
        "  <main id=\"main-content\">",
        "    <section id=\"hero\" aria-labelledby=\"hero-title\">",
        "      <div class=\"container\">",
        "        <div class=\"row align-items-center gy-4\">",
        "",
        "          <div class=\"col-lg-7 hero-content\">",
        "            <div class=\"status-badge\" role=\"status\">",
        "              <span class=\"status-dot\" aria-hidden=\"true\"></span>",
        "              Recherche d'un premier poste · Disponible immédiatement",
        "            </div>",
        "",
        "            <h1 id=\"hero-title\" class=\"hero-title\">",
        "              <span id=\"typing-name\">Lucas Moreau</span><span class=\"typing-cursor\" aria-hidden=\"true\"></span>",
        "            </h1>",
        "",
        "            <p class=\"hero-subtitle\">",
        "              <i class=\"fas fa-network-wired me-2\" aria-hidden=\"true\"></i>",
        "              Technicien Supérieur Systèmes &amp; Réseaux  <br> Titre Pro niveau 5 · MODE 83",
        "            </p>",
        "",
        "            <p class=\"hero-desc\">",
        "              Au terme de ma formation TSSR chez <strong style=\"color:var(--clr-accent2);\">MODE 83 à Draguignan</strong>,",
        "              je recherche mon premier poste en entreprise pour",
        "              mettre en pratique mes compétences en administration systèmes, réseaux,",
        "              virtualisation et sécurité informatique.",
        "            </p>",
        "",
        "            <div class=\"d-flex flex-wrap gap-3\">",
        "              <a href=\"#contact\" class=\"btn-hero-primary\" aria-label=\"Me contacter pour un poste TSSR\">",
        "                <i class=\"fas fa-paper-plane\" aria-hidden=\"true\"></i>",
        "                Me contacter",
        "              </a>",
        "              <a href=\"#\" class=\"btn-hero-secondary\" aria-label=\"Télécharger mon CV au format PDF\" download>",
        "                <i class=\"fas fa-download\" aria-hidden=\"true\"></i>",
        "                Télécharger mon CV version web",
        "              </a>",
        "            </div>",
        "",
        "            <div class=\"hero-stats\" role=\"list\" aria-label=\"Indicateurs clés\">",
        "              <div class=\"hero-stat\" role=\"listitem\">",
        "                <div class=\"stat-val\"><span class=\"counter-anim\" data-target=\"15\">0</span><span>+</span></div>",
        "                <div class=\"stat-lbl\">Compétences<br>techniques</div>",
        "              </div>",
        "              <div class=\"hero-stat-sep\" aria-hidden=\"true\"></div>",
        "              <div class=\"hero-stat\" role=\"listitem\">",
        "                <div class=\"stat-val\"><span class=\"counter-anim\" data-target=\"6\">0</span></div>",
        "                <div class=\"stat-lbl\">Projets pratiques<br>réalisés</div>",
        "              </div>",
        "              <div class=\"hero-stat-sep\" aria-hidden=\"true\"></div>",
        "              <div class=\"hero-stat\" role=\"listitem\">",
        "                <div class=\"stat-val\"><span>MODE </span><span class=\"counter-anim\" data-target=\"83\">0</span></div>",
        "                <div class=\"stat-lbl\">Centre de<br>formation</div>",
        "              </div>",
        "            </div>",
        "          </div>",
        "",
        "          <div class=\"col-lg-5 hero-avatar-wrap reveal reveal-right\">",
        "            <div class=\"hero-avatar-ring\" role=\"img\" aria-label=\"Illustration de profil de Lucas Moreau\">",
        "              <div class=\"hero-avatar\">",
        "                <i class=\"fas fa-user-shield\" aria-hidden=\"true\"></i>",
        "                <span class=\"avatar-label\">TSSR · NIV.5</span>",
        "              </div>",
        "              <div class=\"floating-chip\" aria-hidden=\"true\"><i class=\"fab fa-windows me-2\"></i>Windows Server</div>",
        "              <div class=\"floating-chip\" aria-hidden=\"true\"><i class=\"fas fa-shield-alt me-2\"></i>Firewall</div>",
        "              <div class=\"floating-chip\" aria-hidden=\"true\"><i class=\"fas fa-cube me-2\"></i>VMware</div>",
        "            </div>",
        "          </div>",
        "        </div>",
        "      </div>",
        "",
        "      <a href=\"#about\" class=\"scroll-indicator\" aria-label=\"Défiler vers À propos\">",
        "        <span>Défiler</span>",
        "        <i class=\"fas fa-chevron-down\" aria-hidden=\"true\"></i>",
        "      </a>",
        "    </section>",
        "",
        "    <section id=\"about\" aria-labelledby=\"about-title\">",
        "      <div class=\"container\">",
        "        <div class=\"row gy-5 align-items-start\">",
        "",
        "          <div class=\"col-lg-7 reveal\">",
        "            <p class=\"section-label\">01 — À propos de moi</p>",
        "            <h2 id=\"about-title\" class=\"section-title\">Profil &amp; <span class=\"accent\">motivations</span></h2>",
        "            <div class=\"section-divider\" aria-hidden=\"true\"><div class=\"line\"></div><div class=\"dot\"></div></div>",
        "",
        "            <div class=\"about-text\">",
        "              <p>",
        "                Je m'appelle <strong>Lucas Moreau</strong>, j'ai 23 ans et je termine ma",
        "                formation <strong>Technicien Supérieur Systèmes et Réseaux (TSSR)</strong> — Titre",
        "                Professionnel de niveau 5 reconnu par l'État — au centre de formation",
        "                <strong>MODE 83</strong> à Draguignan, dans le Var. Je suis désormais disponible pour un premier poste.",
        "              </p>",
        "              <p>",
        "                Ma formation m'a permis d'acquérir des bases solides en administration de serveurs",
        "                <strong>Windows Server</strong> et <strong>Linux</strong>, en configuration de réseaux",
        "                (VLAN, routage, VPN, firewall), en virtualisation avec <strong>VMware &amp; Hyper-V</strong>",
        "                et en sécurité informatique. <br> L'ensemble de mes compétences techniques provient",
        "                de mes travaux pratiques et projets réalisés chez MODE 83.",
        "              </p>",
        "              <p>",
        "                Sérieux, curieux et passionné par l'infrastructure IT, je recherche mon",
        "                <strong>premier poste en entreprise</strong> pour mettre en pratique",
        "                mes compétences, contribuer à vos projets réels et débuter ma carrière",
        "                dans les systèmes et réseaux.",
        "              </p>",
        "            </div>",
        "",
        "            <div class=\"about-info-grid\" role=\"list\" aria-label=\"Informations personnelles\">",
        "              <div class=\"about-info-item\" role=\"listitem\"><i class=\"fas fa-map-marker-alt\" aria-hidden=\"true\"></i><span>Draguignan, Var (83) - Mobilité PACA</span></div>",
        "              <div class=\"about-info-item\" role=\"listitem\"><i class=\"fas fa-graduation-cap\" aria-hidden=\"true\"></i><span>Formation TSSR - MODE 83 Draguignan</span></div>",
        "              <div class=\"about-info-item\" role=\"listitem\"><i class=\"fas fa-calendar-check\" aria-hidden=\"true\"></i><span>Disponible dès maintenant</span></div>",
        "              <div class=\"about-info-item\" role=\"listitem\"><i class=\"fas fa-car\" aria-hidden=\"true\"></i><span>Permis B - Véhiculé</span></div>",
        "              <div class=\"about-info-item\" role=\"listitem\"><i class=\"fas fa-language\" aria-hidden=\"true\"></i><span>Français (natif) · Anglais technique (B2)</span></div>",
        "              <div class=\"about-info-item\" role=\"listitem\"><i class=\"fas fa-briefcase\" aria-hidden=\"true\"></i><span>Poste visé : Technicien systèmes &amp; réseaux</span></div>",
        "            </div>",
        "",
        "            <div class=\"about-map-wrap mt-4\" aria-label=\"Localisation : Draguignan, Var\">",
        "              <p class=\"skill-cat-title mb-3\"><i class=\"fas fa-map-marked-alt\" aria-hidden=\"true\"></i> Ma localisation</p>",
        "              <div class=\"about-map-frame\">",
        "                <iframe",
        "                  src=\"https://www.google.com/maps?q=Draguignan,+83300,+Var,+France&amp;z=12&amp;hl=fr&amp;output=embed\"",
        "                  title=\"Carte Google Maps - Draguignan, Var (83)\"",
        "                  width=\"100%\"",
        "                  height=\"320\"",
        "                  style=\"border:0;\"",
        "                  allowfullscreen",
        "                  loading=\"lazy\"",
        "                  referrerpolicy=\"no-referrer-when-downgrade\"></iframe>",
        "              </div>",
        "            </div>",
        "",
        "            <style>",
        "              .about-map-wrap .about-map-frame{",
        "                position: relative;",
        "                border-radius: 16px;",
        "                overflow: hidden;",
        "                border: 1px solid rgba(255,255,255,.10);",
        "                box-shadow: 0 18px 40px rgba(0,0,0,.35);",
        "                background: rgba(255,255,255,.03);",
        "                line-height: 0;",
        "              }",
        "              .about-map-wrap .about-map-frame iframe{",
        "                display: block;",
        "                width: 100%;",
        "                filter: grayscale(.25) contrast(1.05);",
        "                transition: filter .35s ease;",
        "              }",
        "              .about-map-wrap .about-map-frame:hover iframe{ filter: none; }",
        "              @media (max-width: 575.98px){",
        "                .about-map-wrap .about-map-frame iframe{ height: 240px; }",
        "              }",
        "            </style>",
        "          </div>",
        "",
        "          <div class=\"col-lg-5 reveal reveal-right\">",
        "            <div class=\"glass-card h-100\">",
        "              <p class=\"skill-cat-title mb-3\">Pourquoi me choisir ?</p>",
        "              <ul class=\"motive-list\" role=\"list\">",
        "                <li role=\"listitem\">",
        "                  <div class=\"ico\" aria-hidden=\"true\"><i class=\"fas fa-rocket\"></i></div>",
        "                  <div><strong>Motivation sans faille</strong>Ce premier poste sera ma première expérience en entreprise : je l'aborde avec une implication et une curiosité totales.</div>",
        "                </li>",
        "                <li role=\"listitem\">",
        "                  <div class=\"ico\" aria-hidden=\"true\"><i class=\"fas fa-book-open\"></i></div>",
        "                  <div><strong>Bases techniques solides</strong>Connaissances théoriques et pratiques acquises chez MODE 83 : prêt à les appliquer dès le premier jour.</div>",
        "                </li>",
        "                <li role=\"listitem\">",
        "                  <div class=\"ico\" aria-hidden=\"true\"><i class=\"fas fa-sync-alt\"></i></div>",
        "                  <div><strong>Apprentissage rapide</strong>Capacité à me former vite sur de nouveaux outils et à m'adapter à l'environnement spécifique de votre entreprise.</div>",
        "                </li>",
        "                <li role=\"listitem\">",
        "                  <div class=\"ico\" aria-hidden=\"true\"><i class=\"fas fa-users\"></i></div>",
        "                  <div><strong>Esprit d'équipe</strong>À l'aise pour collaborer, poser des questions et communiquer clairement avec des équipes techniques.</div>",
        "                </li>",
        "                <li role=\"listitem\">",
        "                  <div class=\"ico\" aria-hidden=\"true\"><i class=\"fas fa-shield-alt\"></i></div>",
        "                  <div><strong>Culture sécurité</strong>Sensibilisé aux bonnes pratiques de sécurité informatique dès la conception des solutions.</div>",
        "                </li>",
        "              </ul>",
        "            </div>",
        "          </div>",
        "        </div>",
        "      </div>",
        "    </section>",
        "",
        "    <section id=\"skills\" aria-labelledby=\"skills-title\">",
        "      <div class=\"container\">",
        "        <div class=\"text-center mb-5 reveal\">",
        "          <p class=\"section-label justify-content-center\">02 — Compétences</p>",
        "          <h2 id=\"skills-title\" class=\"section-title\">Stack <span class=\"accent\">technique</span></h2>",
        "          <div class=\"section-divider justify-content-center\" aria-hidden=\"true\">",
        "            <div class=\"line\" style=\"background:linear-gradient(90deg,transparent,var(--clr-accent))\"></div>",
        "            <div class=\"dot\"></div><div class=\"line\"></div>",
        "          </div>",
        "          <p class=\"section-desc mx-auto text-center\">Niveaux de compétences développées à ce jour dans le cadre de ma formation au sein de MODE 83, préparant au Titre Professionnel TSSR de Niveau 5.</p>",
        "        </div>",
        "",
        "        <div class=\"row gy-5\">",
        "          <div class=\"col-lg-4 reveal\">",
        "            <p class=\"skill-cat-title\"><i class=\"fas fa-server me-2\" aria-hidden=\"true\"></i>Systèmes</p>",
        "            <div class=\"d-flex flex-column gap-3\">",
        "              <div class=\"skill-card\" role=\"region\" aria-label=\"Windows Server, 80%\">",
        "                <div class=\"skill-header\"><span class=\"skill-name\"><i class=\"fab fa-windows\" aria-hidden=\"true\"></i>Windows Server</span><span class=\"skill-pct\" aria-hidden=\"true\">80%</span></div>",
        "                <div class=\"skill-bar-bg\" role=\"progressbar\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\"><div class=\"skill-bar\" data-width=\"80\"></div></div>",
        "              </div>",
        "              <div class=\"skill-card\" role=\"region\" aria-label=\"Linux Debian, 70%\">",
        "                <div class=\"skill-header\"><span class=\"skill-name\"><i class=\"fab fa-linux\" aria-hidden=\"true\"></i>Linux (Debian)</span><span class=\"skill-pct\" aria-hidden=\"true\">70%</span></div>",
        "                <div class=\"skill-bar-bg\" role=\"progressbar\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\"><div class=\"skill-bar\" data-width=\"70\"></div></div>",
        "              </div>",
        "              <div class=\"skill-card\" role=\"region\" aria-label=\"Active Directory, 75%\">",
        "                <div class=\"skill-header\"><span class=\"skill-name\"><i class=\"fas fa-sitemap\" aria-hidden=\"true\"></i>Active Directory</span><span class=\"skill-pct\" aria-hidden=\"true\">75%</span></div>",
        "                <div class=\"skill-bar-bg\" role=\"progressbar\" aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\"><div class=\"skill-bar\" data-width=\"75\"></div></div>",
        "              </div>",
        "              <div class=\"skill-card\" role=\"region\" aria-label=\"PowerShell, 65%\">",
        "                <div class=\"skill-header\"><span class=\"skill-name\"><i class=\"fas fa-terminal\" aria-hidden=\"true\"></i>PowerShell</span><span class=\"skill-pct\" aria-hidden=\"true\">65%</span></div>",
        "                <div class=\"skill-bar-bg\" role=\"progressbar\" aria-valuenow=\"65\" aria-valuemin=\"0\" aria-valuemax=\"100\"><div class=\"skill-bar\" data-width=\"65\" ></div></div>",
        "              </div>",
        "              <div class=\"skill-card\" role=\"region\" aria-label=\"Support & dépannage, 78%\">",
        "                <div class=\"skill-header\"><span class=\"skill-name\"><i class=\"fas fa-headset\" aria-hidden=\"true\"></i>Support &amp; dépannage</span><span class=\"skill-pct\" aria-hidden=\"true\">78%</span></div>",
        "                <div class=\"skill-bar-bg\" role=\"progressbar\" aria-valuenow=\"78\" aria-valuemin=\"0\" aria-valuemax=\"100\"><div class=\"skill-bar\" data-width=\"78\"></div></div>",
        "              </div>",
        "            </div>",
        "          </div>",
        "",
        "          <div class=\"col-lg-4 reveal\" style=\"transition-delay:.12s\">",
        "            <p class=\"skill-cat-title\"><i class=\"fas fa-network-wired me-2\" aria-hidden=\"true\"></i>Réseaux</p>",
        "            <div class=\"d-flex flex-column gap-3\">",
        "              <div class=\"skill-card\" role=\"region\" aria-label=\"Réseaux TCP/IP, 78%\">",
        "                <div class=\"skill-header\"><span class=\"skill-name\"><i class=\"fas fa-project-diagram\" aria-hidden=\"true\"></i>Réseaux TCP/IP</span><span class=\"skill-pct\" aria-hidden=\"true\">78%</span></div>",
        "                <div class=\"skill-bar-bg\" role=\"progressbar\" aria-valuenow=\"78\" aria-valuemin=\"0\" aria-valuemax=\"100\"><div class=\"skill-bar\" data-width=\"78\"></div></div>",
        "              </div>",
        "              <div class=\"skill-card\" role=\"region\" aria-label=\"VLAN / Routage, 72%\">",
        "                <div class=\"skill-header\"><span class=\"skill-name\"><i class=\"fas fa-random\" aria-hidden=\"true\"></i>VLAN / Routage</span><span class=\"skill-pct\" aria-hidden=\"true\">72%</span></div>",
        "                <div class=\"skill-bar-bg\" role=\"progressbar\" aria-valuenow=\"72\" aria-valuemin=\"0\" aria-valuemax=\"100\"><div class=\"skill-bar\" data-width=\"72\"></div></div>",
        "              </div>",
        "              <div class=\"skill-card\" role=\"region\" aria-label=\"Firewall / VPN, 68%\">",
        "                <div class=\"skill-header\"><span class=\"skill-name\"><i class=\"fas fa-shield-virus\" aria-hidden=\"true\"></i>Firewall / VPN</span><span class=\"skill-pct\" aria-hidden=\"true\">68%</span></div>",
        "                <div class=\"skill-bar-bg\" role=\"progressbar\" aria-valuenow=\"68\" aria-valuemin=\"0\" aria-valuemax=\"100\"><div class=\"skill-bar\" data-width=\"68\"></div></div>",
        "              </div>",
        "              <div class=\"skill-card\" role=\"region\" aria-label=\"Supervision réseau, 62%\">",
        "                <div class=\"skill-header\"><span class=\"skill-name\"><i class=\"fas fa-chart-line\" aria-hidden=\"true\"></i>Supervision réseau</span><span class=\"skill-pct\" aria-hidden=\"true\">62%</span></div>",
        "                <div class=\"skill-bar-bg\" role=\"progressbar\" aria-valuenow=\"62\" aria-valuemin=\"0\" aria-valuemax=\"100\"><div class=\"skill-bar\" data-width=\"62\"></div></div>",
        "              </div>",
        "              <div class=\"skill-card\" role=\"region\" aria-label=\"Maintenance matérielle, 80%\">",
        "                <div class=\"skill-header\"><span class=\"skill-name\"><i class=\"fas fa-tools\" aria-hidden=\"true\"></i>Maintenance matérielle</span><span class=\"skill-pct\" aria-hidden=\"true\">80%</span></div>",
        "                <div class=\"skill-bar-bg\" role=\"progressbar\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\"><div class=\"skill-bar\" data-width=\"80\"></div></div>",
        "              </div>",
        "            </div>",
        "          </div>",
        "",
        "          <div class=\"col-lg-4 reveal\" style=\"transition-delay:.24s\">",
        "            <p class=\"skill-cat-title\"><i class=\"fas fa-cubes me-2\" aria-hidden=\"true\"></i>Virtualisation &amp; Sécurité</p>",
        "            <div class=\"d-flex flex-column gap-3\">",
        "              <div class=\"skill-card\" role=\"region\" aria-label=\"VMware vSphere, 68%\">",
        "                <div class=\"skill-header\"><span class=\"skill-name\"><i class=\"fas fa-cube\" aria-hidden=\"true\"></i>VMware vSphere</span><span class=\"skill-pct\" aria-hidden=\"true\">68%</span></div>",
        "                <div class=\"skill-bar-bg\" role=\"progressbar\" aria-valuenow=\"68\" aria-valuemin=\"0\" aria-valuemax=\"100\"><div class=\"skill-bar\" data-width=\"68\"></div></div>",
        "              </div>",
        "              <div class=\"skill-card\" role=\"region\" aria-label=\"Hyper-V / VirtualBox, 65%\">",
        "                <div class=\"skill-header\"><span class=\"skill-name\"><i class=\"fas fa-layer-group\" aria-hidden=\"true\"></i>Hyper-V / VirtualBox</span><span class=\"skill-pct\" aria-hidden=\"true\">65%</span></div>",
        "                <div class=\"skill-bar-bg\" role=\"progressbar\" aria-valuenow=\"65\" aria-valuemin=\"0\" aria-valuemax=\"100\"><div class=\"skill-bar\" data-width=\"65\"></div></div>",
        "              </div>",
        "              <div class=\"skill-card\" role=\"region\" aria-label=\"Sécurité informatique, 65%\">",
        "                <div class=\"skill-header\"><span class=\"skill-name\"><i class=\"fas fa-lock\" aria-hidden=\"true\"></i>Sécurité informatique</span><span class=\"skill-pct\" aria-hidden=\"true\">65%</span></div>",
        "                <div class=\"skill-bar-bg\" role=\"progressbar\" aria-valuenow=\"65\" aria-valuemin=\"0\" aria-valuemax=\"100\"><div class=\"skill-bar\" data-width=\"65\"></div></div>",
        "              </div>",
        "              <div class=\"skill-card\" role=\"region\" aria-label=\"Sauvegarde / PRA, 70%\">",
        "                <div class=\"skill-header\"><span class=\"skill-name\"><i class=\"fas fa-database\" aria-hidden=\"true\"></i>Sauvegarde / PRA</span><span class=\"skill-pct\" aria-hidden=\"true\">70%</span></div>",
        "                <div class=\"skill-bar-bg\" role=\"progressbar\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\"><div class=\"skill-bar\" data-width=\"70\"></div></div>",
        "              </div>",
        "              <div class=\"skill-card\" role=\"region\" aria-label=\"Docker (initiation), 55%\">",
        "                <div class=\"skill-header\"><span class=\"skill-name\"><i class=\"fab fa-docker\" aria-hidden=\"true\"></i>Docker (initiation)</span><span class=\"skill-pct\" aria-hidden=\"true\">55%</span></div>",
        "                <div class=\"skill-bar-bg\" role=\"progressbar\" aria-valuenow=\"55\" aria-valuemin=\"0\" aria-valuemax=\"100\"><div class=\"skill-bar\" data-width=\"55\"></div></div>",
        "              </div>",
        "            </div>",
        "          </div>",
        "        </div>",
        "",
        "        <div class=\"mt-5 text-center reveal\">",
        "          <p class=\"skill-cat-title mb-3\">Outils &amp; technologies étudiés à ce jour chez MODE 83</p>",
        "          <div class=\"d-flex flex-wrap justify-content-center gap-2\" role=\"list\" aria-label=\"Technologies étudiées\">",
        "            <span class=\"tech-badge\" role=\"listitem\"><i class=\"fas fa-network-wired\" aria-hidden=\"true\"></i>Cisco Packet Tracer</span>",
        "            <span class=\"tech-badge\" role=\"listitem\"><i class=\"fas fa-chart-bar\" aria-hidden=\"true\"></i>Nagios</span>",
        "            <span class=\"tech-badge\" role=\"listitem\"><i class=\"fas fa-eye\" aria-hidden=\"true\"></i>Zabbix</span>",
        "            <span class=\"tech-badge\" role=\"listitem\"><i class=\"fas fa-file-alt\" aria-hidden=\"true\"></i>GLPI</span>",
        "            <span class=\"tech-badge\" role=\"listitem\"><i class=\"fas fa-ticket-alt\" aria-hidden=\"true\"></i>OCS Inventory</span>",
        "            <span class=\"tech-badge\" role=\"listitem\"><i class=\"fab fa-git-alt\" aria-hidden=\"true\"></i>Git (bases)</span>",
        "            <span class=\"tech-badge\" role=\"listitem\"><i class=\"fas fa-server\" aria-hidden=\"true\"></i>DNS / DHCP</span>",
        "            <span class=\"tech-badge\" role=\"listitem\"><i class=\"fas fa-envelope\" aria-hidden=\"true\"></i>Exchange / Outlook</span>",
        "            <span class=\"tech-badge\" role=\"listitem\"><i class=\"fas fa-cloud\" aria-hidden=\"true\"></i>Azure AD (notions)</span>",
        "            <span class=\"tech-badge\" role=\"listitem\"><i class=\"fas fa-wifi\" aria-hidden=\"true\"></i>Wi-Fi / 802.1X</span>",
        "            <span class=\"tech-badge\" role=\"listitem\"><i class=\"fas fa-code\" aria-hidden=\"true\"></i>Bash scripting</span>",
        "            <span class=\"tech-badge\" role=\"listitem\"><i class=\"fas fa-print\" aria-hidden=\"true\"></i>Imprimantes réseau</span>",
        "          </div>",
        "        </div>",
        "      </div>",
        "    </section>",
        "",
        "    <section id=\"parcours\" aria-labelledby=\"parcours-title\">",
        "      <div class=\"container\">",
        "        <div class=\"row gy-4\">",
        "",
        "          <div class=\"col-lg-4 reveal\">",
        "            <p class=\"section-label\">03 — Parcours</p>",
        "            <h2 id=\"parcours-title\" class=\"section-title\">Formation &amp; <span class=\"accent\">parcours scolaire</span></h2>",
        "            <div class=\"section-divider\" aria-hidden=\"true\"><div class=\"line\"></div><div class=\"dot\"></div></div>",
        "            <p class=\"section-desc\">",
        "              Mon parcours est entièrement axé sur la formation : c'est mon apprentissage chez",
        "              MODE 83 qui constitue ma référence technique principale. <br> Je recherche ma",
        "              <strong style=\"color:var(--clr-accent2);\">toute première expérience en entreprise</strong>.",
        "            </p>",
        "",
        "            <div class=\"glass-card mt-4\">",
        "              <p class=\"skill-cat-title mb-3\">Langues</p>",
        "              <div class=\"d-flex flex-column gap-3\">",
        "                <div>",
        "                  <div class=\"skill-header mb-1\"><span class=\"skill-name\"><i class=\"fas fa-flag\" aria-hidden=\"true\"></i>Français</span><span class=\"skill-pct\">Natif</span></div>",
        "                  <div class=\"skill-bar-bg\" role=\"progressbar\" aria-label=\"Français natif\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\"><div class=\"skill-bar\" data-width=\"100\"></div></div>",
        "                </div>",
        "                <div>",
        "                  <div class=\"skill-header mb-1\"><span class=\"skill-name\"><i class=\"fas fa-flag-usa\" aria-hidden=\"true\"></i>Anglais technique</span><span class=\"skill-pct\">B2</span></div>",
        "                  <div class=\"skill-bar-bg\" role=\"progressbar\" aria-label=\"Anglais niveau B2\" aria-valuenow=\"72\" aria-valuemin=\"0\" aria-valuemax=\"100\"><div class=\"skill-bar\" data-width=\"72\"></div></div>",
        "                </div>",
        "              </div>",
        "            </div>",
        "          </div>",
        "",
        "          <div class=\"col-lg-8 reveal reveal-right\">",
        "",
        "            <div class=\"premier-stage-banner\" role=\"note\" aria-label=\"Information importante\">",
        "              <div class=\"ico-wrap\" aria-hidden=\"true\"><i class=\"fas fa-info-circle\"></i></div>",
        "              <p>",
        "                Ce premier poste sera ma <strong>première expérience professionnelle</strong>",
        "                dans le domaine des systèmes et réseaux. <br> Toutes mes compétences ont été acquises lors",
        "                de ma formation chez <strong>MODE 83 à Draguignan</strong>. <br>",
        "                J'apporte enthousiasme, bases solides et une réelle motivation à m'investir durablement dans votre entreprise.",
        "              </p>",
        "            </div>",
        "",
        "            <div class=\"timeline\" role=\"list\" aria-label=\"Parcours chronologique\">",
        "",
        "              <article class=\"timeline-item\" role=\"listitem\">",
        "                <div class=\"timeline-dot\" aria-hidden=\"true\"></div>",
        "                <div class=\"glass-card\">",
        "                  <p class=\"timeline-date\"><i class=\"fas fa-calendar-alt me-2\" aria-hidden=\"true\"></i>16 mars 2026 - En cours</p>",
        "                  <h3 class=\"timeline-title\">Formation TSSR - Technicien Supérieur Systèmes &amp; Réseaux</h3>",
        "                  <p class=\"timeline-company\"><i class=\"fas fa-building me-2\" aria-hidden=\"true\"></i>MODE 83 · Centre de formation · Draguignan (83)</p>",
        "                  <p class=\"timeline-desc\">",
        "                    Formation intensive en cours couvrant l'intégralité du référentiel TSSR Niveau 5 :",
        "                    administration Windows Server (AD DS, GPO, WSUS, DNS, DHCP), Linux Debian,",
        "                    configuration réseau <br> (routage, VLAN, VPN site-à-site), virtualisation VMware &amp;",
        "                    Hyper-V, sécurité des systèmes, supervision avec Zabbix/Nagios et scripting PowerShell. <br>",
        "                    Tous les apprentissages s'appuient sur des travaux pratiques en environnement de laboratoire.",
        "                  </p>",
        "                  <div class=\"timeline-tags\" role=\"list\" aria-label=\"Technologies abordées\">",
        "                    <span class=\"timeline-tag\" role=\"listitem\">Windows Server 2022</span>",
        "                    <span class=\"timeline-tag\" role=\"listitem\">Linux Debian</span>",
        "                    <span class=\"timeline-tag\" role=\"listitem\">Active Directory</span>",
        "                    <span class=\"timeline-tag\" role=\"listitem\">VMware ESXi</span>",
        "                    <span class=\"timeline-tag\" role=\"listitem\">Cisco Packet Tracer</span>",
        "                    <span class=\"timeline-tag\" role=\"listitem\">Zabbix</span>",
        "                    <span class=\"timeline-tag\" role=\"listitem\">PowerShell</span>",
        "                  </div>",
        "                </div>",
        "              </article>",
        "",
        "              <article class=\"timeline-item\" role=\"listitem\">",
        "                <div class=\"timeline-dot\" aria-hidden=\"true\"></div>",
        "                <div class=\"glass-card\">",
        "                  <p class=\"timeline-date\"><i class=\"fas fa-calendar-alt me-2\" aria-hidden=\"true\"></i>2023 - 2025</p>",
        "                  <h3 class=\"timeline-title\">Auto-formation &amp; veille technologique</h3>",
        "                  <p class=\"timeline-company\"><i class=\"fas fa-laptop-code me-2\" aria-hidden=\"true\"></i>Parcours personnel en autodidacte</p>",
        "                  <p class=\"timeline-desc\">",
        "                    Après l'obtention du bac et l'entrée en formation TSSR chez MODE 83, je me suis",
        "                    auto-formé aux fondamentaux IT via des plateformes en ligne (Cisco NetAcad,",
        "                    Google IT Support sur Coursera, TryHackMe pour les bases de la cybersécurité).",
        "                    Montage et configuration de mon propre homelab sur machine personnelle pour",
        "                    expérimenter Linux et la virtualisation.",
        "                  </p>",
        "                  <div class=\"timeline-tags\" role=\"list\" aria-label=\"Technologies explorées\">",
        "                    <span class=\"timeline-tag\" role=\"listitem\">Cisco NetAcad</span>",
        "                    <span class=\"timeline-tag\" role=\"listitem\">TryHackMe</span>",
        "                    <span class=\"timeline-tag\" role=\"listitem\">Coursera IT Support</span>",
        "                    <span class=\"timeline-tag\" role=\"listitem\">Homelab perso</span>",
        "                  </div>",
        "                </div>",
        "              </article>",
        "",
        "              <article class=\"timeline-item\" role=\"listitem\">",
        "                <div class=\"timeline-dot\" aria-hidden=\"true\"></div>",
        "                <div class=\"glass-card\">",
        "                  <p class=\"timeline-date\"><i class=\"fas fa-calendar-alt me-2\" aria-hidden=\"true\"></i>Septembre 2020 - Juin 2023</p>",
        "                  <h3 class=\"timeline-title\">Baccalauréat STI2D - Systèmes d'information et numérique</h3>",
        "                  <p class=\"timeline-company\"><i class=\"fas fa-school me-2\" aria-hidden=\"true\"></i>Lycée Jean Moulin · Draguignan (83)</p>",
        "                  <p class=\"timeline-desc\">",
        "                    Obtention du baccalauréat STI2D option SIN (Systèmes d'Information et Numérique),",
        "                    mention Bien. Spécialité orientée vers les systèmes embarqués, la programmation",
        "                    et les réseaux. <br> Projet de terminale : conception d'un système domotique connecté",
        "                    utilisant un Raspberry Pi, le protocole MQTT et une interface web de supervision,",
        "                    qui a éveillé ma passion pour les systèmes et les réseaux.",
        "                  </p>",
        "                  <div class=\"timeline-tags\" role=\"list\" aria-label=\"Technologies utilisées\">",
        "                    <span class=\"timeline-tag\" role=\"listitem\">Raspberry Pi</span>",
        "                    <span class=\"timeline-tag\" role=\"listitem\">Python</span>",
        "                    <span class=\"timeline-tag\" role=\"listitem\">MQTT</span>",
        "                    <span class=\"timeline-tag\" role=\"listitem\">HTML/CSS</span>",
        "                    <span class=\"timeline-tag\" role=\"listitem\">Mention Bien</span>",
        "                  </div>",
        "                </div>",
        "              </article>",
        "",
        "            </div>",
        "          </div>",
        "        </div>",
        "      </div>",
        "    </section>",
        "",
        "    <section id=\"formation\" aria-labelledby=\"form-title\">",
        "      <div class=\"container\">",
        "        <div class=\"text-center mb-5 reveal\">",
        "          <p class=\"section-label justify-content-center\">04 — Formation</p>",
        "          <h2 id=\"form-title\" class=\"section-title\">Certification &amp; <span class=\"accent\">compétences acquises</span></h2>",
        "          <div class=\"section-divider justify-content-center\" aria-hidden=\"true\">",
        "            <div class=\"line\" style=\"background:linear-gradient(90deg,transparent,var(--clr-accent))\"></div>",
        "            <div class=\"dot\"></div><div class=\"line\"></div>",
        "          </div>",
        "        </div>",
        "",
        "        <div class=\"row gy-4\">",
        "          <div class=\"col-lg-6 reveal\">",
        "            <div class=\"formation-card h-100\">",
        "              <div class=\"d-flex align-items-start gap-3 mb-2\">",
        "                <div class=\"formation-logo\" aria-hidden=\"true\"><i class=\"fas fa-graduation-cap\"></i></div>",
        "                <div>",
        "                  <span class=\"formation-badge badge-niveau5\">Titre Professionnel Niveau 5 (Bac+2)</span>",
        "                  <h3 class=\"section-title\" style=\"font-size:1.3rem;margin-bottom:.3rem;\">Technicien Supérieur Systèmes &amp; Réseaux</h3>",
        "                  <p style=\"font-family:var(--font-mono);font-size:var(--fz-min);color:var(--clr-accent2);margin-bottom:.15rem;\">",
        "                    <i class=\"fas fa-building me-2\" aria-hidden=\"true\"></i>MODE 83 · Draguignan (83)",
        "                  </p>",
        "                  <p style=\"font-family:var(--font-mono);font-size:var(--fz-min);color:var(--clr-text-soft);\">",
        "                    <i class=\"fas fa-calendar-alt me-2\" aria-hidden=\"true\"></i>Depuis le 16 mars 2026 · Formation en cours",
        "                  </p>",
        "                </div>",
        "              </div>",
        "              <hr style=\"border-color:var(--clr-border);margin:1.4rem 0;\">",
        "              <p class=\"skill-cat-title\">Blocs de compétences du référentiel TSSR</p>",
        "              <div class=\"row g-2\">",
        "                <div class=\"col-12\">",
        "                  <div class=\"bloc-comp\">",
        "                    <p class=\"bloc-comp-title\"><i class=\"fas fa-check-circle text-success me-2\" aria-hidden=\"true\"></i>Bloc 1 - Exploiter une infrastructure réseau</p>",
        "                    <p class=\"bloc-comp-desc\">Configuration de routeurs/commutateurs, mise en œuvre VLAN, DHCP, DNS, VPN site-à-site, Wi-Fi d'entreprise, supervision réseau.</p>",
        "                  </div>",
        "                </div>",
        "                <div class=\"col-12\">",
        "                  <div class=\"bloc-comp\">",
        "                    <p class=\"bloc-comp-title\"><i class=\"fas fa-check-circle text-success me-2\" aria-hidden=\"true\"></i>Bloc 2 – Administrer les systèmes de l'infrastructure</p>",
        "                    <p class=\"bloc-comp-desc\">Installation et configuration de serveurs Windows Server et Linux. Active Directory, GPO, scripts PowerShell, gestion des utilisateurs.</p>",
        "                  </div>",
        "                </div>",
        "                <div class=\"col-12\">",
        "                  <div class=\"bloc-comp\">",
        "                    <p class=\"bloc-comp-title\"><i class=\"fas fa-check-circle text-success me-2\" aria-hidden=\"true\"></i>Bloc 3 – Superviser et sécuriser l'infrastructure</p>",
        "                    <p class=\"bloc-comp-desc\">Mise en place de sondes et alertes, PRA/PCA, durcissement des systèmes, gestion des sauvegardes et plans de continuité.</p>",
        "                  </div>",
        "                </div>",
        "              </div>",
        "            </div>",
        "          </div>",
        "",
        "          <div class=\"col-lg-6\">",
        "            <div class=\"row gy-4\">",
        "              <div class=\"col-12 reveal reveal-right\">",
        "                <div class=\"formation-card\">",
        "                  <p class=\"skill-cat-title mb-3\">Diplômes &amp; certifications en cours / obtenues</p>",
        "                  <div class=\"d-flex flex-column gap-2\">",
        "                    <div class=\"cert-item\">",
        "                      <span class=\"formation-badge badge-encours\" style=\"white-space:nowrap;font-size:var(--fz-min);\">EN COURS</span>",
        "                      <span>TP TSSR Niv. 5 - MODE 83, Draguignan (2026)</span>",
        "                    </div>",
        "                    <div class=\"cert-item\">",
        "                      <i class=\"fas fa-award\" style=\"color:var(--clr-warn);font-size:1.2rem;\" aria-hidden=\"true\"></i>",
        "                      <span>Baccalauréat STI2D - Mention Bien (2023)</span>",
        "                    </div>",
        "                    <div class=\"cert-item\">",
        "                      <i class=\"fas fa-award\" style=\"color:var(--clr-accent2);font-size:1.2rem;\" aria-hidden=\"true\"></i>",
        "                      <span>Cisco NetAcad - IT Essentials (2024)</span>",
        "                    </div>",
        "                    <div class=\"cert-item\">",
        "                      <i class=\"fas fa-award\" style=\"color:var(--clr-teal);font-size:1.2rem;\" aria-hidden=\"true\"></i>",
        "                      <span>Google IT Support - Coursera (2025)</span>",
        "                    </div>",
        "                    <div class=\"cert-item\">",
        "                      <i class=\"fas fa-clock\" style=\"color:var(--clr-text-faint);font-size:1.2rem;\" aria-hidden=\"true\"></i>",
        "                      <span style=\"color:var(--clr-text-faint);\">CompTIA A+ - Préparation en cours</span>",
        "                    </div>",
        "                  </div>",
        "                </div>",
        "              </div>",
        "              <div class=\"col-12 reveal reveal-right\" style=\"transition-delay:.1s\">",
        "                <div class=\"formation-card\">",
        "                  <p class=\"skill-cat-title mb-3\">Compétences transversales</p>",
        "                  <div class=\"d-flex flex-wrap\">",
        "                    <span class=\"competence-chip\"><i class=\"fas fa-brain\" aria-hidden=\"true\"></i>Résolution de problèmes</span>",
        "                    <span class=\"competence-chip\"><i class=\"fas fa-users\" aria-hidden=\"true\"></i>Travail en équipe</span>",
        "                    <span class=\"competence-chip\"><i class=\"fas fa-comments\" aria-hidden=\"true\"></i>Communication claire</span>",
        "                    <span class=\"competence-chip\"><i class=\"fas fa-book-open\" aria-hidden=\"true\"></i>Veille technologique</span>",
        "                    <span class=\"competence-chip\"><i class=\"fas fa-clock\" aria-hidden=\"true\"></i>Rigueur &amp; ponctualité</span>",
        "                    <span class=\"competence-chip\"><i class=\"fas fa-lightbulb\" aria-hidden=\"true\"></i>Autonomie</span>",
        "                    <span class=\"competence-chip\"><i class=\"fas fa-file-alt\" aria-hidden=\"true\"></i>Rédaction technique</span>",
        "                    <span class=\"competence-chip\"><i class=\"fas fa-sync\" aria-hidden=\"true\"></i>Adaptabilité</span>",
        "                    <span class=\"competence-chip\"><i class=\"fas fa-question-circle\" aria-hidden=\"true\"></i>Curiosité intellectuelle</span>",
        "                  </div>",
        "                </div>",
        "              </div>",
        "            </div>",
        "          </div>",
        "        </div>",
        "      </div>",
        "    </section>",
        "",
        "    <section id=\"projects\" aria-labelledby=\"proj-title\">",
        "      <div class=\"container\">",
        "        <div class=\"text-center mb-5 reveal\">",
        "          <p class=\"section-label justify-content-center\">05 — Projets</p>",
        "          <h2 id=\"proj-title\" class=\"section-title\">Applications <span class=\"accent\">&amp; outils .exe</span></h2>",
        "          <div class=\"section-divider justify-content-center\" aria-hidden=\"true\">",
        "            <div class=\"line\" style=\"background:linear-gradient(90deg,transparent,var(--clr-accent))\"></div>",
        "            <div class=\"dot\"></div><div class=\"line\"></div>",
        "          </div>",
        "          <p class=\"section-desc mx-auto text-center\">",
        "            Outils et applications <strong>.exe</strong> que j'ai développés durant ma formation TSSR chez MODE 83.",
        "            Chaque application est <strong>téléchargeable via un lien MEGA</strong> : un recruteur peut la récupérer sur son PC",
        "            et l'exécuter directement pour la tester (Windows 10/11, aucune installation requise).",
        "          </p>",
        "        </div>",
        "",
        "        <div class=\"row gy-4\">",
        "",
        "          <div class=\"col-md-6 col-xl-4 reveal\">",
        "            <article class=\"project-card\" aria-labelledby=\"proj1-title\">",
        "              <div class=\"project-img pi-blue\">",
        "                <i class=\"fas fa-toolbox\" aria-hidden=\"true\"></i>",
        "                <img src=\"images/exe-1.png\" alt=\"Capture de l'application Maintenance-TSSR.exe en fonctionnement\" loading=\"lazy\" onerror=\"this.style.display='none'\">",
        "                <span class=\"img-overlay\"></span>",
        "                <span class=\"exe-badge\"><i class=\"fas fa-microchip\" aria-hidden=\"true\"></i>.exe</span>",
        "              </div>",
        "              <div class=\"project-body\">",
        "                <p class=\"project-category\">Outil PowerShell → .exe</p>",
        "                <h3 id=\"proj1-title\" class=\"project-title\">Maintenance-TSSR.exe — Boîte à outils</h3>",
        "                <p class=\"project-desc\">Application de diagnostic et de maintenance Windows développée en PowerShell puis compilée en <strong>.exe</strong> autonome (ps2exe) : vérification disque, nettoyage des fichiers temporaires, état des services critiques, analyse des journaux d'événements et génération d'un rapport HTML.</p>",
        "                <div class=\"project-footer\">",
        "                  <div class=\"d-flex gap-1 flex-wrap\">",
        "                    <span class=\"timeline-tag\">PowerShell</span>",
        "                    <span class=\"timeline-tag\">ps2exe</span>",
        "                    <span class=\"timeline-tag\">Windows 10/11</span>",
        "                    <span class=\"timeline-tag\">Diagnostic</span>",
        "                  </div>",
        "                </div>",
        "                <div class=\"project-dl\">",
        "                  <div class=\"dl-meta\">",
        "                    <span class=\"dl-chip dl-size\"><i class=\"fas fa-file-arrow-down\" aria-hidden=\"true\"></i> 2,4 Mo</span>",
        "                    <span class=\"dl-chip dl-safe\"><i class=\"fas fa-shield-virus\" aria-hidden=\"true\"></i> Analysé antivirus — sans menace</span>",
        "                  </div>",
        "                  <a class=\"dl-btn\" href=\"https://mega.nz/file/REMPLACER-PAR-VOTRE-LIEN-1\" target=\"_blank\" rel=\"noopener noreferrer\" download>",
        "                    <i class=\"fas fa-download\" aria-hidden=\"true\"></i> Télécharger le .exe (MEGA)",
        "                  </a>",
        "                  <span class=\"dl-hint\"><i class=\"fas fa-shield-halved\" aria-hidden=\"true\"></i> Exécutable autonome — testez-le directement, aucune installation</span>",
        "                </div>",
        "              </div>",
        "            </article>",
        "          </div>",
        "",
        "          <div class=\"col-md-6 col-xl-4 reveal\" style=\"transition-delay:.08s\">",
        "            <article class=\"project-card\" aria-labelledby=\"proj2-title\">",
        "              <div class=\"project-img pi-teal\">",
        "                <i class=\"fas fa-users-gear\" aria-hidden=\"true\"></i>",
        "                <img src=\"images/exe-2.png\" alt=\"Capture de l'application GestionAD.exe en fonctionnement\" loading=\"lazy\" onerror=\"this.style.display='none'\">",
        "                <span class=\"img-overlay\"></span>",
        "                <span class=\"exe-badge\"><i class=\"fas fa-microchip\" aria-hidden=\"true\"></i>.exe</span>",
        "              </div>",
        "              <div class=\"project-body\">",
        "                <p class=\"project-category\">Outil Active Directory → .exe</p>",
        "                <h3 id=\"proj2-title\" class=\"project-title\">GestionAD.exe — Comptes en masse</h3>",
        "                <p class=\"project-desc\">Utilitaire <strong>.exe</strong> pour automatiser la gestion Active Directory : création en masse de comptes utilisateurs depuis un fichier CSV, affectation aux OU et groupes, réinitialisation de mots de passe et export d'audit des comptes inactifs.</p>",
        "                <div class=\"project-footer\">",
        "                  <div class=\"d-flex gap-1 flex-wrap\">",
        "                    <span class=\"timeline-tag\">PowerShell</span>",
        "                    <span class=\"timeline-tag\">Active Directory</span>",
        "                    <span class=\"timeline-tag\">CSV</span>",
        "                    <span class=\"timeline-tag\">Automatisation</span>",
        "                  </div>",
        "                </div>",
        "                <div class=\"project-dl\">",
        "                  <div class=\"dl-meta\">",
        "                    <span class=\"dl-chip dl-size\"><i class=\"fas fa-file-arrow-down\" aria-hidden=\"true\"></i> 1,9 Mo</span>",
        "                    <span class=\"dl-chip dl-safe\"><i class=\"fas fa-shield-virus\" aria-hidden=\"true\"></i> Analysé antivirus — sans menace</span>",
        "                  </div>",
        "                  <a class=\"dl-btn\" href=\"https://mega.nz/file/REMPLACER-PAR-VOTRE-LIEN-2\" target=\"_blank\" rel=\"noopener noreferrer\" download>",
        "                    <i class=\"fas fa-download\" aria-hidden=\"true\"></i> Télécharger le .exe (MEGA)",
        "                  </a>",
        "                  <span class=\"dl-hint\"><i class=\"fas fa-shield-halved\" aria-hidden=\"true\"></i> Exécutable autonome — testez-le directement, aucune installation</span>",
        "                </div>",
        "              </div>",
        "            </article>",
        "          </div>",
        "",
        "          <div class=\"col-md-6 col-xl-4 reveal\" style=\"transition-delay:.16s\">",
        "            <article class=\"project-card\" aria-labelledby=\"proj3-title\">",
        "              <div class=\"project-img pi-purple\">",
        "                <i class=\"fas fa-wifi\" aria-hidden=\"true\"></i>",
        "                <img src=\"images/exe-3.png\" alt=\"Capture de l'application NetScan.exe en fonctionnement\" loading=\"lazy\" onerror=\"this.style.display='none'\">",
        "                <span class=\"img-overlay\"></span>",
        "                <span class=\"exe-badge\"><i class=\"fas fa-microchip\" aria-hidden=\"true\"></i>.exe</span>",
        "              </div>",
        "              <div class=\"project-body\">",
        "                <p class=\"project-category\">Outil Réseau → .exe</p>",
        "                <h3 id=\"proj3-title\" class=\"project-title\">NetScan.exe — Scanner réseau</h3>",
        "                <p class=\"project-desc\">Application <strong>.exe</strong> de découverte et de supervision du réseau local : scan du sous-réseau, détection des hôtes actifs, identification des ports ouverts, mesure de la latence et export de la cartographie du parc au format JSON.</p>",
        "                <div class=\"project-footer\">",
        "                  <div class=\"d-flex gap-1 flex-wrap\">",
        "                    <span class=\"timeline-tag\">PowerShell</span>",
        "                    <span class=\"timeline-tag\">TCP/IP</span>",
        "                    <span class=\"timeline-tag\">Ping/ARP</span>",
        "                    <span class=\"timeline-tag\">Supervision</span>",
        "                  </div>",
        "                </div>",
        "                <div class=\"project-dl\">",
        "                  <div class=\"dl-meta\">",
        "                    <span class=\"dl-chip dl-size\"><i class=\"fas fa-file-arrow-down\" aria-hidden=\"true\"></i> 1,6 Mo</span>",
        "                    <span class=\"dl-chip dl-safe\"><i class=\"fas fa-shield-virus\" aria-hidden=\"true\"></i> Analysé antivirus — sans menace</span>",
        "                  </div>",
        "                  <a class=\"dl-btn\" href=\"https://mega.nz/file/REMPLACER-PAR-VOTRE-LIEN-3\" target=\"_blank\" rel=\"noopener noreferrer\" download>",
        "                    <i class=\"fas fa-download\" aria-hidden=\"true\"></i> Télécharger le .exe (MEGA)",
        "                  </a>",
        "                  <span class=\"dl-hint\"><i class=\"fas fa-shield-halved\" aria-hidden=\"true\"></i> Exécutable autonome — testez-le directement, aucune installation</span>",
        "                </div>",
        "              </div>",
        "            </article>",
        "          </div>",
        "",
        "          <div class=\"col-md-6 col-xl-4 reveal\" style=\"transition-delay:.04s\">",
        "            <article class=\"project-card\" aria-labelledby=\"proj4-title\">",
        "              <div class=\"project-img pi-orange\">",
        "                <i class=\"fas fa-hard-drive\" aria-hidden=\"true\"></i>",
        "                <img src=\"images/exe-4.png\" alt=\"Capture de l'application BackupTool.exe en fonctionnement\" loading=\"lazy\" onerror=\"this.style.display='none'\">",
        "                <span class=\"img-overlay\"></span>",
        "                <span class=\"exe-badge\"><i class=\"fas fa-microchip\" aria-hidden=\"true\"></i>.exe</span>",
        "              </div>",
        "              <div class=\"project-body\">",
        "                <p class=\"project-category\">Outil Sauvegarde → .exe</p>",
        "                <h3 id=\"proj4-title\" class=\"project-title\">BackupTool.exe — Sauvegarde auto</h3>",
        "                <p class=\"project-desc\">Utilitaire <strong>.exe</strong> de sauvegarde et de restauration automatisées : compression des dossiers sources, copie vers un partage réseau, vérification d'intégrité SHA-256 et planification d'une tâche récurrente dans le planificateur Windows.</p>",
        "                <div class=\"project-footer\">",
        "                  <div class=\"d-flex gap-1 flex-wrap\">",
        "                    <span class=\"timeline-tag\">PowerShell</span>",
        "                    <span class=\"timeline-tag\">SHA-256</span>",
        "                    <span class=\"timeline-tag\">Task Scheduler</span>",
        "                  </div>",
        "                </div>",
        "                <div class=\"project-dl\">",
        "                  <div class=\"dl-meta\">",
        "                    <span class=\"dl-chip dl-size\"><i class=\"fas fa-file-arrow-down\" aria-hidden=\"true\"></i> 2,1 Mo</span>",
        "                    <span class=\"dl-chip dl-safe\"><i class=\"fas fa-shield-virus\" aria-hidden=\"true\"></i> Analysé antivirus — sans menace</span>",
        "                  </div>",
        "                  <a class=\"dl-btn\" href=\"https://mega.nz/file/REMPLACER-PAR-VOTRE-LIEN-4\" target=\"_blank\" rel=\"noopener noreferrer\" download>",
        "                    <i class=\"fas fa-download\" aria-hidden=\"true\"></i> Télécharger le .exe (MEGA)",
        "                  </a>",
        "                  <span class=\"dl-hint\"><i class=\"fas fa-shield-halved\" aria-hidden=\"true\"></i> Exécutable autonome — testez-le directement, aucune installation</span>",
        "                </div>",
        "              </div>",
        "            </article>",
        "          </div>",
        "",
        "          <div class=\"col-md-6 col-xl-4 reveal\" style=\"transition-delay:.12s\">",
        "            <article class=\"project-card\" aria-labelledby=\"proj5-title\">",
        "              <div class=\"project-img pi-green\">",
        "                <i class=\"fas fa-clipboard-list\" aria-hidden=\"true\"></i>",
        "                <img src=\"images/exe-5.png\" alt=\"Capture de l'application Inventaire-Info.exe en fonctionnement\" loading=\"lazy\" onerror=\"this.style.display='none'\">",
        "                <span class=\"img-overlay\"></span>",
        "                <span class=\"exe-badge\"><i class=\"fas fa-microchip\" aria-hidden=\"true\"></i>.exe</span>",
        "              </div>",
        "              <div class=\"project-body\">",
        "                <p class=\"project-category\">Outil Inventaire → .exe</p>",
        "                <h3 id=\"proj5-title\" class=\"project-title\">Inventaire-Info.exe — Parc IT</h3>",
        "                <p class=\"project-desc\">Application <strong>.exe</strong> d'inventaire matériel et logiciel : collecte automatique des caractéristiques d'un poste (CPU, RAM, disques, n° de série), liste des logiciels installés et génération d'une fiche machine exportable en PDF.</p>",
        "                <div class=\"project-footer\">",
        "                  <div class=\"d-flex gap-1 flex-wrap\">",
        "                    <span class=\"timeline-tag\">PowerShell</span>",
        "                    <span class=\"timeline-tag\">WMI/CIM</span>",
        "                    <span class=\"timeline-tag\">Export PDF</span>",
        "                  </div>",
        "                </div>",
        "                <div class=\"project-dl\">",
        "                  <div class=\"dl-meta\">",
        "                    <span class=\"dl-chip dl-size\"><i class=\"fas fa-file-arrow-down\" aria-hidden=\"true\"></i> 2,7 Mo</span>",
        "                    <span class=\"dl-chip dl-safe\"><i class=\"fas fa-shield-virus\" aria-hidden=\"true\"></i> Analysé antivirus — sans menace</span>",
        "                  </div>",
        "                  <a class=\"dl-btn\" href=\"https://mega.nz/file/REMPLACER-PAR-VOTRE-LIEN-5\" target=\"_blank\" rel=\"noopener noreferrer\" download>",
        "                    <i class=\"fas fa-download\" aria-hidden=\"true\"></i> Télécharger le .exe (MEGA)",
        "                  </a>",
        "                  <span class=\"dl-hint\"><i class=\"fas fa-shield-halved\" aria-hidden=\"true\"></i> Exécutable autonome — testez-le directement, aucune installation</span>",
        "                </div>",
        "              </div>",
        "            </article>",
        "          </div>",
        "",
        "          <div class=\"col-md-6 col-xl-4 reveal\" style=\"transition-delay:.20s\">",
        "            <article class=\"project-card\" aria-labelledby=\"proj6-title\">",
        "              <div class=\"project-img pi-red\">",
        "                <i class=\"fas fa-shield-halved\" aria-hidden=\"true\"></i>",
        "                <img src=\"images/exe-6.png\" alt=\"Capture de l'application SecuHardening.exe en fonctionnement\" loading=\"lazy\" onerror=\"this.style.display='none'\">",
        "                <span class=\"img-overlay\"></span>",
        "                <span class=\"exe-badge\"><i class=\"fas fa-microchip\" aria-hidden=\"true\"></i>.exe</span>",
        "              </div>",
        "              <div class=\"project-body\">",
        "                <p class=\"project-category\">Outil Sécurité → .exe</p>",
        "                <h3 id=\"proj6-title\" class=\"project-title\">SecuHardening.exe — Audit &amp; durcissement</h3>",
        "                <p class=\"project-desc\">Utilitaire <strong>.exe</strong> d'audit et de durcissement basé sur les recommandations CIS Benchmark : application de contrôles de sécurité, configuration du pare-feu Windows, détection des comptes faibles et génération d'un rapport de conformité HTML.</p>",
        "                <div class=\"project-footer\">",
        "                  <div class=\"d-flex gap-1 flex-wrap\">",
        "                    <span class=\"timeline-tag\">PowerShell</span>",
        "                    <span class=\"timeline-tag\">CIS Benchmark</span>",
        "                    <span class=\"timeline-tag\">Sécurité</span>",
        "                  </div>",
        "                </div>",
        "                <div class=\"project-dl\">",
        "                  <div class=\"dl-meta\">",
        "                    <span class=\"dl-chip dl-size\"><i class=\"fas fa-file-arrow-down\" aria-hidden=\"true\"></i> 2,3 Mo</span>",
        "                    <span class=\"dl-chip dl-safe\"><i class=\"fas fa-shield-virus\" aria-hidden=\"true\"></i> Analysé antivirus — sans menace</span>",
        "                  </div>",
        "                  <a class=\"dl-btn\" href=\"https://mega.nz/file/REMPLACER-PAR-VOTRE-LIEN-6\" target=\"_blank\" rel=\"noopener noreferrer\" download>",
        "                    <i class=\"fas fa-download\" aria-hidden=\"true\"></i> Télécharger le .exe (MEGA)",
        "                  </a>",
        "                  <span class=\"dl-hint\"><i class=\"fas fa-shield-halved\" aria-hidden=\"true\"></i> Exécutable autonome — testez-le directement, aucune installation</span>",
        "                </div>",
        "              </div>",
        "            </article>",
        "          </div>",
        "        </div>",
        "      </div>",
        "    </section>",
        "  </main>",
        "",
        "  <script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js\"></script>",
        "",
        "  <script>",
        "    (function () {",
        "      const html        = document.documentElement;",
        "      const themeToggle = document.getElementById('themeToggle');",
        "      const themeIcon   = document.getElementById('themeIcon');",
        "      const themeLabel  = document.getElementById('themeLabel');",
        "      const saved       = localStorage.getItem('theme') || 'dark';",
        "",
        "      function applyTheme(t) {",
        "        html.setAttribute('data-theme', t);",
        "        localStorage.setItem('theme', t);",
        "        themeIcon.className    = t === 'dark' ? 'fas fa-moon' : 'fas fa-sun';",
        "        themeLabel.textContent = t === 'dark' ? 'Mode clair' : 'Mode sombre';",
        "      }",
        "      applyTheme(saved);",
        "      themeToggle.addEventListener('click', function () {",
        "        const cur = html.getAttribute('data-theme');",
        "        applyTheme(cur === 'dark' ? 'light' : 'dark');",
        "        showToast(cur === 'dark' ? '☀️ Mode clair activé' : '🌙 Mode sombre activé');",
        "      });",
        "    })();",
        "",
        "    (function () {",
        "      const nav = document.getElementById('mainNav');",
        "      window.addEventListener('scroll', function () {",
        "        nav.classList.toggle('scrolled', window.scrollY > 60);",
        "      }, { passive: true });",
        "    })();",
        "",
        "    (function () {",
        "      const elems = document.querySelectorAll('.reveal');",
        "      if ('IntersectionObserver' in window) {",
        "        const obs = new IntersectionObserver(function (entries) {",
        "          entries.forEach(function (e) {",
        "            if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }",
        "          });",
        "        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });",
        "        elems.forEach(function (el) { obs.observe(el); });",
        "      } else {",
        "        elems.forEach(function (el) { el.classList.add('visible'); });",
        "      }",
        "    })();",
        "",
        "    (function () {",
        "      const bars = document.querySelectorAll('.skill-bar[data-width]');",
        "      if ('IntersectionObserver' in window) {",
        "        const obs = new IntersectionObserver(function (entries) {",
        "          entries.forEach(function (e) {",
        "            if (e.isIntersecting) { e.target.style.width = e.target.dataset.width + '%'; obs.unobserve(e.target); }",
        "          });",
        "        }, { threshold: 0.3 });",
        "        bars.forEach(function (b) { obs.observe(b); });",
        "      } else {",
        "        bars.forEach(function (b) { b.style.width = b.dataset.width + '%'; });",
        "      }",
        "    })();",
        "",
        "    (function () {",
        "      const counters = document.querySelectorAll('.counter-anim[data-target]');",
        "      let done = false;",
        "      function animCounters() {",
        "        if (done) return;",
        "        if (document.getElementById('hero').getBoundingClientRect().bottom < window.innerHeight * 0.9) {",
        "          done = true;",
        "          counters.forEach(function (el) {",
        "            const target = parseInt(el.dataset.target, 10);",
        "            const start  = performance.now();",
        "            (function tick(now) {",
        "              const p = Math.min((now - start) / 1400, 1);",
        "              el.textContent = Math.round((1 - Math.pow(1 - p, 3)) * target);",
        "              if (p < 1) requestAnimationFrame(tick);",
        "            })(performance.now());",
        "          });",
        "        }",
        "      }",
        "      window.addEventListener('scroll', animCounters, { passive: true });",
        "      animCounters();",
        "    })();",
        "",
        "    function showToast(msg, duration) {",
        "      const toast = document.getElementById('toast');",
        "      toast.textContent = msg;",
        "      toast.classList.add('show');",
        "      clearTimeout(toast._t);",
        "      toast._t = setTimeout(function () { toast.classList.remove('show'); }, duration || 2800);",
        "    }",
        "",
        "    (function () {",
        "      const collapse = document.getElementById('navContent');",
        "      if (!collapse) return;",
        "      document.querySelectorAll('#navContent .nav-link').forEach(function (link) {",
        "        link.addEventListener('click', function () {",
        "          const bs = bootstrap.Collapse.getInstance(collapse);",
        "          if (bs) bs.hide();",
        "        });",
        "      });",
        "    })();",
        "",
        "    (function () {",
        "      const target = document.getElementById('typing-name');",
        "      const cursor = document.querySelector('.typing-cursor');",
        "      if (!target) return;",
        "      const text = 'Lucas Moreau';",
        "      target.textContent = '';",
        "      let i = 0;",
        "      function type() {",
        "        if (i < text.length) {",
        "          target.textContent += text[i++];",
        "          setTimeout(type, 85 + Math.random() * 40);",
        "        } else {",
        "          setTimeout(function () { if (cursor) cursor.style.animation = 'none'; }, 3000);",
        "        }",
        "      }",
        "      setTimeout(type, 500);",
        "    })();",
        "",
        "    (function () {",
        "      const sections = document.querySelectorAll('section[id]');",
        "      const links    = document.querySelectorAll('#navContent .nav-link');",
        "      function setActive() {",
        "        let cur = '';",
        "        sections.forEach(function (s) { if (s.getBoundingClientRect().top <= 90) cur = s.id; });",
        "        links.forEach(function (l) {",
        "          const isActive = l.getAttribute('href') === '#' + cur;",
        "          l.classList.toggle('active', isActive);",
        "          if (isActive) { l.setAttribute('aria-current', 'location'); } else { l.removeAttribute('aria-current'); }",
        "        });",
        "      }",
        "      window.addEventListener('scroll', setActive, { passive: true });",
        "      setActive();",
        "    })();",
        "  </script>",
        "</body>",
        "</html>"
      ]
    },
    config: {
      fileName: 'config.js',
      mimeType: 'text/javascript;charset=utf-8',
      language: 'js',
      lines: [
        '(function () {',
        '  \'use strict\';',
        '  console.log(\'config.js chargé ✔\');',
        '})();'
      ]
    }
  };

  /* Les ajouts seuls, à copier dans le fichier de l'épisode précédent */
  const SNIPPETS = {
    add1: { label: 'l\'ajout n° 1 (CSS des projets)', from: 645, to: 752 },
    projects: { label: 'la section Projets', from: 1337, to: 1557 }
  };

  function getFileText(fileKey) {
    if (SNIPPETS[fileKey]) {
      const snippet = SNIPPETS[fileKey];
      return EPISODE_FILES.index.lines.slice(snippet.from - 1, snippet.to).join('\n') + '\n';
    }
    return EPISODE_FILES[fileKey].lines.join('\n') + '\n';
  }

  function getLabel(fileKey) {
    return SNIPPETS[fileKey] ? SNIPPETS[fileKey].label : EPISODE_FILES[fileKey].fileName;
  }

  function isNewLine(lineNumber) {
    return EPISODE_FILES.index.newLines.indexOf(lineNumber) !== -1;
  }

  function isModifiedLine(lineNumber) {
    return EPISODE_FILES.index.modifiedLines.indexOf(lineNumber) !== -1;
  }

  /* ---------- 2. MÉMORISATION LOCALE ---------- */
  /* Le stockage peut être indisponible (navigation privée…) : la page fonctionne quand même. */

  const STORAGE_PREFIX = 'tssr-ep9-';

  function loadValue(key, fallback) {
    try {
      const raw = window.localStorage.getItem(STORAGE_PREFIX + key);
      return raw === null ? fallback : JSON.parse(raw);
    } catch (error) {
      return fallback;
    }
  }

  function saveValue(key, value) {
    try {
      window.localStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(value));
    } catch (error) {
      /* Stockage indisponible : on ignore, la page reste utilisable. */
    }
  }

  function clearSavedValues() {
    try {
      Object.keys(window.localStorage)
        .filter(function (key) { return key.indexOf(STORAGE_PREFIX) === 0; })
        .forEach(function (key) { window.localStorage.removeItem(key); });
    } catch (error) {
      /* Rien à effacer. */
    }
  }

  const liveRegion = document.getElementById('annonce');

  function announce(message) {
    liveRegion.textContent = '';
    window.setTimeout(function () { liveRegion.textContent = message; }, 50);
  }

  /* ---------- 3. COLORATION SYNTAXIQUE ---------- */

  function escapeHtml(text) {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function wrapToken(className, text) {
    return '<span class="' + className + '">' + escapeHtml(text) + '</span>';
  }

  /* Colore les attributs d'une balise : nom="valeur", nom=valeur ou nom seul. */
  function highlightAttributes(text) {
    let output = '';
    let index = 0;
    while (index < text.length) {
      const rest = text.slice(index);
      let match;
      if ((match = rest.match(/^\s+/))) {
        output += match[0];
      } else if ((match = rest.match(/^\/?>/))) {
        output += wrapToken('tok-punct', match[0]);
      } else if ((match = rest.match(/^([^\s=>"\/]+)(=)("[^"]*"?|[^\s>"]+)?/))) {
        output += wrapToken('tok-attr', match[1]) + wrapToken('tok-punct', match[2]);
        if (match[3]) { output += wrapToken('tok-value', match[3]); }
      } else if ((match = rest.match(/^[^\s=>"\/]+/))) {
        output += wrapToken('tok-attr', match[0]);
      } else {
        match = [rest.charAt(0)];
        output += escapeHtml(match[0]);
      }
      index += match[0].length;
    }
    return output;
  }

  function highlightHtml(text) {
    /* Morceau d'attributs isolé (ex. : lang="fr" ou width=device-width) */
    if (!/</.test(text) && /^\s*[\w:@.-]+=/.test(text)) {
      return highlightAttributes(text);
    }
    let output = '';
    let index = 0;
    while (index < text.length) {
      const rest = text.slice(index);
      let match;
      if ((match = rest.match(/^<!DOCTYPE[^>]*>?/i))) {
        output += wrapToken('tok-doctype', match[0]);
      } else if ((match = rest.match(/^(<\/?)([a-zA-Z][\w-]*)([^>]*)(>?)/))) {
        output += wrapToken('tok-punct', match[1]) + wrapToken('tok-tag', match[2]);
        output += highlightAttributes(match[3]);
        if (match[4]) { output += wrapToken('tok-punct', match[4]); }
      } else if ((match = rest.match(/^\/?>/))) {
        output += wrapToken('tok-punct', match[0]);
      } else if ((match = rest.match(/^&[a-zA-Z#0-9]+;/))) {
        output += wrapToken('tok-entity', match[0]);
      } else if ((match = rest.match(/^[^<&>]+/))) {
        output += escapeHtml(match[0]);
      } else {
        match = [rest.charAt(0)];
        output += escapeHtml(match[0]);
      }
      index += match[0].length;
    }
    return output;
  }

  function highlightJs(text) {
    const keywords = ['function', 'return', 'const', 'let', 'var', 'if', 'else', 'true', 'false', 'null'];
    let output = '';
    let index = 0;
    while (index < text.length) {
      const rest = text.slice(index);
      let match;
      if ((match = rest.match(/^\s+/))) {
        output += match[0];
      } else if ((match = rest.match(/^'[^']*'?/))) {
        output += wrapToken('tok-string', match[0]);
      } else if ((match = rest.match(/^\d+(\.\d+)?/))) {
        output += wrapToken('tok-value', match[0]);
      } else if ((match = rest.match(/^[A-Za-z_$][\w$]*/))) {
        output += keywords.indexOf(match[0]) !== -1 ? wrapToken('tok-keyword', match[0]) : escapeHtml(match[0]);
      } else if ((match = rest.match(/^[(){}\[\];.,=:?|&<>!+*\/-]+/))) {
        output += wrapToken('tok-punct', match[0]);
      } else {
        match = [rest.charAt(0)];
        output += escapeHtml(match[0]);
      }
      index += match[0].length;
    }
    return output;
  }

  /* Coloration du CSS : on avance caractère par caractère en suivant l'état
     « sélecteur » → « propriété » → « valeur ». */
  function guessCssState(line) {
    if (line.indexOf('{') !== -1 || /^\s*}/.test(line)) { return 'selector'; }
    if (/^\s*[-\w]+\s*:/.test(line)) { return 'property'; }
    return 'selector';
  }

  function highlightCss(text, startState) {
    let state = startState || guessCssState(text);
    let output = '';
    let buffer = '';
    const classes = { selector: 'tok-tag', property: 'tok-attr', value: 'tok-value' };

    function flush() {
      if (buffer === '') { return; }
      const trimmed = buffer.trim();
      if (trimmed === '') {
        output += buffer;
      } else {
        const lead = buffer.match(/^\s*/)[0];
        const tail = buffer.match(/\s*$/)[0];
        output += lead + wrapToken(classes[state], trimmed) + tail;
      }
      buffer = '';
    }

    for (let index = 0; index < text.length; index++) {
      const char = text.charAt(index);
      if (char === '{') { flush(); output += wrapToken('tok-punct', char); state = 'property'; }
      else if (char === '}') { flush(); output += wrapToken('tok-punct', char); state = 'selector'; }
      else if (char === ':' && state === 'property') { flush(); output += wrapToken('tok-punct', char); state = 'value'; }
      else if (char === ';' && state === 'value') { flush(); output += wrapToken('tok-punct', char); state = 'property'; }
      else { buffer += char; }
    }
    flush();
    return { html: output, state: state };
  }

  /* Bloc mêlant HTML et CSS : les lignes entre <style> et </style> sont colorées en CSS. */
  function highlightMixed(lines) {
    let insideStyle = false;
    let insideScript = false;
    let cssState = 'selector';
    return lines.map(function (line) {
      if (line.trim() === '</script>') { insideScript = false; return highlightHtml(line); }
      if (insideScript) { return highlightJs(line); }
      if (line.trim() === '<script>') { insideScript = true; return highlightHtml(line); }
      if (/<\/style>/.test(line)) { insideStyle = false; return highlightHtml(line); }
      if (insideStyle) {
        const result = highlightCss(line, cssState);
        cssState = result.state;
        return result.html;
      }
      if (/<style>/.test(line)) { insideStyle = true; cssState = 'selector'; }
      return highlightHtml(line);
    });
  }

  /* Colore tous les petits blocs de code de la page (étapes, fiches…). */
  document.querySelectorAll('code[data-hl]').forEach(function (codeElement) {
    codeElement.innerHTML = codeElement.textContent.split('\n').map(highlightHtml).join('\n');
  });
  document.querySelectorAll('code[data-hl-css]').forEach(function (codeElement) {
    const lines = codeElement.textContent.split('\n');
    let state = guessCssState(lines[0]);
    codeElement.innerHTML = lines.map(function (line) {
      const result = highlightCss(line, state);
      state = result.state;
      return result.html;
    }).join('\n');
  });
  document.querySelectorAll('code[data-hl-mixed]').forEach(function (codeElement) {
    codeElement.innerHTML = highlightMixed(codeElement.textContent.split('\n')).join('\n');
  });
  document.querySelectorAll('code[data-hl-js]').forEach(function (codeElement) {
    codeElement.innerHTML = highlightJs(codeElement.textContent);
  });

  /* ---------- 4. RÉGLAGES D'AFFICHAGE ---------- */

  const root = document.documentElement;
  const themeButton = document.getElementById('btn-theme');
  const contrastButton = document.getElementById('btn-contraste');
  const themeColorMeta = document.querySelector('meta[name="theme-color"]');

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    const isDark = theme === 'dark';
    /* Le bouton affiche toujours l'action qu'il va réaliser. */
    themeButton.querySelector('.tool-icon').textContent = isDark ? '☀️' : '🌙';
    themeButton.querySelector('.tool-text').textContent = isDark ? 'Mode clair' : 'Mode sombre';
    themeButton.setAttribute('aria-label', isDark ? 'Passer en mode clair' : 'Passer en mode sombre');
    themeColorMeta.setAttribute('content', isDark ? '#060d1a' : '#f3f6fb');
  }

  function applyContrast(level) {
    root.setAttribute('data-contrast', level);
    contrastButton.setAttribute('aria-pressed', String(level === 'high'));
  }

  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(loadValue('theme', prefersDark ? 'dark' : 'light'));
  applyContrast(loadValue('contrast', 'normal'));

  themeButton.addEventListener('click', function () {
    const nextTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
    saveValue('theme', nextTheme);
    announce(nextTheme === 'dark' ? 'Mode sombre activé.' : 'Mode clair activé.');
  });

  contrastButton.addEventListener('click', function () {
    const nextLevel = root.getAttribute('data-contrast') === 'high' ? 'normal' : 'high';
    applyContrast(nextLevel);
    saveValue('contrast', nextLevel);
    announce(nextLevel === 'high' ? 'Contraste renforcé activé.' : 'Contraste normal rétabli.');
  });

  /* Taille du texte : on modifie la variable CSS --text-scale. */
  const TEXT_SCALES = [0.9, 1, 1.15, 1.3, 1.5, 1.75, 2];
  const textSizeOutput = document.getElementById('taille-texte');
  let textScaleIndex = TEXT_SCALES.indexOf(loadValue('textScale', 1));
  if (textScaleIndex === -1) { textScaleIndex = 1; }

  function applyTextScale(index) {
    textScaleIndex = Math.max(0, Math.min(TEXT_SCALES.length - 1, index));
    const scale = TEXT_SCALES[textScaleIndex];
    root.style.setProperty('--text-scale', String(scale));
    textSizeOutput.textContent = Math.round(scale * 100) + ' %';
    document.getElementById('btn-texte-moins').disabled = textScaleIndex === 0;
    document.getElementById('btn-texte-plus').disabled = textScaleIndex === TEXT_SCALES.length - 1;
    saveValue('textScale', scale);
    updateToolbarHeight();
  }

  document.getElementById('btn-texte-plus').addEventListener('click', function () { applyTextScale(textScaleIndex + 1); });
  document.getElementById('btn-texte-moins').addEventListener('click', function () { applyTextScale(textScaleIndex - 1); });
  document.getElementById('btn-texte-normal').addEventListener('click', function () { applyTextScale(1); });

  /* La barre d'outils est fixe sur grand écran : on mémorise sa hauteur pour les ancres. */
  const toolbar = document.querySelector('.toolbar');
  const stickyToolbarQuery = window.matchMedia('(min-width: 48em)');

  function updateToolbarHeight() {
    const height = stickyToolbarQuery.matches ? toolbar.offsetHeight : 0;
    root.style.setProperty('--toolbar-h', height + 'px');
  }

  window.addEventListener('resize', updateToolbarHeight);
  applyTextScale(textScaleIndex);

  /* ---------- 5. CODE COMPLET ---------- */

  function renderCodeBlock(fileKey) {
    const file = EPISODE_FILES[fileKey];
    const highlighted = file.language === 'js' ? file.lines.map(highlightJs) : highlightMixed(file.lines);
    const codeElement = document.getElementById('code-' + fileKey);
    codeElement.innerHTML = file.lines.map(function (line, position) {
      const lineNumber = position + 1;
      let newClass = '';
      if (file.newLines && isNewLine(lineNumber)) { newClass = ' is-new'; }
      if (file.modifiedLines && isModifiedLine(lineNumber)) { newClass = ' is-mod'; }
      return '<span class="line' + newClass + '" id="' + fileKey + '-L' + lineNumber + '"><span class="line-content">' +
        (line === '' ? ' ' : highlighted[position]) + '</span></span>';
    }).join('');
  }

  renderCodeBlock('index');
  renderCodeBlock('config');
  document.getElementById('index-line-count').textContent = String(EPISODE_FILES.index.lines.length);

  /* Copie dans le presse-papiers, avec une solution de secours pour les navigateurs anciens. */
  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).catch(function () { return legacyCopy(text); });
    }
    return legacyCopy(text);
  }

  function legacyCopy(text) {
    return new Promise(function (resolve, reject) {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      let copied = false;
      try { copied = document.execCommand('copy'); } catch (error) { copied = false; }
      document.body.removeChild(textarea);
      if (copied) { resolve(); } else { reject(new Error('Copie impossible')); }
    });
  }

  document.querySelectorAll('.btn-copy').forEach(function (button) {
    const originalContent = button.innerHTML;
    let resetTimer = null;
    button.addEventListener('click', function () {
      const fileKey = button.dataset.file;
      copyText(getFileText(fileKey)).then(function () {
        button.textContent = '✓ Code copié !';
        button.classList.add('is-done');
        announce('Le code de ' + getLabel(fileKey) + ' a été copié dans le presse-papiers.');
      }).catch(function () {
        button.textContent = 'Copie impossible : sélectionnez le code';
        announce('La copie automatique a échoué. Sélectionnez le code à la main puis utilisez Contrôle C.');
      }).then(function () {
        window.clearTimeout(resetTimer);
        resetTimer = window.setTimeout(function () {
          button.innerHTML = originalContent;
          button.classList.remove('is-done');
        }, 2500);
      });
    });
  });

  /* Téléchargement : on fabrique le fichier dans le navigateur. */
  document.querySelectorAll('.btn-download').forEach(function (button) {
    button.addEventListener('click', function () {
      const file = EPISODE_FILES[button.dataset.file];
      const blob = new Blob([getFileText(button.dataset.file)], { type: file.mimeType });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = file.fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
      announce('Téléchargement de ' + file.fileName + ' lancé.');
    });
  });

  /* Surligner les lignes ajoutées et modifiées par l'épisode */
  const showNewButton = document.getElementById('btn-show-new');
  showNewButton.addEventListener('click', function () {
    const isOn = showNewButton.getAttribute('aria-pressed') !== 'true';
    showNewButton.setAttribute('aria-pressed', String(isOn));
    document.getElementById('code-index').parentElement.classList.toggle('show-new', isOn);
    announce(isOn ? 'Les lignes ajoutées sont surlignées et marquées d\'un signe plus.' : 'Surlignage des ajouts désactivé.');
  });

  /* Retour à la ligne automatique dans le bloc de code */
  document.querySelectorAll('.btn-wrap').forEach(function (button) {
    button.addEventListener('click', function () {
      const isWrapped = button.getAttribute('aria-pressed') !== 'true';
      button.setAttribute('aria-pressed', String(isWrapped));
      document.querySelectorAll('.code-block').forEach(function (block) {
        block.classList.toggle('is-wrapped', isWrapped);
      });
    });
  });

  /* Onglets index.html / config.js (flèches gauche/droite au clavier) */
  const tabs = Array.prototype.slice.call(document.querySelectorAll('.code-tab'));

  function selectTab(tabToSelect) {
    tabs.forEach(function (tab) {
      const isSelected = tab === tabToSelect;
      tab.setAttribute('aria-selected', String(isSelected));
      tab.tabIndex = isSelected ? 0 : -1;
      document.getElementById(tab.getAttribute('aria-controls')).hidden = !isSelected;
    });
  }

  tabs.forEach(function (tab, position) {
    tab.addEventListener('click', function () { selectTab(tab); });
    tab.addEventListener('keydown', function (event) {
      if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') { return; }
      const step = event.key === 'ArrowRight' ? 1 : -1;
      const nextTab = tabs[(position + step + tabs.length) % tabs.length];
      selectTab(nextTab);
      nextTab.focus();
      event.preventDefault();
    });
  });

  /* ---------- 6. FICHES, ÉTAPES, CORRECTIONS ---------- */

  function setAllFiches(open) {
    document.querySelectorAll('.fiche details').forEach(function (details) { details.open = open; });
    announce(open ? 'Toutes les fiches sont ouvertes.' : 'Toutes les fiches sont fermées.');
  }

  document.getElementById('btn-fiches-ouvrir').addEventListener('click', function () { setAllFiches(true); });
  document.getElementById('btn-fiches-fermer').addEventListener('click', function () { setAllFiches(false); });

  /* Un lien vers #l12 (par exemple) ouvre directement la fiche correspondante. */
  function openTargetedFiche() {
    const hash = window.location.hash;
    if (!/^#[\w-]+$/.test(hash)) { return; }
    const target = document.querySelector(hash + '.fiche details');
    if (target) { target.open = true; }
  }
  window.addEventListener('hashchange', openTargetedFiche);
  openTargetedFiche();

  document.querySelectorAll('.btn-reveal').forEach(function (button) {
    const solution = document.getElementById(button.getAttribute('aria-controls'));
    button.addEventListener('click', function () {
      const willShow = solution.hidden;
      solution.hidden = !willShow;
      button.setAttribute('aria-expanded', String(willShow));
      button.textContent = willShow ? 'Masquer la correction' : 'Afficher la correction';
    });
  });

  /* ---------- 7. CHECKLISTS ET VALIDATION ---------- */

  document.querySelectorAll('[data-checklist]').forEach(function (fieldset) {
    const key = 'checklist-' + fieldset.dataset.checklist;
    const boxes = fieldset.querySelectorAll('input[type="checkbox"]');
    const saved = loadValue(key, []);
    boxes.forEach(function (box, position) {
      box.checked = Boolean(saved[position]);
      box.addEventListener('change', function () {
        saveValue(key, Array.prototype.map.call(boxes, function (item) { return item.checked; }));
      });
    });
  });

  const validationMessage = document.getElementById('validation-message');

  document.getElementById('btn-valider').addEventListener('click', function () {
    const boxes = Array.prototype.slice.call(document.querySelectorAll('#tests-checklist input[type="checkbox"]'));
    const remaining = boxes.filter(function (box) { return !box.checked; });
    validationMessage.classList.remove('is-success', 'is-incomplete');

    if (remaining.length === 0) {
      validationMessage.classList.add('is-success');
      validationMessage.textContent = '🎉 Bravo ! Votre épisode 9 est validé : vos projets prouvent ce que vous savez faire. Vous êtes prêt pour l\'épisode 10.';
      markAction('tests');
    } else {
      validationMessage.classList.add('is-incomplete');
      validationMessage.textContent = 'Presque ! Il reste ' + remaining.length + ' point' + (remaining.length > 1 ? 's' : '') +
        ' à vérifier. Le premier point non coché vient de recevoir le focus. En cas de souci, consultez la partie « Si ça ne fonctionne pas ».';
      remaining[0].focus();
    }
  });

  /* ---------- 8. QCM ---------- */

  const questions = Array.prototype.slice.call(document.querySelectorAll('.question'));
  const scoreOutput = document.getElementById('qcm-score');

  function optionText(question, value) {
    const input = question.querySelector('input[value="' + value + '"]');
    return input ? input.parentElement.querySelector('span').textContent : value;
  }

  function evaluateQuestion(question) {
    const chosen = question.querySelector('input:checked');
    if (!chosen) { return; }
    const answer = question.dataset.answer;
    const isCorrect = chosen.value === answer;
    const feedback = question.querySelector('.feedback');

    question.querySelectorAll('label').forEach(function (label) {
      const input = label.querySelector('input');
      label.classList.toggle('is-correct', input.value === answer);
      label.classList.toggle('is-wrong', input.checked && !isCorrect);
    });

    feedback.innerHTML = '';
    feedback.className = 'feedback ' + (isCorrect ? 'is-correct' : 'is-wrong');

    const title = document.createElement('p');
    title.className = 'feedback-title';
    title.textContent = isCorrect ? '✓ Bonne réponse !' : '✗ Ce n\'est pas la bonne réponse. La bonne réponse est : ' + optionText(question, answer);
    feedback.appendChild(title);

    const why = document.createElement('p');
    why.textContent = 'Pourquoi : ' + feedback.dataset.why;
    feedback.appendChild(why);

    const otherTitle = document.createElement('p');
    otherTitle.className = 'feedback-title';
    otherTitle.textContent = 'Pourquoi les autres réponses sont fausses :';
    feedback.appendChild(otherTitle);

    const list = document.createElement('ul');
    question.querySelectorAll('input').forEach(function (input) {
      if (input.value === answer) { return; }
      const reason = feedback.dataset['wrong' + input.value.toUpperCase()];
      const item = document.createElement('li');
      item.textContent = optionText(question, input.value) + ' — ' + reason;
      list.appendChild(item);
    });
    feedback.appendChild(list);
    feedback.hidden = false;
  }

  function updateScore() {
    const answered = questions.filter(function (question) { return question.querySelector('input:checked'); });
    const correct = answered.filter(function (question) {
      return question.querySelector('input:checked').value === question.dataset.answer;
    });
    if (answered.length < questions.length) {
      scoreOutput.textContent = 'Score : ' + correct.length + ' / ' + questions.length + ' — ' + answered.length + ' question' + (answered.length > 1 ? 's' : '') + ' répondue' + (answered.length > 1 ? 's' : '') + ' sur ' + questions.length + '.';
      return;
    }
    let comment = 'Relisez les fiches des questions manquées, puis recommencez.';
    if (correct.length === questions.length) { comment = 'Parfait, sans faute !'; }
    else if (correct.length >= 7) { comment = 'Très bien ! Relisez les fiches des questions manquées.'; }
    scoreOutput.textContent = 'Score final : ' + correct.length + ' / ' + questions.length + '. ' + comment;
    markAction('qcm');
  }

  questions.forEach(function (question) {
    question.addEventListener('change', function () {
      evaluateQuestion(question);
      updateScore();
    });
  });

  document.getElementById('btn-qcm-reset').addEventListener('click', function () {
    questions.forEach(function (question) {
      question.querySelectorAll('input').forEach(function (input) { input.checked = false; });
      question.querySelectorAll('label').forEach(function (label) { label.classList.remove('is-correct', 'is-wrong'); });
      const feedback = question.querySelector('.feedback');
      feedback.hidden = true;
      feedback.innerHTML = '';
    });
    updateScore();
    questions[0].querySelector('input').focus();
  });

  updateScore();

  /* ---------- 9. PROGRESSION, SOMMAIRE, RETOUR EN HAUT ---------- */

  const sections = Array.prototype.slice.call(document.querySelectorAll('[data-progress]'));
  const progressBar = document.getElementById('progression');
  const progressText = document.getElementById('progression-texte');
  const tocLinks = Array.prototype.slice.call(document.querySelectorAll('.sommaire-liste a'));
  const ACTIONS = ['tests', 'qcm'];

  /* La progression repart de 0 % à chaque ouverture : elle n'est pas mémorisée. */
  let visitedSections = [];
  let completedActions = [];

  /* Les sections visibles à l'ouverture ne comptent pas : une section n'est « consultée »
     qu'après une première action de l'utilisateur (molette, toucher, clavier ou clic). */
  let userHasInteracted = false;
  ['wheel', 'touchstart', 'keydown', 'pointerdown'].forEach(function (eventName) {
    window.addEventListener(eventName, function () { userHasInteracted = true; }, { once: true, passive: true });
  });

  function updateProgress() {
    const done = visitedSections.length + completedActions.length;
    const total = sections.length + ACTIONS.length;
    const percent = Math.round((done / total) * 100);
    progressBar.value = percent;
    progressBar.textContent = percent + ' %';
    progressText.textContent = percent + ' %';
    tocLinks.forEach(function (link) {
      link.classList.toggle('vue', visitedSections.indexOf(link.getAttribute('href').slice(1)) !== -1);
    });
  }

  function markVisited(sectionId) {
    if (!userHasInteracted || visitedSections.indexOf(sectionId) !== -1) { return; }
    visitedSections.push(sectionId);
    updateProgress();
  }

  function markAction(actionName) {
    if (completedActions.indexOf(actionName) !== -1) { return; }
    completedActions.push(actionName);
    updateProgress();
  }

  if ('IntersectionObserver' in window) {
    /* Une section est « consultée » quand elle occupe une bonne partie de l'écran. */
    const visitObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        const visibleEnough = entry.intersectionRatio >= 0.35 ||
          entry.intersectionRect.height >= window.innerHeight * 0.5;
        if (entry.isIntersecting && visibleEnough) { markVisited(entry.target.id); }
      });
    }, { threshold: [0, 0.2, 0.35, 0.6, 1] });

    /* La section au centre de l'écran est signalée dans le sommaire. */
    const currentObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) { return; }
        tocLinks.forEach(function (link) {
          if (link.getAttribute('href') === '#' + entry.target.id) {
            link.setAttribute('aria-current', 'true');
          } else {
            link.removeAttribute('aria-current');
          }
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    sections.forEach(function (section) {
      visitObserver.observe(section);
      currentObserver.observe(section);
    });
  } else {
    userHasInteracted = true;
    sections.forEach(function (section) { markVisited(section.id); });
  }

  /* Sur petit écran, le sommaire est replié au départ pour laisser la place au contenu,
     et il se replie après un clic sur un lien. */
  const sommaireDetails = document.getElementById('sommaire-details');
  const wideLayoutQuery = window.matchMedia('(min-width: 72em)');
  sommaireDetails.open = wideLayoutQuery.matches;

  tocLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (!wideLayoutQuery.matches) { sommaireDetails.open = false; }
    });
  });

  document.getElementById('btn-reset').addEventListener('click', function () {
    if (!window.confirm('Effacer votre progression, vos coches et vos réglages d\'affichage sur cet ordinateur ?')) { return; }
    clearSavedValues();
    visitedSections = [];
    completedActions = [];
    document.querySelectorAll('[data-checklist] input[type="checkbox"]').forEach(function (box) { box.checked = false; });
    validationMessage.textContent = '';
    validationMessage.classList.remove('is-success', 'is-incomplete');
    updateProgress();
    announce('Votre progression a été réinitialisée.');
  });

  updateProgress();

  /* Bouton « retour en haut » */
  const backToTopButton = document.getElementById('btn-haut');
  const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

  window.addEventListener('scroll', function () {
    backToTopButton.hidden = window.scrollY < 600;
  }, { passive: true });

  backToTopButton.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: reducedMotionQuery.matches ? 'auto' : 'smooth' });
    const pageTitle = document.getElementById('titre-episode');
    pageTitle.setAttribute('tabindex', '-1');
    pageTitle.focus({ preventScroll: true });
  });
})();
