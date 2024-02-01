//Va sempre messo come prima riga di codice nel file js, ti permette di trovare errori che altrimenti non noteresti
"use strict"
//Funzioni senza parametri
function Log() {
    console.log("Ciao, io sono Alex!");
}
//Log();
//Funzione console.log
function log(frase) { console.log(frase); return frase; }
//Funzioni con i parametri (Aggiungi sempre return) (Funzione dichiarata) Puoi chiamarle anche prima di averle inizializzate
function creaSucco1(mela, arancia) {
    const succo = `Succo con ${mela} mele e ${arancia} arance`;
    log(succo);
    return succo;
}
//const succoMela = creaSucco1(4, 0);
//`Succo con 4 mele e 0 arance`;
//const succoAranciaMela = creaSucco1(3, 3);
//`Succo con 3 mele e 3 arance`;

//(Funzione assegnata) Puoi chiamarle solo dopo averle inizializzate
const eta = function (anno) {
    const annoCorrente = 2023;
    anno = annoCorrente - anno;
    return anno;
}
//log(eta1(2003));

//(Arrow function) Piu veloci da scrivere usando sempre massimo un parametro
const eta2 = anno => log(2023 - anno);
const calcoloPensionamento1 = anno => 65 - anno;
//eta2(2003);

//Arrow function con piu parametri e righe
const calcoloPensionamento = (anno, nome) => {
    const anni = eta(anno);
    const anniRimanenti = calcoloPensionamento1(anni);
    return `${nome}, andare in pensione ti mancano ${anniRimanenti} anni.`;
}
const pensionamentoAlex = calcoloPensionamento(2003, "Alex");
log(pensionamentoAlex);

function tagliaFrutta(frutta) { return frutta * 4; }

function creaSucco(mela, arancia) {
    const pezziMela = tagliaFrutta(mela);
    const pezziArancia = tagliaFrutta(arancia);
    const succo = `Succo con ${pezziMela} pezzi di mele e ${pezziArancia} pezzi di arance`;
    log(succo);
    return succo;
}
creaSucco(2, 3);
console.clear();

/*
Torniamo alle due squadre di ginnastica, i Delfini e i Koala! C'è una nuova disciplina di ginnastica 
che funziona in modo diverso. Ogni squadra gareggia 3 volte, e poi si calcola la media dei 3 punteggi 
(quindi una media per squadra). Una squadra vince solo se ha almeno il doppio della media del punteggio 
dell'altra squadra. In caso contrario, nessuna squadra vince!
I tuoi compiti:
1. Crea una funzione freccia 'calcAverage' per calcolare la media di 3 punteggi.
2. Usa la funzione per calcolare la media per entrambe le squadre.
3. Crea una funzione 'checkWinner' che prende la media del punteggio di ciascuna squadra come parametri 
('avgDolphins' e 'avgKoalas'), e poi registra il vincitore sulla console, insieme ai punti della vittoria, 
secondo la regola sopra. Esempio: "I Koala vincono (30 vs 13)".
4. Usa la funzione 'checkWinner' per determinare il vincitore sia per Data 1 che per Data 2.
5. Ignora i pareggi questa volta.
Dati di prova:
§ Data 1: I Delfini ottengono 44, 23 e 71. I Koala ottengono 65, 54 e 49.
§ Data 2: I Delfini ottengono 85, 54 e 41. I Koala ottengono 23, 34 e 27.

*/

const calcAverage = (P1, P2, P3) => (P1 + P2 + P3) / 3;

function checkWinner(delfini, koala) {
    if (delfini >= (koala * 2)) {
        log(`Vince questa competizione la squadra dei Delfini con un punteggio di ${delfini}`);
    } else if (koala >= (delfini * 2)) {
        log(`Vince questa competizione la squadra dei Koala con un punteggio di ${koala}`);
    } else {
        log(`Nessuna delle 2 squadre ha ottenuto il doppio dei punti dell'altra squadra, quindi non vince nessuno!`);
    }
}
const mediaDelfini = calcAverage(85, 54, 41);//44, 23, 71
const mediaKoala = calcAverage(23, 34, 27);//65, 54, 49
checkWinner(mediaDelfini, mediaKoala);
console.clear();

//Array
const amici = ["Jonny", "Marco", "Gabriele", "Giovanni", "Luca"];
//Gli array partono dallo 0
amici[0];
amici[0] = "Pietro";
//Questo è il modo per selezionare un elemento
log(amici);
const anni = new Array(2000, 2001, 2002, 2003);
//Sintassi diverse ma risultato uguale

//Proprietà degli array
amici.length;//La lenght parte da 1
//Serve per ricavare il numero totale di elementi dentro un array

amici.unshift("Giacomo");//Serve per aggiungere all'inizio di un'array un elemento

amici.push("Mattia");//Serve per aggiungere alla fine di un'array un elemento

amici.shift();//Rimuoverà il primo elemento di un array

amici.pop();//Rimuoverà l'ultimo elemento di un array

amici.indexOf("Marco");//Serve per trovare la posizione specifica di un elemento nell'attay (Partendo da 0)
//Se non lo trova restituirà come valore -1

amici.includes("Marco");//Verifica se un elemento è presente in un array, se lo è restituirà true, altrimenti false

