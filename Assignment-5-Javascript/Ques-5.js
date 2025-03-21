
function daysUntilNewYear() {
    let today = new Date();
    let nextNewYear = new Date(today.getFullYear() + 1, 0, 1);
    let diff = nextNewYear - today;
    let daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24));
    
    console.log(`Today's date is: ${today.toDateString()}`);
    console.log(`Days left until New Year: ${daysLeft}`);
}
daysUntilNewYear();