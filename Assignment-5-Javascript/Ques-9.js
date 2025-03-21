
let books = [
    { title: "Book A", author: "Author 1", cost: 600 },
    { title: "Book B", author: "Mahatma Gandhi", cost: 300 },
    { title: "Book C", author: "Author 3", cost: 800 }
];

console.log("Books with cost > 500:");
books.filter(book => book.cost > 500).forEach(book => console.log(book.title));

console.log("Book by Mahatma Gandhi:");
let bookByGandhi = books.find(book => book.author === "Mahatma Gandhi");
if (bookByGandhi) console.log(bookByGandhi.title);