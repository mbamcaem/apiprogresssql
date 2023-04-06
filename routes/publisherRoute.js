const routerPublisher = require('express').Router() //dilangsungkan
const gits = require("../controllers/publisherController.js");

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
