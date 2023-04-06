const routerUser = require('express').Router() //dilangsungkan
const gits = require("../controllers/usersController.js");

// Create a new user 
routerUser.post("/user", gits.createUser);
// Login
routerUser.post("/login", gits.userLogin);

module.exports = routerUser
