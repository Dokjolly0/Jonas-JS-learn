'use strict';
const check = document.querySelector('.check');
let punteggio = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
const listaNumeri = [];

//#region Pulsante numeri
check.addEventListener('click', function () {
  const numeroSelezionato = Number(document.querySelector('.guess').value);
  if (numeroSelezionato > 0 && numeroSelezionato <= 20) {
    if (secretNumber === numeroSelezionato) {
      mostraMessaggi('🥳 Numero indovinato!!!');
      document.querySelector('body').classList.add('bg_winner');
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.number').style.width = '30rem';
      disabled(true);
      if (punteggio > highscore) {
        document.querySelector('.highscore').textContent = punteggio;
        highscore = punteggio;
      }
    } else if (secretNumber !== numeroSelezionato && numeroSelezionato !== 0) {
      mostraMessaggi(
        secretNumber > numeroSelezionato
          ? '📉 Numero troppo basso!'
          : '📈 Numero troppo alto!'
      );
      punteggio--;
      document.querySelector('.score').textContent = punteggio;
      listaNumeri.push(numeroSelezionato);
    }
  } else if (!numeroSelezionato) {
    mostraMessaggi('⛔ Numero non valido!');
  } else if (punteggio === 1 && numeroSelezionato !== secretNumber) {
    mostraMessaggi('💀 Hai perso!');
  }
  //#endregion

  //#region Numeri doppi
  const numeroDaCercare = numeroSelezionato;
  let numeriDoppi = listaNumeri.filter(function (numero) {
    return numero === numeroDaCercare;
  });
  if (numeriDoppi.length > 1) {
    punteggio++;
    document.querySelector('.score').textContent = punteggio;
    listaNumeri.pop();
    mostraMessaggi('Numero gia inserito!');
  }
});
//#endregion

//#region Again
document.querySelector('.again').addEventListener('click', function () {
  Math.trunc(Math.random() * 20) + 1;
  punteggio = 20;
  document.querySelector('.score').textContent = punteggio;
  mostraMessaggi('Start guessing...');
  disabled(false);
  document.querySelector('body').classList.remove('bg_loser');
  document.querySelector('body').classList.remove('bg_winner');
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').innerHTML = '?';
  document.querySelector('.guess').value = '';
});
//#endregion

//#region Funzioni
function disabled(bool) {
  if (bool === true) {
    document.querySelector('.check').disabled = true;
    document.querySelector('.guess').disabled = true;
  } else if (bool === false) {
    document.querySelector('.check').disabled = false;
    document.querySelector('.guess').disabled = false;
  }
}
function mostraMessaggi(messaggio) {
  document.querySelector('.message').textContent = messaggio;
}
function mostraNumero(numero) {
  document.querySelector('.numero').textContent = numero;
}
function numeroRandom20() {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
}
//#endregion
