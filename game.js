'use strict';

// ─── SCENES ─────────────────────────────────────────────────────────────────
const SCENES = {

  ankunft: {
    location: 'JFK Airport, New York',
    question: 'Ankunft nach 11h Economy. Anstoß in 4 Stunden. Kein ÖPNV. Wie kommt ihr ins Stadion?',
    image: 'images/ankunft.jpg',
    choices: [
      {
        label: 'A',
        text: 'Uber teilen – $90 p.P.',
        consequence: 'Kommt nach 45 Min. Fahrer fragt, ob Oktoberfest wirklich "all day free beer" ist.',
        next: 'stadion',
        delta: 10,
      },
      {
        label: 'B',
        text: 'Bus nehmen – Geld ist Geld',
        consequence: '3 Stunden, 2 Umstiege, falsche Haltestelle. Ihr kommt in der 38. Minute an.',
        next: 'stadion_verspaetet',
        delta: 25,
      },
      {
        label: 'C',
        text: 'Taxi für $250 – keine Nerven mehr',
        consequence: 'Fahrer hört Country in Schmerzlautstärke. Sein Opa war "ein Viertel Deutsch".',
        next: 'stadion',
        delta: 5,
      },
    ],
    lyric: '"Diese WM hat keine Seele..."',
  },

  stadion: {
    location: 'MetLife Stadium, New Jersey',
    question: '82.000 Plätze, 18°C Klimaanlage, draußen 36°C. Ohio-Fan dreht sich zu euch: "You know Oktoberfest?"',
    image: 'images/stadion.jpg',
    choices: [
      {
        label: 'A',
        text: 'Freundlich erklären, dass ihr aus München kommt',
        consequence: 'Er fragt, ob ihr ein Dirndl besitzt.',
        next: 'bier',
        delta: 8,
      },
      {
        label: 'B',
        text: 'Gespräch höflich beenden',
        consequence: 'Er dreht sich zu den Spaniern: "Is Barcelona in Italy?"',
        next: 'bier',
        delta: 4,
      },
      {
        label: 'C',
        text: '"Nicht alle Deutschen sind gleich."',
        consequence: '"But do you guys all like Rammstein though?"',
        next: 'bier',
        delta: 12,
      },
    ],
    lyric: '"Riesige, seelenlose Stadien..."',
  },

  stadion_verspaetet: {
    location: 'MetLife Stadium – 38. Minute',
    question: 'Deutschland steht 0:3. Ordner blockiert euren Eingang. Kein Einlass während des Spiels.',
    image: 'images/stadion_verspaetet.jpg',
    choices: [
      {
        label: 'A',
        text: 'Geduldig bis Halbzeit warten',
        consequence: 'Neben euch kaut jemand 25 Min. laut Chips und erklärt euch Abseits falsch.',
        next: 'bier',
        delta: 18,
      },
      {
        label: 'B',
        text: 'Ordner mit $20 überreden',
        consequence: 'Er nimmt das Geld. Sagt dann: "No can do, buddy." Behält das Geld.',
        next: 'bier',
        delta: 28,
      },
      {
        label: 'C',
        text: 'Auf Deutsch laut schimpfen',
        consequence: 'Keiner versteht euch. Drei Leute filmen für TikTok. 40k Views bis morgen.',
        next: 'bier',
        delta: 15,
      },
    ],
    lyric: '"Öffentliche Verkehrsmittel existieren nicht..."',
  },

  bier: {
    location: 'Stadion Bier-Stand',
    question: 'BUD LIGHT $18. Der Becher: Kindergartengröße. Was bestellt ihr?',
    image: 'images/bier.jpg',
    choices: [
      {
        label: 'A',
        text: '$18 Bud Light – in Gottes Namen',
        consequence: 'Schmeckt wie Wasser mit einem Hauch Traurigkeit. Ihr trinkt ihn komplett.',
        next: 'essen',
        delta: 20,
      },
      {
        label: 'B',
        text: '$23 Craft IPA – "wenigstens gut"',
        consequence: '"Texas Sunset IPA" schmeckt nach Grapefruit und gescheitertem Startup.',
        next: 'essen',
        delta: 15,
      },
      {
        label: 'C',
        text: 'Kein Bier, empört abwenden',
        consequence: 'Nüchtern, umgeben von Bierdunst. Das ist die schlimmste Option.',
        next: 'essen',
        delta: 5,
      },
    ],
    lyric: '"Amerikanisches Pisswasser-Bier..."',
  },

  essen: {
    location: 'Stadion Food Court',
    question: 'Hunger. Das Angebot: "AUTHENTIC GERMAN BRATWURST $17" (Zutaten: Corn Filler, Artificial Flavoring). Was esst ihr?',
    image: 'images/essen.jpg',
    choices: [
      {
        label: 'A',
        text: 'Hot Dog $15 – der sichere Fehler',
        consequence: 'Er ist okay. Das ist das Traurigste daran.',
        next: 'kommentator',
        delta: 10,
      },
      {
        label: 'B',
        text: '"Authentic German Bratwurst" $17',
        consequence: 'Schmeckt als hätte Bockwurst ein Kind mit Kaugummi bekommen.',
        next: 'kommentator',
        delta: 26,
      },
      {
        label: 'C',
        text: 'Freedom Burger im Stadion-McDonald\'s',
        consequence: 'Plastikbehälter. Keine Mayonnaise. Die Pommes heißen "Freedom Fries".',
        next: 'kommentator',
        delta: 14,
      },
    ],
    lyric: '"Drive-in Essen schmeckt nach nichts hier..."',
  },

  kommentator: {
    location: 'Euer Platz – 2. Halbzeit',
    question: 'Deutschland trifft. Kommentator auf der Leinwand: "GOAL POINT! That\'s like the soccer version of a TOUCHDOWN!" Wie reagiert ihr?',
    image: 'images/kommentator.jpg',
    choices: [
      {
        label: 'A',
        text: 'Tief durchatmen, schweigen',
        consequence: 'Ihr überlebt. Innerlich stirbt etwas.',
        next: 'praesident',
        delta: 5,
      },
      {
        label: 'B',
        text: 'Dem Nachbarn erklären was ein Tor ist',
        consequence: '"So it\'s kind of like a home run?" Er meint es ernst.',
        next: 'praesident',
        delta: 15,
      },
      {
        label: 'C',
        text: 'Auf Twitter schimpfen',
        consequence: 'Geht viral. Zeitung titelt: "Angry German Soccer Purists Ruin World Cup Spirit."',
        next: 'praesident',
        delta: 22,
      },
    ],
    lyric: '"Obwohl sie Fußball nicht kapieren..."',
  },

  praesident: {
    location: 'MetLife Stadium – Halbzeitshow',
    question: 'Alle Bildschirme gleichzeitig: Präsident T. "This is the GREATEST World Cup in the history of the UNIVERSE!" Was tut ihr?',
    image: 'images/praesident.jpg',
    choices: [
      {
        label: 'A',
        text: 'Mitklatschen – alle klatschen',
        consequence: 'Ihr klatscht. Ihr hasst euch. Ihr klatscht weiter.',
        next: 'finale',
        delta: 25,
      },
      {
        label: 'B',
        text: 'Demonstrativ sitzen bleiben',
        consequence: 'Sicherheitsmann gibt euch einen langen Blick. Ihr klatscht doch.',
        next: 'finale',
        delta: 14,
      },
      {
        label: 'C',
        text: 'Auf Toilette flüchten bis es vorbei ist',
        consequence: '20 Min. Warteschlange. Als ihr zurückkommt, läuft die Rede noch.',
        next: 'finale',
        delta: 18,
      },
    ],
    lyric: '"Doch Präsident T gibt weiter Befehle..."',
  },

  finale: {
    location: 'Nach dem Abpfiff – 22:45 Uhr',
    question: '70.000 Menschen raus. Uber: 4× Preis, $185 p.P., 78 Min. Wartezeit. Kein Bus mehr. Was jetzt?',
    image: 'images/finale.jpg',
    choices: [
      {
        label: 'A',
        text: '$185 Uber – Würde ist egal',
        consequence: 'Fahrer hört Country-Nonstop: "Are you the soccer guys from Europe?"',
        next: 'end',
        delta: 10,
      },
      {
        label: 'B',
        text: 'Im Stadion warten bis Surge weg ist',
        consequence: 'Security findet euch um 2:30 Uhr. Das Stadion schloss um 1. Uber jetzt $220.',
        next: 'end',
        delta: 32,
      },
      {
        label: 'C',
        text: 'Zu Fuß – 9 km, wie schwer kann es sein',
        consequence: 'Nach 600m endet der Bürgersteig. Es gibt keinen Bürgersteig. Das ist kein Bug.',
        next: 'end',
        delta: 22,
      },
    ],
    lyric: '"Das ist keine WM mehr, das ist ein AlpTraum..."',
  },
};