/*
let mancia = 0;
function calcTip(totale) {
    if (totale >= 50 && totale <= 300) {
        mancia = (totale / 100) * 15;
        tips.push(mancia);
    } else {
        mancia = (totale / 100) * 20;
        tips.push(mancia);
    }
    return mancia;
}

const bills = [125, 555, 44];//18.75 - 111 - 8.8
const tips = [];
const totals = [];

calcTip(bills[0]);
calcTip(bills[1]);
calcTip(bills[2]);

totals[0] = bills[0] + tips[0];
totals[1] = bills[1] + tips[1];
totals[2] = bills[2] + tips[2];

console.log(bills, tips, totals);
*/
const Alex = {
    nome: "Alex",
    cognome: "Violatto",
    lavoro: ["Studente", "Fattorino"],
    lingua: "Italiano",
    sesso: "Maschio",
    amici: ["Jonny", "Marco", "Gabriele", "Giovanni", "Luca"],
    patente: true,
    annoNascita: 2003,

    reecap: function () {
        log(`${this.nome} è uno ${this.lavoro[0]} di ${this.eta} anni e ${this.patente === true ? "ha conseguito la patente." : "non ha ancora conseguito la patente."}`);
    },

    calcolaEta: function () {
        this.eta = 2023 - this.annoNascita;
        return this.eta;
    },
}
//Differenze, con le quadre puoi inserire qualche espressione, con il punto no
log(Alex.nome);
log(Alex["nome"]);

//log(Alex.scelta); //Undefined
//log(Alex[scelta]);//["Studente", "Fattorino"]
//Questa è la grande differenza tra le 2 notazioni
/*
const scelta = prompt();
if (Alex[scelta]) {
    log(Alex[scelta])
} else { log('non conosco questa risposta!'); }
*/
//log(`${Alex.nome} ha ${Alex.amici.length} amici, il suo migliore amico è ${Alex.amici[0]}`);

//Proprieta oggetti:

Alex.Posizione = "Italia";//Aggiunge un elemento all'oggetto
//Alex["Posizione"] = "Italia";
Alex.calcolaEta();
Alex.reecap();
log(Alex.eta);
console.clear();

//Alex è uno studente di 20 anni e ha la patente

/*
const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    
    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    },
};

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    
    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    },
};

mark.calcBMI();
john.calcBMI();

let maggiore, minore, P1, P2;

if(mark.bmi > john.bmi){
    maggiore = mark.bmi;
    minore = john.bmi;
    
}else if(john.bmi < mark.bmi){
    maggiore = john.bmi;
    minore = mark.bmi;
}

if(maggiore === mark.bmi){
    P1 = "Mark Miller";
}else if(maggiore === john.bmi){
    P1 = "Jonn Smith";
}
if(minore === mark.bmi){
    P2 = "Mark Miller";
}else if(minore === john.bmi){
    P2 = "Jonn Smith";
}

//console.log(maggiore, minore, P1, P2);
console.log(`${P1}'s BMI (${maggiore}) is higher than ${P2}'s (${minore})!`);
*/

const tipo = [];
const gianni = ["Gianni", "Gandini", 36, "Maschio", "Laureato", true];
// const gianniString = [];
// const gianniNumber = [];
// const gianniBool = [];

for (let i = 0; i < gianni.length; i++) {
    //if (i === 7) { break; } //Terminare il ciclo se si verifica una condizione

    tipo[i] = typeof gianni[i];
    tipo.push(typeof gianni[i]);
}
// log(tipo);

const anniCalcolati = [];

for (let i = 0; i < anni.length; i++) {
    //anniCalcolati.push(anni[i]);
    //anniCalcolati[i] = anni[i];
    //anniCalcolati[i] = 2023 - anniCalcolati[i];

    anniCalcolati.push(2023 - anni[i])
}
//log(anniCalcolati);

for (let i = 0; i < 10; i++) {
    //if (i !== 4) continue;//Con questa sintassi stampera solo il 4
    if (i === 4) continue; //Salta questa ripetizione del ciclo se i è uguale a 4 (non stampera il numero 4)
    if (i === 7) break; //Interrompi completamente il ciclo se i è uguale a 7
    //log(i);
}

const comando = "Accendi la luce";
const char = [];

//Questo è un metodo per esaminare carattere per carattere e salvarlo in un array
for (let i = 0; i < comando.length; i++) {
    //char.push(comando[i]);    //Metodo con array
    char[i] = comando.charAt(i) //Metodo con charAt
}
//log(char);

for (let i = gianni.length - 1; i >= 0; i--) {
    log(gianni[i]);
}
console.clear();
for (let esercizio = 1; esercizio <= 3; esercizio++) {
    log(`Inizia il ${esercizio} esercizio!`)
    for (let ripetizione = 1; ripetizione <= 15; ripetizione++) {
        log(`Esercizio ${esercizio}: ripetizione numero ${ripetizione}`);
    }
}
console.clear();

let dado = Math.trunc(Math.random() * 6) + 1;
while (dado !== 6) {
    log(`è uscito il numero ${dado} dal dado!`);
    dado = Math.trunc(Math.random() * 6) + 1;
    if (dado === 6) log(`è uscito il numero 6 dal dado!`)
}
console.clear();


const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

/* Write your code below. Good luck! 🙂 */

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const totals = [];
const tips = [];

for (let i = 0; i < bills.length; i++) {
    tips[i] = calcTip(bills[i]);
    totals[i] = tips[i] + bills[i];
}
console.log(totals, tips, bills);

function bonus(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    //log(sum);
    return sum / arr.length;
}
log(bonus(totals));
