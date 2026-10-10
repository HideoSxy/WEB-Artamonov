
const LEVELS = [
  { name: 'начальный', gen: genArithmetic },
  { name: 'средний', gen: genMid },
  { name: 'продвинутый', gen: genPro },
];


let game = { levelIndex: 0, correct: 0, wrong: 0, questions: [], qIndex: 0 };

function rnd(a, b) { return Math.floor(Math.random() * (b - a + 1)) + a; }
function pick() {
  const list = Array.prototype.slice.call(arguments);
  return list[rnd(0, list.length - 1)];
}


function genArithmetic() {
  const a = rnd(2, 20), b = rnd(2, 20), o = pick('+', '-', '*');
  let ans;
  if (o === '+') ans = a + b;
  else if (o === '-') ans = a - b;
  else ans = a * b;
  return { q: a + ' ' + o + ' ' + b, a: ans, type: 'number' };
}


function genMid() {
  const a = rnd(2, 20), b = rnd(2, 20), o = pick('+', '-');
  const left = o === '+' ? a + b : a - b;
  const c = rnd(1, 40);
  const rel = left < c ? '<' : left > c ? '>' : '=';
  return { q: left + ' ___ ' + c, a: rel, type: 'compare' };
}


function genPro() {
  if (Math.random() < 0.5) {
    const b1 = Math.random() < 0.5, b2 = Math.random() < 0.5;
    const o = pick('&&', '||');
    const ans = o === '&&' ? b1 && b2 : b1 || b2;
    return { q: b1 + ' ' + o + ' ' + b2, a: ans, type: 'logical' };
  }
  const a = rnd(1, 15), b = rnd(1, 15), o = pick('&', '|', '^', '<<', '>>');
  let ans;
  if (o === '&') ans = a & b;
  else if (o === '|') ans = a | b;
  else if (o === '^') ans = a ^ b;
  else if (o === '<<') ans = a << (b % 4 + 1);
  else ans = a >> (b % 4 + 1);
  return { q: a + ' ' + o + ' ' + b, a: ans, type: 'number' };
}


function makeLevel(gen) {
  const result = [];
  while (result.length < 10) {
    const item = gen();
    if (!result.some(x => x.q === item.q)) result.push(item);
  }
  return result;
}

function startLevel() {
  const lvl = LEVELS[game.levelIndex];
  game.questions = makeLevel(lvl.gen);
  game.qIndex = 0;
  document.getElementById('level').textContent = lvl.name;
  showQuestion();
}

function showQuestion() {
  document.getElementById('correct').textContent = 'Верно: ' + game.correct;
  document.getElementById('wrong').textContent = 'Неверно: ' + game.wrong;
  const q = game.questions[game.qIndex];
  document.getElementById('qnum').textContent = 'Вопрос ' + (game.qIndex + 1) + ' из 10';
  document.getElementById('question-area').innerHTML = '<p class="q-text">' + q.q + '</p>';

  const controls = document.getElementById('controls');
  controls.innerHTML = '';
  if (q.type === 'compare') {
    for (const s of ['<', '>', '=']) {
      const btn = document.createElement('button');
      btn.textContent = s;
      btn.onclick = () => answer(s);
      controls.appendChild(btn);
    }
  } else if (q.type === 'logical') {
    for (const v of ['true', 'false']) {
      const btn = document.createElement('button');
      btn.textContent = v;
      btn.onclick = () => answer(v === 'true');
      controls.appendChild(btn);
    }
  } else {
    const input = document.createElement('input');
    input.type = 'number';
    controls.appendChild(input);
    const submit = document.createElement('button');
    submit.textContent = 'Ответить';
    submit.onclick = () => answer(parseInt(input.value, 10));
    controls.appendChild(submit);
  }
}

function answer(user) {
  const q = game.questions[game.qIndex];
  if (user === q.a) game.correct++; else game.wrong++;
  game.qIndex++;
  if (game.qIndex < 10) {
    showQuestion();
  } else {
    finishLevel();
  }
}


function finishLevel() {
  document.getElementById('correct').textContent = 'Верно: ' + game.correct;
  document.getElementById('wrong').textContent = 'Неверно: ' + game.wrong;
  const passed = game.correct >= 8;
  const area = document.getElementById('question-area');
  const controls = document.getElementById('controls');

  if (passed && game.levelIndex < LEVELS.length - 1) {
    game.levelIndex++;
    area.innerHTML = '<div class="final"><h2>Уровень пройден!</h2><p>Правильных ответов 80% и более.</p></div>';
    nextBtn(controls, 'Следующий уровень', () => {
      game.correct = 0;
      game.wrong = 0;
      startLevel();
    });
    return;
  }


  const message = passed
    ? 'Поздравляем! Вы прошли все уровни!'
    : 'Вы не набрали 80% и не прошли уровень. Попробуйте снова!';
  area.innerHTML = '<div class="final"><h2>' + message + '</h2><p>Правильных: ' + game.correct + ', неправильных: ' + game.wrong + '</p></div>';
  controls.innerHTML = '';
  restartBtn(controls);
  exitBtn(controls);
}

function nextBtn(controls, text, handler) {
  const btn = document.createElement('button');
  btn.textContent = text;
  btn.onclick = handler;
  controls.appendChild(btn);
}

function restartBtn(controls) {
  nextBtn(controls, 'Перезапустить игру', function () {
    game.levelIndex = 0;
    game.correct = 0;
    game.wrong = 0;
    startLevel();
  });
}

function exitBtn(controls) {
  const btn = document.createElement('button');
  btn.textContent = 'Выйти';
  btn.onclick = function () {
    const area = document.getElementById('question-area');
    area.innerHTML = '<div class="final"><h2>До свидания!</h2></div>';
    controls.innerHTML = '';
    restartBtn(controls);
  };
  controls.appendChild(btn);
}

startLevel();
