const db = require("../models");
const Gits = db.gits;
const Op = db.Sequelize.Op;

// Create and Save a new Author
exports.createAuthor = (req, res) => {
   // Validate request
   if (!req.body.name) {
    res.status(400).send({
      message: "Name can not be empty!"
    });
    return;
  }
  if (!req.body.email) {
    res.status(400).send({
      message: "Email can not be empty!"
    });
    return;
  }

  // Create a author
  const author = {
    name: req.body.name,
    email: req.body.email
  };

  // Save author in the database
  Gits.Author.create(author)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the author."
      });
    });
  };    
// Retrieve all Author from the database.
  exports.findAuthorAll = (req, res) => {
      const name = req.query.name;
      var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;
    
      Gits.Author.findAll({ where: condition })
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving Authors."
          });
        });
  };
// Find a single Author with an id
exports.findAuthorOne = (req, res) => {
  const id = req.params.id;

  Gits.Author.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Author with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Author with id=" + id
      });
    });
};
// Update an author by the id in the request
exports.updateAuthor = (req, res) => {
    const id = req.params.id;
    Gits.Author.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Author was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Author with id=${id}. Maybe Author was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Author with id=" + id
        });
      });
};
// Delete a Author with the specified id in the request
exports.deleteAuthor = (req, res) => {
  const id = req.params.id;

  Gits.Author.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Author was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Author with id=${id}. Maybe Author was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Author with id=" + id
      });
    });
};
// Delete all Author from the database.
exports.deleteAuthorAll = (req, res) => {
  Gits.Author.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Author were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Author."
          });
        });
};





// Create and Save a new publisher
exports.createPublisher = (req, res) => {
  // Validate request
  if (!req.body.name) {
   res.status(400).send({
     message: "Name can not be empty!"
   });
   return;
 }
 if (!req.body.email) {
   res.status(400).send({
     message: "Email can not be empty!"
   });
   return;
 }

 // Create a Publisher
 const publisher = {
   name: req.body.name,
   email: req.body.email
 };

 // Save Publisher in the database
 Gits.Publisher.create(publisher)
   .then(data => {
     res.send(data);
   })
   .catch(err => {
     res.status(500).send({
       message:
         err.message || "Some error occurred while creating the Publisher."
     });
   });
};
// Retrieve all publisher from the database.
exports.findPublisherAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;

  Gits.Publisher.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Publisher."
      });
    });
};
// Find a single Publisher with an id
exports.findPublisherOne = (req, res) => {
  const id = req.params.id;

  Gits.Publisher.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find publisher with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving publisher with id=" + id
      });
    });
};
// Update an Publisher by the id in the request
exports.updatePublisher = (req, res) => {
  const id = req.params.id;
  Gits.Publisher.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Publisher was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Publisher with id=${id}. Maybe Publisher was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Publisher with id=" + id
      });
    });
};
// Delete a Publisher with the specified id in the request
exports.deletePublisher = (req, res) => {
  const id = req.params.id;

  Gits.Publisher.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Publisher was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Publisher with id=${id}. Maybe Publisher was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Publisher with id=" + id
      });
    });
};
// Delete all Publisher from the database.
exports.deletepublisherAll = (req, res) => {
  Gits.Publisher.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Publisher were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Publisher."
          });
        });
};





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
