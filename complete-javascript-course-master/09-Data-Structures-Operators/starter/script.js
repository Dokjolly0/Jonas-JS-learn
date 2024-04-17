'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    giovedi: {
      open: 12,
      close: 22,
    },
    venerdi: {
      open: 11,
      close: 23,
    },
    sabato: {
      open: 0, // aperto 24 ore
      close: 24,
    },
  },
};

//#region Destrutturing array
const destrutturing1 = [1, 2, 3, 4, 5];
//Vecchio metodo
// const a = destrutturing1[0];
// const b = destrutturing1[1];
// const c = destrutturing1[2];
// const d = destrutturing1[3];
// const e = destrutturing1[4];

//Nuovo metodo
// const [a, b, c, d, e] = destrutturing1;
// console.log(a, b, c, d, e);
// console.clear();
//#endregion

//Array annidati
const array_annidato = [1, 2, [3, 4]];
// const [v1, , v2] = array_annidato;
const [v1, , [v3, v4]] = array_annidato;
console.log(v1, v3, v4);
console.clear();

//Imposta valori di default
const default_ = [1, 2];
const [qq = 1, ww = 1, ee = 1] = default_;
console.log(qq, ww, ee); //Quelli che non trova li setta a 1
console.clear();

//Valori predefiniti negli oggetti e destrutturing obj con e senza il cambio nome
const {
  name: nome = 'Restourant name',
  location: indirizzo,
  categories,
  starterMenu,
  mainMenu,
  openingHours,
} = restaurant;
// console.log(nome, indirizzo, categories, starterMenu, mainMenu, openingHours);

//Se hai gia delle variabili create e vuoi passare dei valori di un obj dentro devi mutarle:

let obj1 = 0;
let obj2 = 0;
const obj = { obj1: 10, obj2: 20 };
({ obj1, obj2 } = obj); //Riassegni il valore di a e b
// console.log(a, b);

//Oggetti annidati
const {
  giovedi: { open: inizio, close: fine },
} = openingHours;
// console.log(inizio, fine);

const spread_operator = [1, 2, 3, 4, 5];
const new_spread_operator = [...spread_operator, 6, 7, 8];
//const new_spread_operator = [1, 2, 3, 4, 5, 6, 7, 8];
//In sintesi lo spread operator semplicemente riscrive tutti gli elementi di un array separati dalla virgola
//E di solito si usa per tutte quelle volte che dovresti scrivere manualmente tutti gli elementi di un array
// console.log([...restaurant.mainMenu, ...restaurant.starterMenu]);

const str = 'Stringa';
const arr_str = [...str];
// console.log(arr_str);

const order_pasta = function (numero) {
  let ingredienti = [];
  for (let i = 0; i < numero; i++) {
    ingredienti.push(
      prompt(`Scegli il tuo piatto di pasta, ingrediente ${i + 1}`)
    );
  }
  console.log(...ingredienti);
};
//order_pasta(4);

const new_restourant = { founder: 'Gianni', ...restaurant, founding_in: 1998 };
// console.log(new_restourant);

const rest_pattern = [1, 2, 3, 4, 5];
const [rest1, rest2, ...altri_rest] = rest_pattern;
// console.log(rest1, rest2, altri_rest);

const rest_pattern_obj = {
  obj1: 10,
  obj2: 20,
  obj3: 30,
  obj4: 40,
  obj5: 50,
  obj6: 60,
};
const { obj1: Obj1, obj2: Obg2, ...rest_pattern_obj__altri } = rest_pattern_obj;
// console.log(Obj1, Obg2, rest_pattern_obj__altri);

// const {
//   giovedi: o_giovedi,
//   venerdi: o_venerdi,
//   sabato: o_sabato,
// } = restaurant.openingHours;
// console.log(o_giovedi, o_venerdi, o_sabato);

const add = function (...numeri) {
  //Mia versione
  // let arr_num = [];
  // let somma = 0;
  // for (let i = 0; i < numeri.length; i++) {
  //   arr_num.push(numeri[i]);
  //   somma += arr_num[i];
  // }
  // console.log(somma);
  //return somma;

  let somma1 = 0;
  for (let i = 0; i < numeri.length; i++) somma1 += numeri[i];
  console.log(somma1);
  return somma1;
};
// let n100 = [];
// for (let i = 0; i < 100; i++) {
//   n100[i] = i + 1;
// }

//#region Challenge 1
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1.
const {
  players: [player1, player2],
} = game;
//const [player1, player2] = players;

//2.
const [gk, ...field] = player1;
console.log(gk, field);

//3.
const allPlayer = [...player1, ...player2];

