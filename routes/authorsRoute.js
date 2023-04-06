const routerAuthor = require('express').Router() //dilangsungkan
const gits = require("../controllers/authorController.js");

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
