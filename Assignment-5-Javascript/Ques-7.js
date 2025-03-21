function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; fib[i-1] + fib[i-2] < n; i++) {
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib;
}

let randomNum = generateRandomNumber();
console.log(`Random number: ${randomNum}`);
console.log(`Fibonacci numbers below ${randomNum}: ${fibonacci(randomNum)}`);