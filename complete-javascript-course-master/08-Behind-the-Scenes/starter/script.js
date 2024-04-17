'use strict';

const calcoloEta = function (annoNascita) {
  const eta = 2024 - annoNascita;
  stampaEta(eta);
  return eta;
};
function stampaEta(eta) {
  console.log(eta);
}
calcoloEta(2003);

const alex = {
  nome: 'Alex',
  cognome: 'Violatto',
  annoNascita: 2003,
  calcolaEta: function () {
    return 2024 - this.annoNascita;
  }, // Eta 2024 - 2003

  annoNascita1: 2003,
  calcolaEta1: () => {
    return 2024 - this.annoNascita;
  }, // 2024 - undefined.annoNascia
};

const prova = {
  a: 1,
  b: 2,
  c: function () {
    const d = () => {
      console.log(this.a + this.b); // prova.a + prova.b perche le arrow function non hanno la this keyword, quindi l'oggetto this passa allo scope successivo, in questo caso prova, ricordati che pero le funzioni che metti negli oggetti devi anche chiamarle
    };
    d(); // 3
  },
};
prova.c();
console.clear();
