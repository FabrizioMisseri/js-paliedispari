// **Palindroma**
// Chiedere all’utente di inserire una parola
const word = prompt("inserisci una parola");
// Creare una funzione per capire se la parola inserita è palindroma.
const array = word.split('');
console.log(array);

const arrayLength = array.length;
let checkPalindrome = true;

for (i = 0; i < (arrayLength); i++) {
    let arrayLengthMinus = ((arrayLength - 1) - i);
    if (array[i] != array[arrayLengthMinus]) {
        checkPalindrome = false;
        console.log("controllo checkPalindrome", checkPalindrome);
    }
}

console.log("checkPalindrome è", checkPalindrome);

