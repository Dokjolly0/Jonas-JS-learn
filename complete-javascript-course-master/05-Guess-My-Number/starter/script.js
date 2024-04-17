//#region Inizializzazioni
'use strict';
const check = document.querySelector('.check');
let punteggio = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
let listaNumeri = [];
let selezionaMessaggi = document.querySelector('.message');
let selezionaNumero = document.querySelector('.number');
let seslezionaBody = document.querySelector('body');
function disabled(bool) {
  document.querySelector('.check').disabled = bool;
  document.querySelector('.guess').disabled = bool;
}
//#endregion

//#region Pulsante numeri
check.addEventListener('click', function () {
  const numeroSelezionato = Number(document.querySelector('.guess').value);
  if (numeroSelezionato > 0 && numeroSelezionato <= 20) {
    if (secretNumber === numeroSelezionato) {
      selezionaMessaggi.textContent = '🥳 Numero indovinato!!!';
      seslezionaBody.classList.add('bg_winner');
      selezionaNumero.textContent = secretNumber;
      selezionaNumero.style.width = '30rem';
      disabled(true);
      if (punteggio > highscore) {
        document.querySelector('.highscore').textContent = punteggio;
        highscore = punteggio;
      }
    } else if (secretNumber !== numeroSelezionato && numeroSelezionato !== 0) {
      selezionaMessaggi.textContent =
        secretNumber > numeroSelezionato
          ? '📉 Numero troppo basso!'
          : '📈 Numero troppo alto!';
      punteggio--;
      document.querySelector('.score').textContent = punteggio;
      listaNumeri.push(numeroSelezionato);
    }
  } else if (!numeroSelezionato) {
    selezionaMessaggi.textContent = '⛔ Numero non valido!';
  } else if (punteggio === 1 && numeroSelezionato !== secretNumber) {
    selezionaMessaggi.textContent = '💀 Hai perso!';
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
    selezionaMessaggi.textContent = 'Numero gia inserito!';
  }
});
//#endregion

//#region Again
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  punteggio = 20;
  document.querySelector('.score').textContent = punteggio;
  selezionaMessaggi.textContent = 'Start guessing...';
  disabled(false);
  seslezionaBody.classList.remove('bg_loser');
  seslezionaBody.classList.remove('bg_winner');
  selezionaNumero.style.width = '15rem';
  selezionaNumero.textContent = '?';
  document.querySelector('.guess').value = '';
  listaNumeri = [];
});
//#endregion
