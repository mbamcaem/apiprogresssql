const router = require('express').Router() //dilangsungkan
// const {  getIndex  } = require('../controllers/ctrlBook')
const tutorials = require("../controllers/controller.js");
const books = require("../controllers/controller.js");

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

// router.get("/", getIndex)

// Create a new Tutorial
router.post("/", tutorials.create);
  
// Retrieve all Tutorials
router.get("/", tutorials.findAll);

// Retrieve all published Tutorials
router.get("/published", tutorials.findAllPublished);

// Retrieve a single Tutorial with id
router.get("/:id", tutorials.findOne);

// Update a Tutorial with id
router.put("/:id", tutorials.update);

// Delete a Tutorial with id
router.delete("/:id", tutorials.delete);

// Create a new Tutorial
router.delete("/", tutorials.deleteAll);


module.exports = router
