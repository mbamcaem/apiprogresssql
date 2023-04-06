const routerAuthor = require('express').Router() //dilangsungkan
const gits = require("../controllers/authorController.js");

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
routerAuthor.post("/author", gits.createAuthor);
// Retrieve all author
routerAuthor.get("/author", gits.findAuthorAll);
// Retrieve a single author
routerAuthor.get("/author/:id", gits.findAuthorOne);
// Update a author with id
routerAuthor.put("/author/:id", gits.updateAuthor);
// Delete a author with id
routerAuthor.delete("/author/:id", gits.deleteAuthor);
// Create a new author
routerAuthor.delete("/authordestroy", gits.deleteAuthorAll);



module.exports = routerAuthor
