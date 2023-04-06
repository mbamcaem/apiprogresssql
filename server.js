require('dotenv').config()
const express = require("express");
const cors = require("cors");
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./controllers/swagger.controller')
const app = express();
const routeUser = require('./routes/usersRoute')
const routerAuthor = require('./routes/authorsRoute')
const routerPublisher = require("./routes/PublisherRoute");
const routerBook = require("./routes/booksRoute");

app.use('/api-docs', swaggerUi.serve, swaggerDocument)
app.use(cors());
app.options("*", cors());


// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use("/api", routeUser)
app.use("/api", routerAuthor)
app.use("/api", routerPublisher)
app.use("/api", routerBook)

const db = require("./models");

// drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// set port, listen for requests
const PORT = process.env.NEXT_PUBLIC_DATABASE_PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});