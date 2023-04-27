// Hands on Typescript Assignment
// created an array of books
var books = [
    { id: 1,
        title: "Oh, the Places You'll Go",
        author: "Dr. Seuss",
        published: new Date("1/22/1990"),
        available: true
    },
    { id: 2,
        title: "The Very Hungry Caterpillar",
        author: "Eric Carle",
        published: new Date("3/23/1994"),
        available: true
    },
    { id: 3,
        title: "Brown Bear, Brow Bear, What Do You See?",
        author: "Bill Martin Jr.",
        published: new Date("9/15/1996"),
        available: true
    },
    { id: 4,
        title: "I am Slappys Twin",
        author: "R.L Stine",
        published: new Date("9/26/2017"),
        available: true
    }
];
// define a function addBook(book: Book): void
function addBook(book) {
    books.push(book);
}
// define a function findBookById(id: number): Book | undefined
function findBookById(id) {
    return books.find(function (book) { return book.id == id; });
}
// define a function updateBook(book: Book): boolean
function updateBook(book) {
    var index = books.findIndex(function (b) { return b.id === book.id; });
    if (index !== -1) {
        books[index] = book;
        return true;
    }
    return false;
}
;
// define a function removeBook(id: number): boolean
function removeBook(id) {
    var index = books.findIndex(function (book) { return book.id === id; });
    if (index !== -1) {
        books.splice(index, 1);
        return true;
    }
    return false;
};

addBook(
    { id: 5, 
      title: "How to Babysit a Grandma", 
      author: "Jean Reagan", 
      published: new Date("3/27/2018"), 
      available: true });
  
console.log(removeBook(1));
  console.log(findBookById(3));
  console.log(updateBook({
    id: 2, 
    title: "The Wonderful Things You Will Be",
    author: "Emily Winfield Martin",
    published: new Date("8/25/2015"),
    available: true
  }));
  console.log(books);