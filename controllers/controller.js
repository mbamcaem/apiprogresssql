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

// Create and Save a new Author
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

// Create and Save a new Author
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
     res.status(500).send({
       message:
         err.message || "Some error occurred while creating the Book."
     });
   });
};


// // Retrieve all Tutorials from the database.
// exports.findAll = (req, res) => {
//     const title = req.query.title;
//     var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;
  
//     Gits.findAll({ where: condition })
//       .then(data => {
//         res.send(data);
//       })
//       .catch(err => {
//         res.status(500).send({
//           message:
//             err.message || "Some error occurred while retrieving tutorials."
//         });
//       });
// };

// // Find a single Tutorial with an id
// exports.findOne = (req, res) => {
//     const id = req.params.id;

//     Gits.findByPk(id)
//       .then(data => {
//         if (data) {
//           res.send(data);
//         } else {
//           res.status(404).send({
//             message: `Cannot find Tutorial with id=${id}.`
//           });
//         }
//       })
//       .catch(err => {
//         res.status(500).send({
//           message: "Error retrieving Tutorial with id=" + id
//         });
//       });
// };

// // Update a Tutorial by the id in the request
// exports.update = (req, res) => {
//     const id = req.params.id;

//     Gits.update(req.body, {
//       where: { id: id }
//     })
//       .then(num => {
//         if (num == 1) {
//           res.send({
//             message: "Tutorial was updated successfully."
//           });
//         } else {
//           res.send({
//             message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
//           });
//         }
//       })
//       .catch(err => {
//         res.status(500).send({
//           message: "Error updating Tutorial with id=" + id
//         });
//       });
// };

// // Delete a Tutorial with the specified id in the request
// exports.delete = (req, res) => {
//     const id = req.params.id;

//     Gits.destroy({
//       where: { id: id }
//     })
//       .then(num => {
//         if (num == 1) {
//           res.send({
//             message: "Tutorial was deleted successfully!"
//           });
//         } else {
//           res.send({
//             message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
//           });
//         }
//       })
//       .catch(err => {
//         res.status(500).send({
//           message: "Could not delete Tutorial with id=" + id
//         });
//       });
// };

// // Delete all Tutorials from the database.
// exports.deleteAll = (req, res) => {
//   Gits.destroy({
//         where: {},
//         truncate: false
//       })
//         .then(nums => {
//           res.send({ message: `${nums} Tutorials were deleted successfully!` });
//         })
//         .catch(err => {
//           res.status(500).send({
//             message:
//               err.message || "Some error occurred while removing all tutorials."
//           });
//         });
// };

// // Find all published Tutorials
// exports.findAllPublished = (req, res) => {
//   Gits.findAll({ where: { published: true } })
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving tutorials."
//       });
//     });
// };