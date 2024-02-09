//#region Inizialise
'use strict';
const giocatoreAttivo = document.querySelector('.player--active');
const giocatore1 = document.querySelector('.player--0');
const giocatore2 = document.querySelector('.player--1');
const dado = document.querySelector('.dice');
const nuovoDado = document.querySelector('.btn--roll');
const rigioca = document.querySelector('.btn--new');
const aggiungiPunteggio = document.querySelector('.btn--hold');
const punteggioRoundG1 = document.querySelector('#score--0');
const punteggioRoundG2 = document.querySelector('#score--1');
const punteggioComplessivoG1 = document.querySelector('#current--0');
const punteggioComplessivoG2 = document.querySelector('#current--1');
let numeroGiocatore = 1;
let punteggioAttualeG1 = 0;
let punteggioAttualeG2 = 0;
let punteggioAttualeComplessivoG1 = 0;
let punteggioAttualeComplessivoG2 = 0;
let numeroDadoRandomico;
//const dado = document.getElementsByClassName('dice')[0];
//#endregion

//#region Game logic
dado.style.display = 'none';

nuovoDado.addEventListener('click', generaDado);
aggiungiPunteggio.addEventListener('click', inserisciPunteggio);
//#endregion

//#region Funzioni
//#region generaDado
function generaDado() {
  numeroDadoRandomico = Math.trunc(Math.random() * 6) + 1;
  let punteggioDaAggiungere = 0;
  dado.src = `dice-${numeroDadoRandomico}.png`;
  dado.style.display = 'block';
  //#region Logica giocatore attivo
  if (
    giocatore1.classList.contains('player--active') &&
    !giocatore2.classList.contains('player--active')
  ) {
    numeroGiocatore = 1;
  } else if (
    !giocatore1.classList.contains('player--active') &&
    giocatore2.classList.contains('player--active')
  ) {
    numeroGiocatore = 2;
  } else {
    numeroGiocatore = 0;
  }
  //#endregion

  //#region Logica cambio player
  if (numeroDadoRandomico === 1 && numeroGiocatore === 1) {
    giocatore1.classList.remove('player--active');
    giocatore2.classList.add('player--active');
    punteggioAttualeG1 = 0;
  } else if (numeroDadoRandomico === 1 && numeroGiocatore === 2) {
    giocatore2.classList.remove('player--active');
    giocatore1.classList.add('player--active');
    punteggioAttualeG2 = 0;
  }
  //#endregion

  //#region Logica punteggio
  if (
    numeroDadoRandomico > 1 &&
    numeroDadoRandomico <= 6 &&
    numeroGiocatore === 1
  ) {
    //Giocatore 1
    punteggioAttualeG1 = punteggioAttualeG1 + numeroDadoRandomico;
    punteggioRoundG1.textContent = punteggioAttualeG1;
  } else if (
    numeroDadoRandomico > 1 &&
    numeroDadoRandomico <= 6 &&
    numeroGiocatore === 2
  ) {
    //Giocatore 2
    punteggioAttualeG2 = punteggioAttualeG2 + numeroDadoRandomico;
    punteggioRoundG2.textContent = punteggioAttualeG2;
  }
  //#endregion
}
//#endregion
//#region inserisciPunteggio
function inserisciPunteggio() {
  if (numeroGiocatore === 1) {
    punteggioAttualeComplessivoG1 += punteggioAttualeG1;
    punteggioComplessivoG1.textContent = punteggioAttualeComplessivoG1;
    punteggioAttualeG1 = 0;
  } else if (numeroGiocatore === 2) {
    punteggioAttualeComplessivoG2 += punteggioAttualeG2;
    punteggioComplessivoG2.textContent = punteggioAttualeComplessivoG2;
    punteggioAttualeG2 = 0;
  }
  if (
    giocatore1.classList.contains('player--active') &&
    !giocatore2.classList.contains('player--active')
  ) {
    if (punteggioAttualeComplessivoG1 >= 100) {
      alert('Hai vinto!!!');
    } else {
      giocatore1.classList.remove('player--active');
      giocatore2.classList.add('player--active');
    }
  } else if (
    !giocatore1.classList.contains('player--active') &&
    giocatore2.classList.contains('player--active')
  ) {
    if (punteggioAttualeComplessivoG2 >= 100) {
      alert('Hai vinto!!!');
    } else {
      giocatore1.classList.add('player--active');
      giocatore2.classList.remove('player--active');
    }
  }
  dado.style.display = 'none';
  punteggioRoundG1.textContent = 0;
  punteggioRoundG2.textContent = 0;
}
//#endregion
//#endregion
