// **Pari e Dispari**
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
let userChoice = String(prompt("scegli tra pari o dispari"));
const userChoiceChecked = OddOrEvenValidatorChoice(userChoice);

let userNumber = parseInt(prompt("inserisci un numero da 1 a 5"));
let userNumberChecked = numberValidator(userNumber);
console.log("if numero o stringa", typeof(userNumberChecked), userNumberChecked);
const userNumberChecked1to5 = numberValidator1to5(userNumberChecked);
console.log("numero 1 to 5", userNumberChecked1to5);
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
const cpuNumber = randomNumber1to5();
console.log(cpuNumber);
// Sommiamo i due numeri
const sum = cpuNumber + userNumberChecked1to5;
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
const result = OddEven(sum);
// Dichiariamo chi ha vinto.
let msg;

if (result === userChoiceChecked){
    msg = `you win ${sum}`;
} else {
    msg = `you lose ${sum}`;
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


/**
 * Description
 * @param {string} checkPariDispari stringa che può assumere solo valore: "pari" o "dispari"
 * @returns {string} output stringa verificata
 */
function OddOrEvenValidatorChoice(checkPariDispari) {
    
    const pari = "pari";
    const dispari = "dispari";

    while (checkPariDispari !== pari && checkPariDispari !== dispari) {
        checkPariDispari = prompt("Non hai scelto pari o dispari. Perfavore riprova");
        }

    const output = checkPariDispari; 
    
    return output;
}


/**
 * Description
 * @param {number} checkNumber valore da verificare se numerico
 * @returns {number} output verificata identità numerica
 */
function numberValidator(checkNumber) {
    while (checkNumber % 1 !== 0) {
        checkNumber = parseInt(prompt("per favore inserisci un numero"));
    }

    const output = checkNumber;

    return output;
}


/**
 * Description
 * @param {number} checkNumber valore input da verificare SE tra 1 e 5
 * @returns {number} output verificato numero tra 1 e 5
 */
function numberValidator1to5(checkNumber) {
    while (checkNumber < 1 || checkNumber > 5){
        checkNumber = parseInt(prompt("il numero scelto non è compreso tra 1 e 5. Perfavore riprova"))
    }

    const output = checkNumber;

    return output;
}