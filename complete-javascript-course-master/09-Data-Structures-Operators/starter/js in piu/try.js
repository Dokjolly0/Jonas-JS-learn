const a = [1, 2, 3, 4, 5];
const b = { a: 1, b: 2, c: 3 };
const c = [
  { a: 1, b: 2, c: 3 },
  { a: 11, b: 22, c: 33 },
  { a: 111, b: 222, c: 333 },
];

const [a1, b1, c1, d1, e1] = a;
//a1 = 1, b2 = 2...
const { a: a2, b: b2, c: c2 } = b;
//a2 = 1, b2 = 2, c2 = 3
const { a: a3, b: b3, c: c3 } = c[1];
//a2 = 11, b2 = 22, c2 = 33

//Stampa tutti e tre gli oggetti
for (let item of c) console.log(item);
console.clear();

//Sintassi per la quale basta scrivere il nome di un oggetto esterno dentro un oggetto per metterlo come proprieta
//Sintassi per scrivere metodi dentro agli oggetti in maniera piu semplice senza la keyword function
const abc = {
  a,
  b,
  c,
  d() {
    console.log('Parametro D');
  },
};
console.log(abc);
console.clear();

//Con questa sintassi puoi usare gli elementi di un array come parametri per scrivere oggetti
const NOMI = ['Alex', 'Pippo', 'Pluto', 'Marco', 'Gianni'];
const nomi = {
  [NOMI[0]]: 1,
  [NOMI[1]]: 2,
  [NOMI[2]]: 3,
};
console.log(nomi);
console.clear();

//#region Obj values, keys, entries
const giorni = [
  'lunedi',
  'martedi',
  'mercoledi',
  'giovedi',
  'venerdi',
  'sabato',
  'domenica',
];
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    [giorni[3]]: {
      open: 12,
      close: 22,
    },
    [giorni[4]]: {
      open: 11,
      close: 23,
    },
    [giorni[5]]: {
      open: 0, // aperto 24 ore
      close: 24,
    },
  },
};
//Se vuoi scrivere delle variabili nella sintassi degli oggetti allora devi usare le parentesi quadre
for (const giorno of giorni) {
  let apertura = restaurant.openingHours[giorno]?.open ?? 'Chiuso';
  let chiusura = restaurant.openingHours[giorno]?.close ?? '';
  console.log(`${giorno}: ${apertura} ${apertura ? '' : '-'} ${chiusura}`);
}
abc.d?.() ?? console.log('Il metodo non esiste');
abc.e?.() ?? console.log('Il metodo non esiste');
console.clear();

//Restituisce un array con il valore di tutte le proprieta di un oggetto
const values = Object.values(restaurant.openingHours);
//Restituisce un array con tutte le proprieta di un oggetto (senza i valori)
const keys = Object.keys(restaurant.openingHours);
//Restituisce un array con 2 elementi per ogni proprieta, il primo è il nome della proprieta e il secondo è il valore
const entries = Object.entries(restaurant.openingHours);
console.log(values, keys, entries);
console.clear();
//#endregion

//Set terra solo un elemento unico, se trova doppioni non li inserisce (NON SONO ARRAY)
const valoriUnici = new Set([
  'pane',
  'vino',
  'olio',
  'pane',
  'olio',
  'pasta',
  'vino',
]);
console.log(valoriUnici);
console.clear();
//Metodi

console.log(valoriUnici.size); //Restituisce quanti valori ha quel determinato set

console.log(valoriUnici.has('pane')); //Restituisce true se trova l'elemento, false se non lo trova

valoriUnici.add('pizza'); //Aggiunge un elemento al set

valoriUnici.delete('pizza'); //Rimuove un elemento dal set

for (let unique of valoriUnici) console.log(unique); //Puoi anche eseguirci dei loop

valoriUnici.clear(); //Elimina tutti gli elementi del set

console.log(valoriUnici);

//N.B. non puoi estrarre valori da un set, set viene usato solo per verificare se un certo valore unico è presente nel set o meno, se vuoi recuperare dei valori allora devi usare un array

//Casi d'uso (ottenere array con valori unici)
const qw = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
const uniqueQw = [...new Set(qw)]; //Nuovo array con valori unici
console.log(uniqueQw);
console.clear();

//Map
//Map è un oggetto che ti permette di mappare i valori di un array in un altro array
map_arr = [1, 2, 3, 4, 5];
const map = new Map();
//Inserimento di valori
map.set('nome', 'Alex');
map.set('eta', 18);
map.set('sesso', 'Maschio');
//Set array keys
map.set(map_arr, 'Array');
//Set dom keys (se non lo trova mette la key a null)
map.set(document.querySelector('h1').textContent, 'Headng');
console.log(map);
console.clear();

//Output
//0: "nome" => "Alex"
//1: "eta" => 18
//2: "sesso" => "Maschio"

console.log(map.get('nome')); //Restituisce il valore di una chiave
map.get('eta') ?? console.log('Chiave non trovata'); //Restituisce il valore di una chiave, se non la trova restituisce un messaggio
map.has('nome')
  ? console.log('Chiave trovata')
  : console.log('Chiave non trovata'); //Restituisce true se trova la chiave, false se non la trova
map.get('eta') >= 18 ? console.log('Maggiorenne') : console.log('Minorenne'); //Restituisce il valore di una chiave, se il valore è maggiore o uguale a 18 restituisce "Maggiorenne", altrimenti restituisce "Minorenne"

map.delete('etaa'); //Elimina una chiave
//map.clear(); //Elimina tutte le chiavi
console.log(map.size); //Restituisce il numero di chiavi
console.log(map);
console.clear();

