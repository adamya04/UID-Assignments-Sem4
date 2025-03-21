
function capitalizeWords(sentence) {
    return sentence.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

let sentence = prompt("Enter a sentence:");
console.log(capitalizeWords(sentence));