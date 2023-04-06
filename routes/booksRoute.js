const routerBook = require('express').Router() //dilangsungkan
const gits = require("../controllers/bookController.js");

/**
 * @swagger
 * 
 * /api/book/:
 *  get:
 *      summary: Book Api
 *      tags:
 *          - Book
 *      responses:
 *          200:
 *              description: OK
 */


// Create a new book
routerBook.post("/book", gits.createBook);
// Retrieve all book
routerBook.get("/book", gits.findBookAll);
// Retrieve a single book with id
routerBook.get("/book/:isbn", gits.findBookOne);
// Update a book with id
routerBook.put("/book/:isbn", gits.updateBook);
// Delete a book with id
routerBook.delete("/book/:isbn", gits.deleteBook);
// Create a new book
routerBook.delete("/bookdestroy", gits.deleteBookAll);


module.exports = routerBook
