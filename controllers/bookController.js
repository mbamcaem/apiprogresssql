const db = require("../models");
const Gits = db.gits;
const Op = db.Sequelize.Op;

// Create and Save a new book
exports.createBook = (req, res) => {
  // Validate request
  if (!req.body.title) {
   res.status(400).send({
     message: "Title can not be empty!"
   });
   return;
 }
 if (!req.body.authorid) {
   res.status(400).send({
     message: "Authorid can not be empty!"
   });
   return;
 }
 if (!req.body.publisherid) {
  res.status(400).send({
    message: "publisherid can not be empty!"
  });
  return;
}

 // Create a Book
 const book = {
  ISBN: req.body.ISBN,
  title: req.body.title,
  authorId: req.body.authorid,
  publisherId: req.body.publisherid
 };

 // Save Book in the database
 Gits.Book.create(book)
   .then(data => {
     res.send(data);
   })
   .catch(err => {
    console.log("error ", err.message);
     res.status(500).send({
       message:
         err.message || "Some error occurred while creating the Book."
     });
   });
};
// Retrieve all book from the database.
exports.findBookAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

  Gits.Book.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving book."
      });
    });
};
// Find a single book with an id
exports.findBookOne = (req, res) => {
    const isbn = req.params.isbn;

    Gits.Book.findByPk(isbn)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find book with isbn=${isbn}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving book with isbn=" + isbn
        });
      });
};
// Update an Book by the id in the request
exports.updateBook = (req, res) => {
  const isbn = req.params.isbn;
  Gits.Book.update(req.body, {
    where: { ISBN: isbn }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Book was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Book with isbn=${isbn}. Maybe Book was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Book with isbn=" + isbn
      });
    });
};
// Delete a Book with the specified id in the request
exports.deleteBook = (req, res) => {
    const isbn = req.params.isbn;

    Gits.Book.destroy({
      where: { ISBN: isbn }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Book was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Book with isbn=${isbn}. Maybe Book was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Book with isbn=" + isbn
        });
      });
};
// Delete all Book from the database.
exports.deleteBookAll = (req, res) => {
  Gits.Book.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Book were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Book."
          });
        });
};
