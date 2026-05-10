'use strict';

// ─── SCENES ─────────────────────────────────────────────────────────────────
const SCENES = {

  ankunft: {
    location: 'JFK Airport, New York – 16:30 Uhr',
    situation:
      'Euer Flieger landet in JFK nach 11 Stunden in der Economy. Das Spiel ist in 4 Stunden im MetLife Stadium, New Jersey. Ein Taxi kostet $200. Eine S-Bahn zum Stadion? Existiert nicht. Der nächste Bus fährt in 90 Minuten und braucht 3 Stunden.',
    flavor_text: '"Welcome to America" – der erste Satz den ihr hört, kommt vom Taxifahrer der $50 Extragebühr für euer Gepäck verlangt.',
    choices: [
      {
        label: 'A',
        text: 'Uber teilen, $90 pro Person',
        consequence: 'Das Uber kommt nach 45 Minuten. Der Fahrer fragt, ob ihr den Oktoberfest kennt und ob es wahr ist dass Deutsche kein Deodorant benutzen.',
        next: 'stadion',
        delta: 10,
      },
      {
        label: 'B',
        text: 'Den Bus nehmen – Geld ist Geld',
        consequence: '3 Stunden, 2 Umstiege, ein falscher Ausstieg. Ihr betretet das Stadion in der 38. Minute. Deutschland steht 0:2.',
        next: 'stadion_verspaetet',
        delta: 25,
      },
      {
        label: 'C',
        text: 'Taxi für $250, ihr habt keine Nerven mehr',
        consequence: 'Der Fahrer hört Country-Musik in Schmerzlautstärke und erklärt, dass er "a quarter German" ist. Sein Opa war aus "the Bavaria part of Germany".',
        next: 'stadion',
        delta: 5,
      },
    ],
    lyric: '"Diese WM hat keine Seele..."',
  },

  stadion: {
    location: 'MetLife Stadium, New Jersey',
    situation:
      'Ihr betretet das Stadion. 82.000 Plätze, alle klimatisiert auf 18 Grad obwohl draußen 36 Grad sind. Die Hälfte der Fans trägt Trikots von Teams, die heute gar nicht spielen. Ein Mann aus Ohio dreht sich zu euch: "So you guys are from Germany? Do you know the Oktoberfest?"',
    flavor_text: 'Das Stadion riecht nach Popcorn, Klimaanlage und Enttäuschung.',
    choices: [
      {
        label: 'A',
        text: 'Freundlich erklären, dass ihr aus München kommt',
        consequence: 'Er erzählt, sein Opa ist "ein Viertel Deutsch" und fragt ob ihr ein Dirndl besitzt.',
        next: 'bier',
        delta: 8,
      },
      {
        label: 'B',
        text: 'Das Gespräch höflich beenden',
        consequence: 'Er dreht sich zu den Spaniern nebenan und fragt: "Is Barcelona in Italy?"',
        next: 'bier',
        delta: 4,
      },
      {
        label: 'C',
        text: 'Erklären, dass nicht alle Deutschen gleich sind',
        consequence: 'Er nickt verständnisvoll und fragt: "But do you guys all like Rammstein though?"',
        next: 'bier',
        delta: 12,
      },
    ],
    lyric: '"Riesige, seelenlose Stadien..."',
  },

  stadion_verspaetet: {
    location: 'MetLife Stadium, New Jersey – 38. Minute',
    situation:
      'Ihr stolpert in das Stadion. Deutschland steht 0:2. Ordner blockieren euren Weg: kein Einlass während laufendem Spiel. Ihr steht im Korridor neben einem Bier-Stand. Deutschland schießt jetzt 0:3.',
    flavor_text: '"Öffentliche Verkehrsmittel existieren nicht in diesem Land."',
    choices: [
      {
        label: 'A',
        text: 'Geduldig bis zur Halbzeit warten',
        consequence: 'Ihr wartet 25 Minuten neben einem Mann der laut Chips kaut. Er erklärt euch die Offsideregel falsch.',
        next: 'bier',
        delta: 18,
      },
      {
        label: 'B',
        text: 'Den Ordner mit $20 zu überreden versuchen',
        consequence: 'Er nimmt das Geld. Dann sagt er: "No can do, buddy." Er behält das Geld.',
        next: 'bier',
        delta: 28,
      },
      {
        label: 'C',
        text: 'Auf Deutsch laut schimpfen',
        consequence: 'Keiner versteht euch, aber drei Leute filmen es für TikTok. Am nächsten Tag habt ihr 40.000 Views.',
        next: 'bier',
        delta: 15,
      },
    ],
    lyric: '"Öffentliche Verkehrsmittel existieren nicht..."',
  },

  bier: {
    location: 'Stadion Bier-Stand – Süd-Korridor',
    situation:
      'Das Schild leuchtet: "BUD LIGHT $18 · MILLER LITE $18 · CRAFT IPA $23". Der Becher ist kleiner als eine deutsche Kindersaftglas. Der Mann vor euch bestellt fünf und bezahlt mit schwarzer Kreditkarte ohne Zucken. Der Barkeeper fragt ob ihr ein "Soccer Fan from Europe" seid und ob Bier in Deutschland wirklich "like, everywhere, all day" frei verfügbar ist.',
    flavor_text: '"Amerikanisches Pisswasser-Bier..."',
    choices: [
      {
        label: 'A',
        text: '$18 Bud Light kaufen und tapfer schlucken',
        consequence: 'Es schmeckt wie kaltes Wasser mit einem Hauch Traurigkeit. Ihr trinkt es trotzdem, komplett.',
        next: 'essen',
        delta: 20,
      },
      {
        label: 'B',
        text: '$23 Craft IPA kaufen – "wenigstens gut"',
        consequence: 'Es heißt "Texas Sunset IPA" und schmeckt nach Grapefruit, Enttäuschung und einem Startup der pleite gegangen ist.',
        next: 'essen',
        delta: 15,
      },
      {
        label: 'C',
        text: 'Empört abwenden, kein Bier kaufen',
        consequence: 'Ihr seid nüchtern und umgeben von Bierduft. Das ist die schlimmste Option.',
        next: 'essen',
        delta: 5,
      },
    ],
    lyric: '"Amerikanisches Pisswasser-Bier..."',
  },

  essen: {
    location: 'Stadion Food Court',
    situation:
      'Hunger. Das Angebot: "Hot Dog $15", "Nachos mit Käse-Sauce $14", "AUTHENTIC GERMAN BRATWURST $17". Ihr lest die Zutaten der Bratwurst: Pork & Corn Filler, Artificial Bratwurst Flavoring, American Spice Blend. Daneben: ein Drive-in Fast-Food-Anhänger einer bekannten Kette, direkt im Stadion aufgebaut. Der Slogan: "Taste the Freedom."',
    flavor_text: '"Drive-in Essen schmeckt nach nichts hier..."',
    choices: [
      {
        label: 'A',
        text: 'Hot Dog für $15, der klassische Fehler',
        consequence: 'Er ist okay. Das ist das Traurigste daran – dass er okay ist.',
        next: 'kommentator',
        delta: 10,
      },
      {
        label: 'B',
        text: '"Authentic German Bratwurst" bestellen',
        consequence: 'Sie schmeckt als hätte Bockwurst ein Kind mit Kaugummi bekommen. Ihr weint lautlos.',
        next: 'kommentator',
        delta: 26,
      },
      {
        label: 'C',
        text: 'Freedom Burger im Stadion-McDonald\'s',
        consequence: 'Er kommt in einem Plastikbehälter. Die Pommes heißen "Freedom Fries". Es gibt keine Mayonnaise.',
        next: 'kommentator',
        delta: 14,
      },
    ],
    lyric: '"Drive-in Essen schmeckt nach nichts hier..."',
  },

  kommentator: {
    location: 'Euer Platz – 2. Halbzeit',
    situation:
      'Deutschland schießt ein Tor. Jubel. Dann die Leinwand: der amerikanische TV-Kommentator schreit: "AND MÜLLER SCORES! That\'s like the soccer version of a TOUCHDOWN! Germany just got themselves a GOAL POINT, folks!" Neben euch hält ein Mann aus Ohio ein handgemachtes Schild: "GO SOCCER". Er fragt euch, wer gerade spielt.',
    flavor_text: '"Obwohl sie Fußball nicht kapieren..."',
    choices: [
      {
        label: 'A',
        text: 'Tief durchatmen und schweigen',
        consequence: 'Ihr überlebt diesen Moment. Knapp. Innerlich stirbt etwas.',
        next: 'praesident',
        delta: 5,
      },
      {
        label: 'B',
        text: 'Dem Nachbarn erklären was ein Tor ist',
        consequence: 'Er hört aufmerksam zu. Dann fragt er: "So it\'s kind of like a home run?" Ihr erklärt weiter. "Like a basket?" Er meint es ernst.',
        next: 'praesident',
        delta: 15,
      },
      {
        label: 'C',
        text: 'Auf Twitter über den Kommentator schimpfen',
        consequence: 'Euer Tweet geht viral. Eine amerikanische Zeitung titelt: "Angry German Soccer Purists Ruin World Cup Spirit." Mit Foto.',
        next: 'praesident',
        delta: 22,
      },
    ],
    lyric: '"Obwohl sie Fußball nicht kapieren..."',
  },

  praesident: {
    location: 'MetLife Stadium – Halbzeitshow',
    situation:
      'Dramatische Musik. Alle Bildschirme gleichzeitig: Ein goldener Rahmen, ein bekanntes Gesicht. Eine Stimme: "Ladies and gentlemen – PRÄSIDENT X!" Applaus. "This is officially the GREATEST World Cup in the history of the UNIVERSE. Maybe even better than the Super Bowl! Nobody does World Cups better than us, believe me!" Stehende Ovationen. Hälfte des Stadions jubelt. Die andere Hälfte filmt.',
    flavor_text: '"Doch Präsident X gibt weiter Befehle..."',
    choices: [
      {
        label: 'A',
        text: 'Mitklatschen – alle anderen klatschen auch',
        consequence: 'Ihr klatscht. Ihr hasst euch dafür. Ihr klatscht trotzdem weiter. Klassische Peer Pressure.',
        next: 'finale',
        delta: 25,
      },
      {
        label: 'B',
        text: 'Demonstrativ sitzen bleiben',
        consequence: 'Ein Sicherheitsmann gibt euch einen sehr langen Blick. Ihr klatscht doch. Mit einem Lächeln das sagt: "Alles in Ordnung hier."',
        next: 'finale',
        delta: 14,
      },
      {
        label: 'C',
        text: 'Auf die Toilette flüchten bis es vorbei ist',
        consequence: 'Die Toiletten sind voll. 20 Minuten Wartezeit. Als ihr zurückkommt, läuft die Rede noch.',
        next: 'finale',
        delta: 18,
      },
    ],
    lyric: '"Das ist keine WM mehr, das ist ein AlpTraum..."',
  },

  finale: {
    location: 'Nach dem Abpfiff – 22:45 Uhr',
    situation:
      'Das Spiel ist vorbei. Ihr wollt nach Hause. Die Uber-App zeigt: 4× Surge Pricing, $185 pro Person, 72 Minuten Wartezeit. Ein Bus fährt nicht mehr. Das nächste Taxi ist weg. 70.000 Menschen verlassen gleichzeitig das Stadion. Es gibt keinen Plan B.',
    flavor_text: '"Das ist keine WM mehr, das ist ein Alptraum."',
    choices: [
      {
        label: 'A',
        text: '$185 Uber bezahlen, Würde ist egal',
        consequence: 'Der Fahrer hört Nonstop-Country und erzählt, sein Lieblingsverein ist "the soccer team from, uh, Manchester... City? Village?"',
        next: 'end',
        delta: 10,
      },
      {
        label: 'B',
        text: 'Im Stadion übernachten bis der Surge weg ist',
        consequence: 'Sicherheitsdienst findet euch um 2:30 Uhr morgens. Die Bude schloss um 1. Uber: jetzt $220.',
        next: 'end',
        delta: 32,
      },
      {
        label: 'C',
        text: 'Zu Fuß zum Hotel – 9 km, wie schwer kann es sein',
        consequence: 'Nach 600 Metern endet der Bürgersteig. Es gibt keinen Bürgersteig. Das ist kein Bug, das ist Amerika.',
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
    msg: 'Ihr habt den amerikanischen Alptraum mit unerwarteter Fassung getragen. Entweder seid ihr echte Stoiker – oder ihr habt geschummelt.',
  },
  {
    max: 60,
    icon: '😬',
    title: 'MITTELGROSSE KATASTROPHE',
    msg: 'Die WM war ungefähr so, wie ihr es erwartet habt: teuer, laut, und kulturell fragwürdig. Ihr werdet nicht zurückfahren.',
  },
  {
    max: 80,
    icon: '😱',
    title: 'SCHWERER ALPTRAUM',
    msg: 'Diese WM wird euch in Träumen verfolgen. Nicht die gute Art von Träumen. Ihr hört "Go Soccer!" in eurem Kopf wenn ihr schlafen wollt.',
  },
  {
    max: 100,
    icon: '💀',
    title: 'VOLLSTÄNDIGER ALPTRAUM',
    msg: 'Herzlichen Glückwunsch – ihr habt die schlimmstmögliche WM-Erfahrung vollständig abgeschlossen. Das ist statistisch fast unmöglich. Respekt.',
  },
];

// ─── STATE ───────────────────────────────────────────────────────────────────
let state = { score: 0, pendingNext: null };

// ─── DOM ─────────────────────────────────────────────────────────────────────
const $ = id => document.getElementById(id);

function show(id) { $(id).classList.remove('hidden'); $(id).classList.add('active'); }
function hide(id) { $(id).classList.remove('active'); }

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
  $('situation').textContent = sc.situation;
  $('flavor').textContent = sc.flavor_text;
  $('lyric-bar').textContent = sc.lyric;

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

  // Animate card
  const card = $('scene-card');
  card.style.animation = 'none';
  card.offsetHeight; // reflow
  card.style.animation = 'fadeUp 0.4s ease both';
}

function pick(btn, choice) {
  // Disable all choices
  document.querySelectorAll('.choice-btn').forEach(b => {
    b.disabled = true;
    if (b === btn) b.classList.add('selected');
  });

  addScore(choice.delta);

  $('consequence').textContent = choice.consequence;
  $('consequence').classList.remove('hidden');

  state.pendingNext = choice.next;

  if (choice.next === 'end') {
    $('next-btn').textContent = 'ZUM FAZIT →';
  }
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

// ─── BOOT ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  $('start-btn').addEventListener('click', () => {
    switchScreen('intro-screen', 'game-screen');
    loadScene('ankunft');
  });

  $('next-btn').addEventListener('click', () => {
    if (state.pendingNext === 'end') {
      endGame();
    } else if (state.pendingNext) {
      loadScene(state.pendingNext);
    }
  });

  $('restart-btn').addEventListener('click', restartGame);
});
