//Unica volta
//Installa node, live server, (Estensioni: ESLint, path intellisense, Prettier)
//Installa Typescript in globale (npm install -g typescript)

//Ogni volta
//Per compilare un file di TypeScript in Javascript divi fare: (tsc nomefile.ts)

//Assegnazioni ts (valori primitivi)
const stringa1: string = "Ciao";
const numero1: number = 10;
const bool1: boolean = true;
//Assegnazioni ts (strutture di dati)
const arr1: number[] = [1, 2, 3];
//Se vuoi fare un array con tipi di dato diversi usa any
const arr2: any[] = [1, "f", true];
//Array lunghezza fissa (Array di 2 numeri)
const step: [number, number] = [1, 2];
//Dichiarazione oggetto
const persona: {
  nome: string;
  cognome: string;
  eta: number;
} = {
  nome: "Alex",
  cognome: "Violatto",
  eta: 20,
};
persona.nome;
//Funzioni
function nuovoUsar(user: { id: number; email: string; password: string }) {
  console.log(user.id, user.email, user.password);
}
const data = {
  id: 1,
  email: "pippoballi@gmail.com",
  password: "nuovaPassword1",
};
//Meno parametri da mettere
nuovoUsar(data);

//Any lo puoi usare quando vuoi inizializzare qualcosa in modo generico
const arr3: any[] = [1, "", true];
//Union (mettimi solo...)
const prova: string | string[] = "";

//Oggetti avanzati (Quando inizia ad avere diversi parametri)
type Prova = string | string[];
type Persona = {
  nome: string;
  cognome: string;
  eta: number;
  indirizzo: string;
  cap: number;
  hobby: string[];
  sposato: boolean;
};
let utente1: Persona;
function trovaPersona(utente1: Persona) {}

//enum (etichette)
//Se premi vuoi prendere la proprietà ruolo ti suggerisce in automatico tutti i ruoli disponibili
enum Ruolo {
  admin = "Admin",
  user = "User",
  guest = "Guest",
}
const user = {
  username: "qwerty",
  nome: "Pippo",
  ruolo: Ruolo,
};
//Ex
user.ruolo.admin;

//dichiari il tipo dei parametri e il tipo del valore ritornaro
function F1(num1: number, num2: number): number {
  return 0;
}
//Void non deve ritornare valori ex conlose.log
function F2(num1: number, num2: number): void {
  console.log();
}
//Parametri di default (se non metti niente di default saranno quelli)
//Se metti i parametri di default non serve specificare il tipo dei parametri perche lo capisce da solo
function F3(num1 = 0, num2 = 0) {}

//Questa funzione è usata quando non sai quanti parametri avrai
function somma(...args: number[]): number {
  let risultato: number = 0;
  for (let i = 0; i < args.length; i++) {
    risultato += args[i];
  }
  return risultato;
}

console.log(somma(1, 2, 3, 4));

//Compiler
//tsc nomeFile.ts -w compilera il file ogni volta che salvi il file
//Ma ne compilera uno solo, se vuoi compilarne di piu devi:
//tsc --init (creera un file config.json che gestira tutto)
//tsc -w (compila in automatico tutti i file ts nel folder)
//Rootdir 29, Outdir 58(emit)
