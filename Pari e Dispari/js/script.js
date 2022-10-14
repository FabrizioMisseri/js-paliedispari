// **Pari e Dispari**
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
const userChoice = prompt("scegli pari o dispari");
const userNumber = parseInt(prompt("inserisci un numero da 1 a 5"));
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
const cpuNumber = randomNumber1to5();
console.log(cpuNumber);
// Sommiamo i due numeri
const sum = cpuNumber + userNumber;
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
const result = OddEven(sum);
// Dichiariamo chi ha vinto.
let msg;

if (result === userChoice){
    msg = "you win";
} else {
    msg = "you lose";
}
alert(msg);





// FUNCTIONS

/**
 * Description
 * @param {number} da1a5 minimo della funzione 1 e massimo della funzione 5
 * @returns {number} :restituisce un numero randomico da 1 a 5
 */
function randomNumber1to5 () {
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    return randomNumber;
}


/**
 * Description
 * @param {number} number numero da analizzare;
 * @returns {string} :ouput se pari o dispari
 */
function OddEven(number) {
    let output;

    if (number % 2 === 0) {
        output = "pari";
    } else {
        output = "dispari";
    }

    return output;
}