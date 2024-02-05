'use strict';
const check = document.querySelector('.check');
let punteggio = 20;
const secretNumber = Math.trunc(Math.random() * 20) + 1;

//document.querySelector('.number').textContent = secretNumber;
//Perche si registri il valore nella variabile bisogna metterlo dentro la stessa funzione dove poi si usa quella variabile
check.addEventListener('click', function () {
  const numeroSelezionato = Number(document.querySelector('.guess').value);
  if (punteggio > 1) {
    if (secretNumber === numeroSelezionato) {
      document.querySelector('.message').textContent =
        '🥳 Numero indovinato!!!';
      document.querySelector('body').classList.add('bg_winner');
      document.querySelector('.number').textContent = secretNumber;
      //Questo è uno style inline applicato nel codice HTML
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.check').disabled = true;
      document.querySelector('.guess').disabled = true;
    } else if (secretNumber > numeroSelezionato && numeroSelezionato !== 0) {
      document.querySelector('.message').textContent =
        '📉 Numero troppo basso!';
      punteggio--;
      document.querySelector('.score').textContent = punteggio;
    } else if (secretNumber < numeroSelezionato && numeroSelezionato !== 0) {
      document.querySelector('.message').textContent = '📈 Numero troppo alto!';
      punteggio--;
      document.querySelector('.score').textContent = punteggio;
    } else if (!numeroSelezionato) {
      //Se è diverso da true (lo 0 è sempre false) allora fai...
      document.querySelector('.message').textContent = '⛔ Numero non valido!';
    }
  } else if (punteggio === 1 && numeroSelezionato !== secretNumber) {
    document.querySelector('.message').textContent = '💀 Hai perso!';
    document.querySelector('body').classList.add('bg_loser');
    punteggio--;
    document.querySelector('.score').textContent = punteggio;
    document.querySelector('.check').disabled = true;
    document.querySelector('.guess').disabled = true;
  } else {
    document.querySelector('.message').textContent =
      "🧐 Numero indovinato all'ultimo!!!";
    document.querySelector('.check').disabled = true;
    document.querySelector('.guess').disabled = true;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  punteggio = 20;
  document.querySelector('.score').textContent = punteggio;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.check').disabled = false;
  document.querySelector('.guess').disabled = false;
  document.querySelector('body').classList.remove('bg_loser');
  document.querySelector('body').classList.remove('bg_winner');
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').innerHTML = '?';
  document.querySelector('.guess').value = '';
});
