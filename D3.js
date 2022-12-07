/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 1");

const a = 4;
const b = 6;

if (a > b) {
  console.log(a);
} else if (b > a) {
  console.log(b);
} else if (b === a) {
  console.log("I numeri sono uguali");
} else {
  console.log("Errore!");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esecizio 2");

let c = 30;
//c = 5;
if (c !== 5) {
  console.log("not equal");
} else {
  console.log("I numeri sono uguali");
}
/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 3");
let d = 50;

if (d % 5 === 0) {
  console.log("divisibile per 5");
} else {
  console.log("resto diverso da 0");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 4");
let e = 6;
let f = 2;

if (e === 8 || f === 8 || e + f === 8 || e - f === 8) {
  console.log(true);
} else {
  console.log(false);
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
  */

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 5");

let totalShoppingCart = 54;
let shippingCost = 10;
let checkout$ = totalShoppingCart + shippingCost;
if (totalShoppingCart > 50) {
  shippingCost = 0;
} else {
  shippingCost = 10;
}
console.log("Il totale da pagare è: ", checkout$);

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 6");

let newTotalShoppingCart = totalShoppingCart * 0.8;
if (newTotalShoppingCart > 50) {
  shippingCost = 0;
} else {
  shippingCost = 10;
}
let newcheckout$ = newTotalShoppingCart + shippingCost;
console.log("Il nuovo totale da pagare è: ", newcheckout$);

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 7");

let g = 3;
let h = 2;
let i = 1;
if (g < h || g < i) {
  console.log(g);
} else if (h < g || h < i) {
  console.log(h);
} else if (i < g || i < h) {
  console.log(i);
}
/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 8");

let l = "valore";
console.log(typeof l);
if (typeof l === "string") {
  console.log("Il valore fornito non è un numero");
} else if (typeof l === "number") {
  console.log("Il valore fornito è un numero");
} else {
  console.log("errore");
}
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 9");

let m = 10;
let n = m / 2;

if (Number.isInteger(n)) {
  console.log("Il numero è pari");
} else {
  console.log("Il numero non è pari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 10");
let val = 5;
if (val >= 5 && val < 10) {
  console.log("Meno di 10");
} else if (val < 5) {
  console.log("Meno di 5");
} else if (val >= 10) {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 11");

me.city = "Toronto";
console.log(me.city);
/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 12");

delete me.lastName;
console.log(me.lastName);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 13");

delete me.skills[2];
console.log(me.skills);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 14");

const nInteri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(nInteri);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 15");

nInteri[9] = 100;
console.log(nInteri);
