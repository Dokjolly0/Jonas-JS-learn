// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const misuraKelvin = function () {
  const misurazione = {
    tipo: "Temperatura",
    scala: "celsius",
    valore: prompt("Inserisci una temperatura"),
  };
  while (misurazione.valore === "") {
    if (misurazione.valore === "") {
      alert("Inserisci una temperatura in gradi celsius!");
      misurazione.valore = prompt("Inserisci una temperatura");
    }
  }
  const kelvin = Number(misurazione.valore) + 273;
  return kelvin;
};

//console.log(misuraKelvin());
//console.error(misuraKelvin());
const tryal = [17, 21, 23];
const tryal1 = [12, 5, -5, 0, 4];

function printForecast(Arr) {
  let stringa = "";
  for (let i = 0; i < Arr.length; i++) {
    if (i === Arr.length - 1) {
      stringa += `Giorno ${i + 1}: La temperatura è di ${Arr[i]}`;
    } else {
      stringa += `Giorno ${i + 1}: La temperatura è di ${Arr[i]}...`;
    }
  }
  console.log(stringa);
}
printForecast(tryal);
console.log(` `);
printForecast(tryal1);
