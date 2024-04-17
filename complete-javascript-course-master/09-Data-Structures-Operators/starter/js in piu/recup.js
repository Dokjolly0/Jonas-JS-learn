//#region Destrutturing
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
//#endregion
//#region Elementi array come parametri
//Con questa sintassi puoi usare gli elementi di un array come parametri per scrivere oggetti
const NOMI = ['Alex', 'Pippo', 'Pluto', 'Marco', 'Gianni'];
const nomi = {
  [NOMI[0]]: 1,
  [NOMI[1]]: 2,
  [NOMI[2]]: 3,
};
//#endregion
//#region For of
const arrForOf = ['pippo', 'pluto', 'paperino', 'topolino', 'minnie'];

//Stampa tutti gli elementi dell'array e il loro indice
for (const [index, value] of arrForOf.entries()) console.log(index, value);
//Stampa tutti gli elementi dell'array
for (const value of arrForOf) console.log(value);
//#endregion
//#region Object.entries, Object.keys, Object.values
const obj1 = {
  a: 1,
  b: 2,
  c: 3,
};
//Restituisce un array con il valore di tutte le proprieta di un oggetto
const values = Object.values(obj1); //values = [1, 2, 3]

//Restituisce un array con tutte le proprieta di un oggetto (senza i valori)
const keys = Object.keys(obj1); //keys = ['a', 'b', 'c']

//Restituisce un array con 2 elementi per ogni proprieta, il primo è il nome della proprieta e il secondo è il valore
const entries = Object.entries(obj1); //entries = [['a', 1], ['b', 2], ['c', 3]]
//#endregion
//#region Map, Set
//Set è una collezione di valori univoci
const valoriUnici = new Set([
  'pane',
  'vino',
  'olio',
  'pane',
  'olio',
  'pasta',
  'vino',
]);

//Operazioni su Set
valoriUnici.add('pizza'); //Aggiunge un elemento al set

valoriUnici.delete('olio'); //Rimuove un elemento dal set

valoriUnici.size; //Restituisce il numero di elementi nel set

valoriUnici.has('pane'); //Restituisce true se l'elemento è presente nel set, altrimenti false

const arrayValoriUnici = [...valoriUnici];

valoriUnici.clear(); //Elimina tutti gli elementi del set

for (let unique of valoriUnici) console.log(unique); //Puoi anche eseguirci dei loop

//Casi d'uso di Set
//Per eliminare i duplicati da un array
//Set è molto più veloce di un'array per cercare un elemento

//Map è una collezione di coppie chiave-valore
const map = new Map([
  ['a', 1],
  ['b', 2],
  ['c', 3],
]);

//Operazioni su Map
map.set('d', 4); //Aggiunge un elemento alla mappa

map.delete('b'); //Rimuove un elemento dalla mappa

map.size; //Restituisce il numero di elementi nella mappa

map.has('a'); //Restituisce true se la chiave è presente nella mappa, altrimenti false

map.get('a'); //Restituisce il valore associato alla chiave

map.clear(); //Elimina tutti gli elementi della mappa

for (let [key, value] of map) console.log(key, value); //Puoi anche eseguirci dei loop

//Casi d'uso di Map
//Per memorizzare dati in una struttura chiave-valore
//Per memorizzare dati in una struttura ordinata
//Map e Set sono iterabili
//#endregion
//#region Operazioni con le stringhe
const frase = 'Ciao, come stai? Questo è un testo di prova prova';

//Restituisce la lunghezza della stringa
frase.length; //lunghezza = 35

//Restituisce la sottostringa a partire dalla posizione 6
frase.indexOf('come'); //posizione = 6
frase.indexOf('Come'); //posizione = -1 (non trovato perché è case sensitive, quindi restituisce false)

//Restituisce la sottostringa a partire dalla posizione 6
frase.lastIndexOf('come'); //posizione = 6

