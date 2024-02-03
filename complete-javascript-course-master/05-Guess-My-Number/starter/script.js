'use strict';
const check = document.querySelector('.check');
let verificaNumero;
let punteggio = 20;
const sicretNumber = Math.trunc(Math.random() * 20) + 1;

//document.querySelector('.number').textContent = sicretNumber;
//Perche si registri il valore nella variabile bisogna metterlo dentro la stessa funzione dove poi si usa quella variabile
check.addEventListener('click', function () {
  const numeroSelezionato = Number(document.querySelector('.guess').value);
  console.log(numeroSelezionato);

  if (sicretNumber === numeroSelezionato) {
    document.querySelector('.message').textContent = '🥳 Numero indovinato!!!';
  } else if (sicretNumber > numeroSelezionato && numeroSelezionato !== 0) {
    document.querySelector('.message').textContent = '🕵️‍♀️ Numero troppo basso!';
    punteggio--;
    document.querySelector('.score').textContent = punteggio;
  } else if (sicretNumber < numeroSelezionato && numeroSelezionato !== 0) {
    document.querySelector('.message').textContent = '🕵️‍♀️ Numero troppo alto!';
    punteggio--;
    document.querySelector('.score').textContent = punteggio;
  } else if (!numeroSelezionato) {
    //Se è diverso da true (lo 0 è sempre false) allora fai...
    document.querySelector('.message').textContent = '⛔ Numero non valido!';
  }

  if (punteggio < 0) {
    document.querySelector('.message').textContent = '💀 Hai perso!';
    punteggio++;
    document.querySelector('.score').textContent = punteggio;
  }
  console.log('');
});
