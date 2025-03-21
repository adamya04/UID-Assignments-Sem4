

function factorial(num) {
    if (num < 0) return "Invalid input";
    if (num === 0 || num === 1) return 1;
    return num * factorial(num - 1);
}

let num = prompt("Enter a number:");
let fact = factorial(parseInt(num));
console.log(`Factorial of ${num} is ${fact}`);
alert(`Factorial of ${num} is ${fact}`);