//Restituisce la sottostringa a partire dalla posizione 6
frase.slice(6); //sottostringa = 'come stai? Questo è un testo di prova'
//Restituisce la sottostringa a partire dalla posizione 6 fino alla posizione 10
frase.slice(6, 10); //sottostringa = 'come'
//Trova l'ultima parola della stringa
frase.slice(frase.lastIndexOf(' ') + 1); //sottostringa = 'prova' (+1 per escludere lo spazio)
//Trova la prima parola della stringa
frase.slice(0, frase.indexOf(' ')); //sottostringa = 'Ciao,'

//Trova un elemento all'interno di una stringa
frase.includes('come'); //true

//Trasforma la stringa in maiuscolo
frase.toUpperCase(); //frase = 'CIAO, COME STAI? QUESTO È UN TESTO DI PROVA'
//Trasforma la stringa in minuscolo
frase.toLowerCase(); //frase = 'ciao, come stai? questo è un testo di prova'

//Sostituisce una sottostringa con un'altra
frase.replace('Ciao', 'Salve'); //frase = 'Salve, come stai? Questo è un testo di prova'
//Sostituisce tutte le occorrenze di una sottostringa con un'altra
frase.replace(/prova/g, 'PROVA'); // /g = global, sostituisce tutte le occorrenze //frase = 'Ciao, come stai? Questo è un testo di PROVA PROVA'

//Restituisce un array con tutte le parole della stringa
frase.split(' '); //array = ['Ciao,', 'come', 'stai?', 'Questo', 'è', 'un', 'testo', 'di', 'prova']

//Restituisce la stringa senza spazi all'inizio e alla fine
frase.trim(); //frase = 'Ciao, come stai? Questo è un testo di prova prova'
'   ciao   '.trim(); //frase = 'ciao'

//Restituisce la stringa con la prima lettera maiuscola
frase.charAt(0).toUpperCase() + frase.slice(1); //frase = 'Ciao, come stai? Questo è un testo di prova prova'
//frase.slice(0, 1).toUpperCase() + frase.slice(1); //frase = 'Ciao, come stai? Questo è un testo di prova prova' (alternativa)
//Restituisce la stringa con la prima lettera di ogni parola maiuscola
const prima_lettera_maiiuscola = function (frase) {
  const parole = frase.split(' ');
  const paroleMaiuscole = [];
  for (const parlola of parole)
    paroleMaiuscole.push(parlola.charAt(0).toUpperCase() + parlola.slice(1));
  const fraseFinaleMaiuscola = paroleMaiuscole.join(' ');
  console.log(fraseFinaleMaiuscola);
  return fraseFinaleMaiuscola;
};

//Restituisce una stringa unica con tutti gli elementi dell'array separati da uno spazio
console.log(['ciao', 'come', 'stai'].join(' ')); //frase = 'ciao come stai'
['ciao', 'come', 'stai'].join('+'); //frase = 'ciao+come+stai' //Quello che metti tra le parentesi è il separatore

//Aggiungi un padding alla stringa per raggiungere una lunghezza specifica
'ciao'.padStart(10, '0'); //frase = '0000000ciao' //Primo valore è la lunghezza totale che si deve raggiungere, il secondo è come si deve riempire
'ciao'.padEnd(10, 'o'); //frase = 'ciaooooooo' //Primo valore è la lunghezza totale che si deve raggiungere, il secondo è come si deve riempire
'Ciao'.padStart(10, '-').padEnd(15, '-'); //frase = '-----Ciao---' //La stringa è lunga 4, quindi aggiunge 6 '-' all'inizio e 5 alla fine, ovvero il padStart arriva fino a 10 e il padEnd arriva fino a 15 (10 + 5)

const nascondi_numeri_carta = function (number) {
  const ultime_cifre = number.toString().slice(-4);
  const numero_carta_nascosto = ultime_cifre.padStart(16, '*');
  console.log(numero_carta_nascosto);
  return numero_carta_nascosto;
};

//Ripeate una stringa un numero di volte specifico
'ciao'.repeat(3, ' '); //
//#endregion
