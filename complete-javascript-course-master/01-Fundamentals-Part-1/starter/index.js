
/*const country = 'Italian';
const continent = 'Europe';
let population = 10;
const isIsland = false;
let language;
language = "Italian";
// ** significa fare due elevato alla sesta
//console.log(2 ** 6); //Potenza 2 elevato alla 6

const mMark = 78;
const mJonn = 92;
const aMark = 1.69;
const aJonn = 1.95;

const bmiMark = mMark / (aMark ** 2);
const bmiJonn = mJonn / (aJonn ** 2);

const maggiore = bmiMark > bmiJonn;
console.log(bmiMark, bmiJonn);
console.log(maggiore);

const inputUtente = window.prompt(`Inserisci la tua età:`);
if (inputUtente >= 18) {
    console.log(`Sei abilitato per prendere la patente!`);
} else {
    console.log(`Non sei abilitato per prendere la patente!`);
    console.log(`Per prendere la patente ti mancano ${18 - inputUtente} anni`);

}
const mMark = 78;
const mJonn = 92;
const aMark = 1.69;
const aJonn = 1.95;

let bmiMark = mMark / (aMark ** 2);
let bmiJonn = mJonn / (aJonn ** 2);

if (bmiMark > bmiJonn) {
    console.log(`Il valore di massa corporea di Mark è più elevato rispetto a quello di Jonn!`);
    console.log(`Il BMI di Mark (${bmiMark}) è piu alto del BMI di Jonn (${bmiJonn})`)
}
else if (bmiJonn > bmiMark) {
    console.log(`Il valore di massa corporea di Jonn è più elevato rispetto a quello di Mark!`);
    console.log(`Il BMI di Jonn (${bmiJonn}) è piu alto del BMI di Mark (${bmiMark})`)
}
else {
    console.log(`I lore valori di massa corporea seno uguali!`);
}
*/
/*
let mediaDelfini;
let mediaKoala;

mediaDelfini = (96 + 108 + 89) / 3; //96 + 108 + 89
mediaKoala = (88 + 91 + 110) / 3; //88 + 91 + 110
console.log(mediaDelfini, mediaKoala);

if (mediaDelfini > mediaKoala) {
    console.log("La squadra dei delfini ha vinto il trofeo!");
} else if (mediaDelfini < mediaKoala) {
    console.log("La squadra dei koala ha vinto il trofeo!");
} else {
    console.log("La squadr dei delfini e la squadra dei koala hanno pareggiato, si dovra disputare la finale!");
}

let mediaDelfini;
let mediaKoala;

mediaDelfini = (97 + 112 + 101) / 3; //97 + 112 + 101
mediaKoala = (109 + 95 + 123) / 3; //109 + 95 + 123
console.log(mediaDelfini, mediaKoala);

if (mediaDelfini > mediaKoala && mediaDelfini >= 100) {
    console.log("La squadra dei delfini ha vinto il trofeo!");
} else if (mediaKoala > mediaDelfini && mediaKoala >= 100) {
    console.log("La squadra dei koala ha vinto il trofeo!");
} else if (mediaDelfini === mediaKoala) {
    console.log("La squadr dei delfini e la squadra dei koala hanno pareggiato, si dovra disputare la finale!");
} else {
    console.log("nessuna delle 2 squadre ha totalizzato il punteggio minimo per vincere :(");
}

const day = "mercoledi";
let nome = "Alex";

if (day === "mercoledi" || day === "giovedi") {
    console.log("Ma quanto sono figo!🕵️‍♀️");
} else {
    console.log("Ma quanto faccio cagare!😞");
}

//Semplificare il codice
//Per compattare il codice questa forma puo tornare molto utile
const frase = day === "mercoledi" || day === "giovedi" ? "Ma quanto sono figo!🕵️‍♀️" : "Ma quanto faccio cagare!😞";
console.log(frase);
//Si puo usare anche dentro il ternary orerator al contrario dell'if/else
console.log(`Il mio cognome è ${nome === "Alex" ? "Violatto" : "?"}`);*/

const totale = window.prompt("Inserisci il totale del conto🧾");
let mancia;


mancia = totale >= 50 && totale <= 300 ? mancia = (totale / 100) * 15 : mancia = (totale / 100) * 20;
//let mancia;
//if (totale >= 50 && totale <= 300) { mancia = (totale / 100) * 15 } else { mancia = (totale / 100) * 20 }
console.log(`Hai guadagnato una mancia di ${mancia} euro da un valore totale di ${totale}`);
