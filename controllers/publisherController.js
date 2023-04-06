const db = require("../models");
const Gits = db.gits;
const Op = db.Sequelize.Op;

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