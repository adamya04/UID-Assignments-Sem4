
function categorizeTemperature(temp) {
    if (temp < 0) return "Freezing";
    if (temp >= 0 && temp <= 15) return "Cold";
    if (temp >= 16 && temp <= 30) return "Moderate";
    return "Hot";
}

let temp = prompt("Enter temperature:");
console.log(`The temperature is: ${categorizeTemperature(parseInt(temp))}`);