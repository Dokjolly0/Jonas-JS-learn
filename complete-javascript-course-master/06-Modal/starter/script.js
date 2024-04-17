//#region Inizializzazione
'use strict';
//querySelectorAll seleziona tutti gli elementi (Quindi se ho piu elementi con una classe li seleziona tutti)
const showModal = document.querySelectorAll('.show-modal');
//querySelector seleziona il primo elemento (Quindi se ho piu elementi con una classe seleziona solo il primo)
const closeModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
//questa sarebbe una sfocatura del body, cosi risulta piu leggibile il popup
const overlay = document.querySelector('.overlay');
//#endregion

//querySelectorAll prende tutti gli elementi selezionati e li mette dentro ad una struttura simile ad un array che funziona allo stesso modo (parte da 0)
console.log(showModal);
for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener('click', mostraPopup);
}
//Qui non stiamo chiamando una funzione, quindi non serve mettere le parentesi tonde, anzi, se le metti il codice non funziona piu
closeModal.addEventListener('click', togliPopup);
overlay.addEventListener('click', togliPopup);
document.addEventListener('keydown', function (tastoPremuto) {
  console.log(tastoPremuto.key);
  if (tastoPremuto.key === 'Escape' && !modal.classList.contains('hidden')) {
    //Se l'elemento contiene la classe hidden torna true, altrimenti false
    //In questo caso non lo conteneva, quindi torna false e noi nell'if gli abbiamo detto di eseguire l'azione solo se tornava false, quindi è tutto apposto
    togliPopup();
  }
});

//#region Funzioni
function togliPopup() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}
function mostraPopup(i) {
  // console.log(`Ciao, io solo la ${i + 1} finestra`);
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
/*
function parametriMultipli(event, index, altroParametro) {
    console.log(`Cliccato! Evento: ${event.type}, Indice: ${index}, Altro parametro: ${altroParametro}`);
    // Il resto del tuo codice
}Nell'addeventlissener va comunque chiamata senza parametri
*/
//#endregion
