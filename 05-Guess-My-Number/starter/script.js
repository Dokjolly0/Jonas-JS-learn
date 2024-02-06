'use strict';
const check = document.querySelector('.check');
let punteggio = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
const listaNumeri = [];

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
      disabled();
      if (punteggio > highscore) {
        document.querySelector('.highscore').textContent = punteggio;
        highscore = punteggio;
      }
    } else if (secretNumber > numeroSelezionato && numeroSelezionato !== 0) {
      document.querySelector('.message').textContent =
        '📉 Numero troppo basso!';
      listaNumeri.push(numeroSelezionato);
      punteggio--;
      document.querySelector('.score').textContent = punteggio;
    } else if (secretNumber < numeroSelezionato && numeroSelezionato !== 0) {
      document.querySelector('.message').textContent = '📈 Numero troppo alto!';
      listaNumeri.push(numeroSelezionato);
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
    disabled();
  } else {
    document.querySelector('.message').textContent =
      "🧐 Numero indovinato all'ultimo!!!";
    disabled();
  }

  const numeroDaCercare = numeroSelezionato;
  let numeriDoppi = listaNumeri.filter(function (numero) {
    return numero === numeroDaCercare;
  });
  if (numeriDoppi.length > 1) {
    // alert('Attenzione, hai gia usato questo numero!');
    punteggio++;
    document.querySelector('.score').textContent = punteggio;
    listaNumeri.pop();
    document.querySelector('.message').textContent = 'Numero gia inserito!';
  }
  console.log(listaNumeri);
});
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
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

function disabled() {
  document.querySelector('.check').disabled = true;
  document.querySelector('.guess').disabled = true;
}
