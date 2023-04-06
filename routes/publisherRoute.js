const routerPublisher = require('express').Router() //dilangsungkan
const gits = require("../controllers/publisherController.js");

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


// Create a new publisher 
routerPublisher.post("/publisher", gits.createPublisher);
// Retrieve all publisher
routerPublisher.get("/publisher", gits.findPublisherAll);
// Retrieve a single publisher
routerPublisher.get("/publisher/:id", gits.findPublisherOne);
// Update a publisher with id
routerPublisher.put("/publisher/:id", gits.updatePublisher);
// Delete a publisher with id
routerPublisher.delete("/publisher/:id", gits.deletePublisher);
// Create a new publisher
routerPublisher.delete("/publisherdestroy", gits.deletepublisherAll);

module.exports = routerPublisher
