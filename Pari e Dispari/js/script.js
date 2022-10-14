// **Pari e Dispari**
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
const userNumber = parseInt(prompt("inserisci un numero da 1 a 5"));
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
const cpuNumber = randomNumber1to5();
console.log(cpuNumber);
// Sommiamo i due numeri
const sum = cpuNumber + userNumber;
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
OddEven(sum);
// Dichiariamo chi ha vinto.
alert(msg);





// FUNCTIONS
function randomNumber1to5 () {
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    return randomNumber;
}