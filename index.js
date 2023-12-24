// You are a book seller and you want to create a little program to manage your stock

// You need to create multiple functions to get an overview of your stock

// Our entire library
const books = require("./library.json");

// @TODO : complete this function

/**
 * Returns the number of books in stock
 * @param{array} the books in stock
 * @returns{boolean} number of books
 */

console.clear();
console.log("----------------- Length ----------------------");

function nbBooks(arrayBooks) {
  return arrayBooks.length;
}
console.log(nbBooks(books));

console.clear();
console.log("------------- List All Titles ------------------");
/**
 * List efficiently in the console all of the title of the stock
 * @param{array} the books in stock
 */
function listAllTitles(arrayBooks) {
  arrayBooks.forEach((bookTitle) => {
    console.log(bookTitle.title);
  });
}
console.log(listAllTitles(books));

// @TODO : write the following function

/**
 * Add a book inside the stock
 * @param{array} the books in stock
 * @param{string} title of the book
 * @param{string} author of the book
 * @param{string} genre of the book
 * @param{number} pages of the book
 * @param{string} language of the book
 * @param{year} year of the published book
 * @returns{array} the new stock
 */

console.clear();
console.log("--------------- Add Book in Stock -------------------");

/* VERSION 2023 ?? 
function Book(author, title, pages, genre, language, year) {
  {
    (this.author = author),
      (this.title = title),
      (this.pages = pages),
      (this.genre = genre),
      (this.language = language),
      (this.year = year);
  }
}

const newBook = new Book(
  "Lahcen Ijri",
  "Comment développer ?",
  50,
  "Informatique",
  "Anglaiss",
  2033
);

function addBookInStock(library, bookToAdd) {
  library.push(bookToAdd);
}
addBookInStock(books, newBook);
console.log(books);
console.log(nbBooks(books));
*/

// Méthode classique :
function createBook(author, title, pages, genre, language, year) {
  const newBook = {
    author: author,
    title: title,
    pages: pages,
    genre: genre,
    language: language,
    year: year,
  };
  return newBook;
}

function addBookInStock(library, bookToAdd) {
  library.push(bookToAdd);
}

addBookInStock(
  books,
  createBook(
    "Lahcen Ijri",
    "Comment développer ?",
    50,
    "Informatique",
    "Anglaiss",
    2033
  )
);
console.log(books);
console.log(nbBooks(books));

// @BONUS : modify now the current stock with the new stock returned by the function written above

// @TODO : write the same function as above but now it only received an object containg all of the information about a new book to add in the stock

// @TODO : write the following function

/**
 * Add a book inside the stock - new version
 * @param{object} all of the infos about the new book
 * @param{array} the new stock
 */

// @TODO : write the following function

/**
 * Remove a particular book
 * @param{array} stock of books
 * @param{number} index of the book to delete
 */
console.clear();
console.log("----------------- Remove -----------------");

function removeBook(library, bookToRemove) {
  for (const book in library) {
    if (library[book].title === bookToRemove) {
      library.splice(book, 1);
    }
  }
}
console.log(removeBook(books, "Comment développer ?"));
console.log(books);

// @TODO : write the following function
console.clear();
console.log("------------- Update ttl particular book ----------------");

/**
 * Update the title of a particular book
 * @param{array} stock of books
 * @param{string} new title of the book
 */

function updateTo(library, toUpdate, updateIn) {
  let ttlToUpdt = library.filter((book) => book.title === toUpdate);
  ttlToUpdt[0].title = updateIn;
}
console.log(updateTo(books, "1984", "1999"));
console.log(books);

// @TODO : write the following functions

/**
 * Add a book inside the stock - new version
 * @param{object} all of the infos about the new book
 * @param{array} the new stock
 */

// @TODO : write a function that list in the console only the books written in English
console.clear();
console.log("---------- books written in English -------------");

function onlyEnglish(library, language) {
  let result = library.filter((book) => book.language === language);
  return result;
}
console.log(onlyEnglish(books, "English"));

// @TODO : write a function that list in the console only the books that have more than 300 pages
console.clear();
console.log("------------- more than 300 pages ----------------");

function moreToPages(library, numberOfPages) {
  let result = library.filter((book) => book.pages > numberOfPages);
  return result;
}
console.log(moreToPages(books, 300));
// @TODO : write a function that returns all of the books written between 2000 (excluded) and 2010
console.clear();
console.log("-------- between 2000 (excluded) and 2010 ---------");

function btwen2000And2010(library, yearOne, yearTwo) {
  let result = library.filter(
    (book) => book.year > yearOne && book.year <= yearTwo
  );
  return result;
}
console.log(btwen2000And2010(books, 2000, 2010));

// @TODO write a function that returns all of the books with the genre "Fantasy" and in English
console.clear();
console.log("------------- more than 300 pages ----------------");

function filterTwoArg(library, genre, language) {
  let result = library.filter(
    (book) => book.genre === genre && book.language === language
  );
  return result;
}
console.log(filterTwoArg(books, "Fantasy", "English"));
// BONUS:

// @TODO write a function that returns a book that contains the word ride inside it's title
console.clear();
console.log("------------- more than 300 pages ----------------");

function includesThis(library, word) {
  let result = library.filter((book) => book.title.includes(word));
  return result;
}
console.log(includesThis(books, "ride"));

console.clear();
console.log("------------- more than 300 pages ----------------");