// ─── ENDINGS ─────────────────────────────────────────────────────────────────
const ENDINGS = [
  {
    max: 35,
    icon: '🏆',
    title: 'ÜBERRASCHEND ÜBERLEBT',
    msg: 'Ihr habt den amerikanischen Alptraum mit unerwarteter Fassung getragen. Entweder echte Stoiker – oder ihr habt geschummelt.',
  },
  {
    max: 60,
    icon: '😬',
    title: 'MITTELGROSSE KATASTROPHE',
    msg: 'Teuer, laut, kulturell fragwürdig. Genau so wie erwartet. Ihr fahrt nicht wieder hin.',
  },
  {
    max: 80,
    icon: '😱',
    title: 'SCHWERER ALPTRAUM',
    msg: 'Diese WM verfolgt euch in Träumen. Nicht die gute Art. Ihr hört "GOAL POINT!" wenn ihr einschlafen wollt.',
  },
  {
    max: 100,
    icon: '💀',
    title: 'VOLLSTÄNDIGER ALPTRAUM',
    msg: 'Glückwunsch – die schlimmstmögliche WM-Erfahrung, komplett abgeschlossen. Statistisch fast unmöglich.',
  },
];

// ─── STATE ───────────────────────────────────────────────────────────────────
let state = { score: 0, pendingNext: null };

