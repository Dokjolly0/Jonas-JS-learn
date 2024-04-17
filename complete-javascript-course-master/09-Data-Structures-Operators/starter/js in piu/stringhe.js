//Recap di tutti i metodi per le stringhe
const stringa = 'Stringa';

stringa.length; //Restituisce la lunghezza della stringa
//Output: 7

stringa.indexOf('a'); //Restituisce la posizione della prima occorrenza del carattere
//Output: 3

stringa.lastIndexOf('a'); //Restituisce la posizione dell'ultima occorrenza del carattere
//Output: 6

stringa.slice(2); //Restituisce la sottostringa a partire dalla posizione 2
//Output: 'ringa'

stringa.slice(2, 4); //Restituisce la sottostringa a partire dalla posizione 2 fino alla posizione 4
//Output: 'ri'

stringa.slice(-1); //Restituisce gli ultimi 3 caratteri della stringa
//Output: 'nga'

stringa.slice(0, -3); //Restituisce la stringa escludendo gli ultimi 3 caratteri
//Output: 'Stri'

stringa.toUpperCase(); //Restituisce la stringa in maiuscolo
//Output: 'STRINGA'

stringa.toLowerCase(); //Restituisce la stringa in minuscolo
//Output: 'stringa'

stringa.replace('a', 'o'); //Sostituisce la prima occorrenza di 'a' con 'o'
//Output: 'Stringo'

stringa.replace(/a/g, 'o'); //Sostituisce tutte le occorrenze di 'a' con 'o'
//Output: 'Stringo'

stringa.split(''); //Restituisce un array con tutti i caratteri della stringa
//Output: ['S', 't', 'r', 'i', 'n', 'g', 'a']

stringa.trim(); //Restituisce la stringa senza spazi all'inizio e alla fine
//Output: 'Stringa'

stringa.charAt(0).toUpperCase() + stringa.slice(1); //Restituisce la stringa con la prima lettera maiuscola
//Output: 'Stringa'

stringa.charAt(0).toUpperCase() + stringa.slice(1); //Restituisce la stringa con la prima lettera maiuscola
//Output: 'Stringa'

stringa.padEnd(10, '*'); //Aggiunge '*' alla fine della stringa fino a raggiungere la lunghezza di 10
//Output: 'Stringa***'

stringa.padStart(10, '*'); //Aggiunge '*' all'inizio della stringa fino a raggiungere la lunghezza di 10
//Output: '***Stringa'

stringa.repeat(3); //Ripete la stringa 3 volte
//Output: 'StringaStringaStringa'

stringa.startsWith('S'); //Restituisce true se la stringa inizia con 'S'
//Output: true

stringa.endsWith('a'); //Restituisce true se la stringa finisce con 'a'
//Output: true

stringa.includes('tri'); //Restituisce true se la stringa include 'tri'
//Output: true

stringa.match(/a/g); //Restituisce un array con tutte le occorrenze di 'a'
//Output: ['a'] //Se ne trova più di una ['a', 'a', 'a'] ecc.

stringa.search('a'); //Restituisce la posizione della prima occorrenza di 'a'
//Output: 3

stringa.charCodeAt(0); //Restituisce il codice ASCII del carattere alla posizione 0
//Output: 83

String.fromCharCode(83); //Restituisce il carattere corrispondente al codice ASCII 83
//Output: 'S'