//differenze tra map e oggetti
//Map può avere chiavi di qualsiasi tipo, mentre gli oggetti possono avere solo stringhe come chiavi
//Map è iterabile, mentre gli oggetti no
//Map ha una size property, mentre gli oggetti no
//Map è più facile da convertire in un array

//Secondo metodo per inserire valori
let risposta;
let domanda = '';
let counter = 1;
const questions = new Map([
  ['Question 1', 'Language lower level'],
  [1, 'C'],
  [2, 'Python'],
  [3, 'Java'],
  [[1], 'C'],

  [('Question 2', 'The first programming language for android development')],
  [4, 'C'],
  [5, 'Java'],
  [6, 'Python'],
  [[2], 'Java'],

  ['Question 3', 'The main machine learning language'],
  [7, 'C'],
  [8, 'Java'],
  [9, 'Python'],
  [[3], 'Python'],

  ['Question 4', 'The most popular programming language'],
  [10, 'C'],
  [11, 'Java'],
  [12, 'Python'],
  [[4], 'Python'],

  ['Question 5', 'The most popular web programming language'],
  [13, 'JavaScript'],
  [14, 'Python'],
  [15, 'Java'],
  [[5], 'JavaScript'],
]);
//Convertire un map in un array
const mapArr = [...questions];
//Obtain the keys of a map
const mapKeys = [...questions.keys()];
//Obtain the values of a map
const mapValues = [...questions.values()];

const risposte = [1, 5, 9, 11, 13];
// console.log('Insert your answers:');
// for (let [key, value] of questions) {
//   if (typeof key === 'string') {
//     console.log(`${key}: ${value}`);
//     domanda = value;
//   }
//   if (typeof key === 'number') {
//     console.log(`${key}: ${value}`);
//   }
//   if (key[0] === counter) {
//     risposta = Number(prompt(domanda));
//     counter++;
//     if (risposta === Number(risposte[key - 1])) {
//       console.log('Risposta corretta');
//     } else {
//       console.log('Risposta sbagliata');
//       while (risposta !== Number(risposte[key - 1])) {
//         risposta = Number(prompt(domanda + 'La vuoi saltare? y/n'));
//         if (risposta === 'y' || risposta === 'Y') break;
//       }
//     }
//   }
// }
//Iterazione di un map
//for (let [key, value] of map) console.log(key + ': ' + value); //Iterazione di un map
//Iterazione di un map con forEach
//question.forEach((value, key) => console.log(key + ': ' + value));

//Lavorare con le stringhe
const compagnia = 'Air Canada';
const volo = 'AC312';
const modello_aereo = 'Airbus A320';

const frase = 'Io sono Alex, uno studente ITS e ho 20 anni. Sono';

volo[0]; //A //Posizione 0 della variabile
volo[1]; //C //Posizione 1 della variabile
volo[2]; //3 //Posizione 2 della variabile

frase.indexOf('s'); //3 //Prima volta che trova la s
frase.indexOf('sono'); //3 //Prima volta che trova sono
frase.indexOf('Sono'); //-1 //Case sensitive
modello_aereo.lastIndexOf('A'); //7 //L'ultima volta che trova A

modello_aereo.slice(6); //A320 //Parte dal carattere dopo la posizione indicata
frase.slice(7, 12); //Alex //Parte dall'8 lettera e arriva fino alla 11

compagnia.slice(0, compagnia.indexOf(' ')); //Air //Metodo per rilevare la prima parola di una frase
compagnia.slice(compagnia.lastIndexOf(' ') + 1); //Air //Metodo per rilevare l'ultima parola di una frase + 1 perche se no prende pure lo spaazio
//Non devi specificsare nulla perche dopo l'ultimo spazio estrarra tutto

volo.slice(-4); //A320 //Parte dal fondo

// Crea la stringa del posto e calcola se è centrale o meno (B/E)
function ceck2(posto) {
  //B e E centrali
  const lettera = posto.slice(-1);
  debugger;
  if (lettera === 'B' || lettera === 'E') console.log('Centrale', lettera);
  else console.log('Laterale', lettera);
}
const posto = Math.trunc(Math.random() * 281);
const numero_lettera = Math.trunc(Math.random() * 6) + 1;
let Lettera = '';
switch (numero_lettera) {
  case 1:
    Lettera = 'A';
    break;
  case 2:
    Lettera = 'B';
    break;
  case 3:
    Lettera = 'C';
    break;
  case 4:
    Lettera = 'D';
    break;
  case 5:
    Lettera = 'E';
    break;
  case 6:
    Lettera = 'F';
    break;
}
const stringa_posto = posto + Lettera;
ceck2(stringa_posto);

frase.toLowerCase(); //Converte tutto il testo in minuscolo
frase.toUpperCase(); //Converte tutto il testo in maiuscolo

let str = 'AlEx'; //Metti la prima maiuscola e tutto il resto in minuscolo
const str_fixed = str[0].toUpperCase() + str.slice(1).toLowerCase();
console.log(str_fixed);

frase.replace(/Sono/g, 'sono'); //Sostituisci tutte le parole Sono con sono
frase.replace('Sono', 'sono'); //Sostituisci solo la prima parola Sono con sono

function controllo_bagagli(item) {
  if (typeof item === 'string') {
    const bagaglio = item.toLowerCase();
    if (bagaglio.includes('pistola') || bagaglio.includes('coltello'))
      console.log('Ti arrestiamo');
    else console.log('Controllo superato');
  } else console.log('Inserisci una stringa');
}
//include controlla se una stringa o una parola è presente in un'altra stringa

controllo_bagagli(['Flauto', 'Basso']);
controllo_bagagli('Pistola');
controllo_bagagli('Banana');