const $ = id => document.getElementById(id);

function switchScreen(from, to) {
  $(from).classList.remove('active');
  $(to).classList.add('active');
}

// ─── SCORE ───────────────────────────────────────────────────────────────────
function addScore(delta) {
  state.score = Math.min(100, state.score + delta);
  renderScore();
}

function renderScore() {
  const s = state.score;
  $('score-num').textContent = s;
  const fill = $('score-fill');
  fill.style.width = s + '%';
  fill.className = 'score-fill' + (s >= 65 ? ' high' : s >= 35 ? ' medium' : '');
}

// ─── SCENE ───────────────────────────────────────────────────────────────────
function loadScene(id) {
  const sc = SCENES[id];
  if (!sc) { endGame(); return; }

  $('location-text').textContent = sc.location;
  $('scene-question').textContent = sc.question;
  $('lyric-bar').textContent = sc.lyric;

  // Image
  const img = $('scene-img');
  img.src = sc.image;
  img.alt = sc.location;

  // Choices
  const choicesEl = $('choices');
  choicesEl.innerHTML = '';
  sc.choices.forEach(ch => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.dataset.label = ch.label;
    btn.textContent = ch.text;
    btn.addEventListener('click', () => pick(btn, ch));
    choicesEl.appendChild(btn);
  });

  $('consequence').classList.add('hidden');
  $('consequence').textContent = '';
  $('next-btn').classList.add('hidden');
  $('next-btn').textContent = 'WEITER →';

  const card = $('scene-card');
  card.style.animation = 'none';
  card.offsetHeight;
  card.style.animation = 'fadeUp 0.4s ease both';
}

function pick(btn, choice) {
  document.querySelectorAll('.choice-btn').forEach(b => {
    b.disabled = true;
    if (b === btn) b.classList.add('selected');
  });

  addScore(choice.delta);

  $('consequence').textContent = choice.consequence;
  $('consequence').classList.remove('hidden');

  state.pendingNext = choice.next;
  if (choice.next === 'end') $('next-btn').textContent = 'ZUM FAZIT →';
  $('next-btn').classList.remove('hidden');
}

// ─── END ─────────────────────────────────────────────────────────────────────
function endGame() {
  switchScreen('game-screen', 'end-screen');

  const s = state.score;
  const ending = ENDINGS.find(e => s <= e.max) || ENDINGS[ENDINGS.length - 1];

  $('end-icon').textContent = ending.icon;
  $('end-title').textContent = ending.title;
  $('end-score').textContent = s;
  $('end-msg').textContent = ending.msg;
}

function restartGame() {
  state = { score: 0, pendingNext: null };
  renderScore();
  switchScreen('end-screen', 'game-screen');
  loadScene('ankunft');
}

// ─── BOOT ────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  $('start-btn').addEventListener('click', () => {
    switchScreen('intro-screen', 'game-screen');
    loadScene('ankunft');
  });

  $('next-btn').addEventListener('click', () => {
    if (state.pendingNext === 'end') endGame();
    else if (state.pendingNext) loadScene(state.pendingNext);
  });

  $('restart-btn').addEventListener('click', restartGame);
});
