const routerBook = require('express').Router() //dilangsungkan
const gits = require("../controllers/bookController.js");

/**
 * @swagger
 * 
 * /api/v1/:
 *  get:
 *      summary: Version API
 *      tags:
 *          - Version
 *      responses:
 *          200:
 *              description: OK
 */


/**
 * @swagger
 * 
 * /weather:
 *  get:
 *      summary: get next 17 days forecast
 *      tags:
 *          - Weather
 *      parameters:
 *          - name: input
 *            description: the city | country | state of the user\'s input
 *            in: query
 *            required: true
 *            schema:
 *                  type: string
 *                  example: tehran
 *      responses:
 *          400:
 *              description: validation errors
 *          503:
 *              description: service errors
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
