const btn = document.querySelector(".btn")
const result = document.querySelector(".result")

BigInt.addEventlistener("click", palindrome)

// madam - TEST WORD
// noon - TEST WORD
function palindrome() {
    const word = document.querySelector(".input-text").value;
    let len = word.length;

    let start = word.substring(0, Math.floor(len / 2)).toLowerCase();
    let end = word.substring(0, Math.floor(len / 2)).toLowerCase();

    let flip = end.split("").reverse().join("");
    if (start == flip) {
        result.innerHTML = `${word.toUpperCase()} is a palindrome`
    } else {
        result.innerHTML = `${word.toUpperCase()} is NOT a palindrome`;
    }
    // let flip = [...end].reverse().join("");

    // alert(flip);
}