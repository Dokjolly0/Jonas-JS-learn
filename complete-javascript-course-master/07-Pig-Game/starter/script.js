const new_btn = document.querySelector('.btn--new');
const roll_btn = document.querySelector('.btn--roll');
const hold_btn = document.querySelector('.btn--hold');
const dadoEl = document.querySelector('.dice');
const current_score_el_1 = document.getElementById('current--0');
const current_score_el_2 = document.getElementById('current--1');
const match_score_el_1 = document.getElementById('score--0');
const match_score_el_2 = document.getElementById('score--1');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
let playerActive = 1;
const currentScore = [0, 0];
const matchScore = [0, 0];

dadoEl.classList.add('hidden');

roll_btn.addEventListener('click', function () {
  if (player1.classList.contains('player--active')) {
    playerActive = 1;
  } else if (player2.classList.contains('player--active')) {
    playerActive = 2;
  }
  let dado = Math.trunc(Math.random() * 6) + 1;
  dadoEl.src = `dice-${dado}.png`;
  dadoEl.classList.remove('hidden');
  console.log(dado);
  if (dado > 1) {
    if (playerActive === 1) {
      current_score_el_1.textContent = currentScore[0] += dado;
    } else if (playerActive === 2) {
      current_score_el_2.textContent = currentScore[1] += dado;
    }
  } else {
    //Cambio player
    if (playerActive === 1) {
      cambioPlayer();
      currentScore[0] = 0;
      current_score_el_1.textContent = 0;
      //Con questa funzione aggiungi una classe che si aggiunge/togle dopo x millisecondi
      setTimeout(function () {
        dadoEl.classList.add('hidden');
      }, 600);
    } else if (playerActive === 2) {
      cambioPlayer();
      currentScore[1] = 0;
      current_score_el_2.textContent = 0;
      setTimeout(function () {
        dadoEl.classList.add('hidden');
      }, 600);
    }
  }
});

hold_btn.addEventListener('click', function () {
  if (playerActive === 1) {
    match_score_el_1.textContent = matchScore[0] += currentScore[0];
    if (matchScore[0] >= 100) {
      alert('Giocatore 1, hai vinto🥳');
      player1.classList.add('player--winner');
      hold_btn.disabled = true;
      roll_btn.disabled = true;
    } else {
      currentScore[0] = 0;
      current_score_el_1.textContent = 0;
      cambioPlayer();
    }
  } else if (playerActive === 2) {
    match_score_el_2.textContent = matchScore[1] += currentScore[1];
    if (matchScore[1] >= 100) {
      alert('Giocatore 2, hai vinto🥳');
      player2.classList.add('player--winner');
      hold_btn.disabled = true;
      roll_btn.disabled = true;
    } else {
      currentScore[1] = 0;
      current_score_el_2.textContent = 0;
      cambioPlayer();
    }
  }
  dadoEl.classList.add('hidden');
});

new_btn.addEventListener('click', function () {
  match_score_el_1.textContent = 0;
  match_score_el_2.textContent = 0;
  current_score_el_1.textContent = 0;
  current_score_el_2.textContent = 0;
  player1.classList.add('player--active');
  player2.classList.remove('player--active');
  matchScore[0] = 0;
  matchScore[1] = 0;
  currentScore[0] = 0;
  currentScore[1] = 0;
  player1.classList.remove('player--winner');
  player2.classList.remove('player--winner');
  hold_btn.disabled = false;
  roll_btn.disabled = false;
});

function cambioPlayer() {
  if (player1.classList.contains('player--active')) {
    player1.classList.remove('player--active');
    player2.classList.add('player--active');
  } else if (player2.classList.contains('player--active')) {
    player2.classList.remove('player--active');
    player1.classList.add('player--active');
  }
}
