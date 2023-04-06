const router = require('express').Router() //dilangsungkan
const gits = require("../controllers/controller.js");

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



// Create a new author
router.post("/author", gits.createAuthor);
// Retrieve all author
router.get("/author", gits.findAuthorAll);
// Retrieve a single author
router.get("/author/:id", gits.findAuthorOne);
// Update a author with id
router.put("/author/:id", gits.updateAuthor);
// Delete a author with id
router.delete("/author/:id", gits.deleteAuthor);
// Create a new author
router.delete("/authordestroy", gits.deleteAuthorAll);




// Create a new publisher 
router.post("/publisher", gits.createPublisher);
// Retrieve all publisher
router.get("/publisher", gits.findPublisherAll);
// Retrieve a single publisher
router.get("/publisher/:id", gits.findPublisherOne);
// Update a publisher with id
router.put("/publisher/:id", gits.updatePublisher);
// Delete a publisher with id
router.delete("/publisher/:id", gits.deletePublisher);
// Create a new publisher
router.delete("/publisherdestroy", gits.deletepublisherAll);






// Create a new book
router.post("/book", gits.createBook);
// Retrieve all book
router.get("/book", gits.findBookAll);
// Retrieve a single book with id
router.get("/book/:isbn", gits.findBookOne);
// Update a book with id
router.put("/book/:isbn", gits.updateBook);
// Delete a book with id
router.delete("/book/:isbn", gits.deleteBook);
// Create a new book
router.delete("/bookdestroy", gits.deleteBookAll);

module.exports = router
