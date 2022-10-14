// **Palindroma**
// Chiedere all’utente di inserire una parola
const input = palindrome(prompt("inserisci una parola"));

console.log("TXT: ", input);

alert(input);









// Creare una funzione per capire se la parola inserita è palindroma.
/**
 * Description
 * @param {string} word è la parola da inserire per la verifica del palindromo
 * @returns {string} msg: è il msg output
 */

function palindrome(word) {
    
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

    let msg;

    if (checkPalindrome === true) {
        msg = "non ci vuole un genio per capire che la tua parola è un palindromo";
    } else {
        msg = "idiota nn vedi che ci sono lettere diverse";
    }

    return msg;
}