//4.
const player1Final = [...player1, 'Thiago', 'Coutigno', 'Perisich'];
//console.log(player1Final);

//5.
const { team1, x: draw, team2 } = game.odds;
//console.log(team1, draw, team2);

//6.
function printGoals(...giocatori) {
  for (let i = 0; i < giocatori.length; i++)
    console.log(`${giocatori[i]}: ${i + 1}:0`);
}
const { scored } = game;
printGoals(...scored);
//#endregion

team1 < team2 && console.log('team 1 wins');
team1 > team2 && console.log('team 2 wins');
console.clear();

const menu = [...mainMenu, ...starterMenu];

//Destrutturing, index = arr[0], element = arr[1]
for (const item of menu) console.log(item);

//Output: [0, element] [1, element]...
for (const [index, element] of menu.entries())
  console.log(`${index + 1}: ${element}`);
console.clear();

//1
for (let [index, player] of Object.entries(game.scored))
  console.log(`Gool ${Number(index) + 1}: ${player}`);
//2
const odds = Object.values(game.odds);
console.log(odds);
//3
const squadre = [game.team1, 'Parita', game.team2];
const provabilita = Object.values(game.odds);
for (let i = 0; i < 3; i++)
  console.log(`Provabilita di vittoria di ${squadre[i]}: ${provabilita[i]}`);

const giocatori = Object.values(game.scored);
let scorers = {};
for (let giocatore of Object.values(giocatori))
  if (scorers[giocatore]) scorers[giocatore] += 1;
  else scorers[giocatore] = 1;

console.log(scorers);
console.clear();

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);
//1
let events = new Set(gameEvents.values());
console.log(events);
//2
gameEvents.delete(64);
console.log(gameEvents);

//"An event happened, on average, every 9 minutes"
const numeroEventi = gameEvents.size;
console.log(
  `An event happened, on average, every ${90 / numeroEventi} minutes`
);
for (let [key, value] of gameEvents) {
  if (key <= 45) console.log('[First half] ' + key + ': ' + value);
  else console.log('[Second half] ' + key + ': ' + value);
}

//Coding challeng 4

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));
// const textarea = document.querySelector('textarea');
// const bottone = document.querySelector('button');
// bottone.textContent = "Click";

// function converti_in_camel_case(frase){
//   let frase_camel_case = '';
//   const arr1 = frase.split('_');
//   for (let parola of arr1) {
//     parola = parola[0].toUpperCase() + parola.slice(1);
//     frase_camel_case += parola;
//   }
  
//   frase_camel_case = frase_camel_case.charAt(0).toLowerCase() + frase_camel_case.slice(1);
//   return frase_camel_case;
// }

// bottone.addEventListener('click', function(){
//   const convert = textarea.value;
//   const convertSplitArr1 = convert.split("\n"); //\n
//   const convertSplitArr = convert.split(" ");
  
//   let counter = 0;
//   for (let i = 1; i <= convertSplitArr1.length; i++){
//     convertSplitArr1[i-1] += '✅'.repeat(i);
//     counter = i;
//   }
//   for (let i = 1; i <= convertSplitArr.length; i++){
//     convertSplitArr[i-1] += '✅'.repeat(i + counter);
//   }
//   const concat = convertSplitArr.concat(convertSplitArr1);
//   const concatSet = new Set(concat)
//   for(let w of concatSet)console.log(w);
//   const convertSplit = convertSplitArr1.join("\n");
//  textarea.value = converti_in_camel_case(convertSplit);
// });

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const textarea = document.querySelector('textarea');

let lunghezza_massima = 0;
document.querySelector('button').addEventListener('click', function(){
  const text = textarea.value;
  textarea.value = "";
  let text_format = text.split(' ').join('\n').split('\n');
  for(let j = 0; j < text_format.length; j++) if(text_format[j].length > lunghezza_massima) lunghezza_massima = text_format[j].length;
  for(let i = 0; i < text_format.length; i++){
    text_format[i] = text_format[i].trim();
    text_format = text_format.filter(item => item !== "");
    let array_parole = text_format[i].split('_');
    let parola_finita = "";
    for(let p of array_parole){
      let rest = p.toLowerCase();
      rest = rest[0].toUpperCase() + rest.slice(1);
      parola_finita += rest;
    }
    parola_finita = parola_finita[0].toLowerCase() + parola_finita.slice(1);
    console.log(parola_finita);
    let simbolo = "✅".repeat(i+1);
    let spaziBianchi = " ".repeat(Math.max(0, lunghezza_massima - parola_finita.length)); 
    textarea.value += `${parola_finita}${spaziBianchi}\t${simbolo}\n`;
  }
})
