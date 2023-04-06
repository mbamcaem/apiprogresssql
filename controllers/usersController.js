const db = require("../models");
const { hashHmacSha256 } = require("../utils");
const Gits = db.gits;

// Create and Save a new User
exports.createUser = (req, res) => {
  // Validate request
  if (!req.body.password) {
   res.status(400).send({
     message: "Password can not be empty!"
   });
   return;
 }
 if (!req.body.email) {
   res.status(400).send({
     message: "Email can not be empty!"
   });
   return;
 }

 // Create a User
 const user = {
   password: hashHmacSha256(req.body.password, process.env.NEXT_PUBLIC_SECRET),
   email: req.body.email
 };

 // Save user in the database
 Gits.User.create(user)
   .then(data => {
     res.send(data);
   })
   .catch(err => {
     res.status(500).send({
       message:
         err.message
     });
   });
};
//login
exports.userLogin = (req, res) => {
  Gits.User.findAll({
    where: { email: req.body.email, password: hashHmacSha256(req.body.password, process.env.NEXT_PUBLIC_SECRET)  }
  })
  .then(num => {
      console.log("Num", num.length);
      if (num.length == 1) {
        res.send({
          message: "Login success"
        });
      } else {
        res.send({
          message: `Unauthorized, please login with correct email and password !`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error " + err.message
      });
    });
};