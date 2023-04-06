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
