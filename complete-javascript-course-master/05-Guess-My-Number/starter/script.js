'use strict';
const check = document.querySelector('.check');
let verificaNumero;
const sicretNumber = Math.trunc(Math.random() * 20) + 1;

//Perche si registri il valore nella variabile bisogna metterlo dentro la stessa funzione dove poi si usa quella variabile
check.addEventListener('click', function () {
  const numeroSelezionato = Number(document.querySelector('.guess').value);
  let punteggio = Number(document.querySelector('.score').value);
  punteggio = 20;
  console.log(numeroSelezionato);
  //#region if !variabile
  //Se è diverso da true (lo 0 è sempre false) allora fai...
  //   if (!numeroSelezionato) {
  //     document.querySelector('.message').textContent = '⛔Numero non valido!';
  //     verificaNumero = 0;
  //   }
  //#endregion
  if (sicretNumber === numeroSelezionato) {
    document.querySelector('.message').textContent = '🥳Numero indovinato!!!';
  } else if (sicretNumber > numeroSelezionato && numeroSelezionato !== 0) {
    document.querySelector('.message').textContent = '🕵️‍♀️Numero troppo basso!';
    punteggio = punteggio - 1;
    document.querySelector('.score').textContent = punteggio;
  } else if (sicretNumber < numeroSelezionato && numeroSelezionato !== 0) {
    document.querySelector('.message').textContent = '🕵️‍♀️Numero troppo alto!';
    punteggio = punteggio - 1;
    document.querySelector('.score').textContent = punteggio;
  } else if (numeroSelezionato === 0) {
    document.querySelector('.message').textContent = '⛔Numero non valido!';
  }
});
