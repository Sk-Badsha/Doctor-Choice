

// IMPORT EXPRESS SERVER
const express = require("express");

// USE Router FOR EXPRESS SERVER
const router = express.Router();

const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: true }));

//uuid require for unique IDs
const { v4: uuidv4 } = require("uuid");

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
const secretKey = "Badsha";
//IMPORT EMPLOYEE MODEL AND BIND IT
const AdminModel = require("../models/admin_schema");

// post is used to INSERT DOCUMENT/RECORD
// CALLBACK using lambda
router.post(
  "/register",
  (req, res) => {
    AdminModel.find({
      $or: [{ email: req.body.email }],
    }).then((getElement) => {
      if (getElement.length > 0) {
        return res.send([]);
      } else {
        bcrypt.hash(req.body.password, 10).then((encpass) => {
          //Create Object of Employee Model Class
          // And Receive value from request body and Store value within the Object

          const adminobj = new AdminModel({
            id: uuidv4(),
            email: req.body.email,
            password: encpass,
          }); //CLOSE EmpModel
          //INSERT/SAVE THE RECORD/DOCUMENT
          adminobj
            .save()
            .then((inserteddocument) => {
              res.status(200).send(inserteddocument);
            }) //CLOSE THEN
            .catch((err) => {
              res
                .status(500)
                .send({ message: err.message || "Error in Admin Save " });
            });
        }); //CLOSE CATCH
      }
    });
  } //CLOSE CALLBACK FUNCTION BODY Line 27
); //CLOSE POST METHOD Line 26

router.post("/login", (req, res) => {
  //Create Object of Employee Model Class
  // And Receive value from request body and Store value within the Object
  AdminModel.find({ email: req.body.email })
    .then((getsearchdocument) => {
      if (getsearchdocument.length > 0) {
        let enteredpassword = req.body.password;
        let storedpassword = getsearchdocument[0].password;
        bcrypt.compare(enteredpassword, storedpassword).then((result) => {
          if (result == false) {
            res.send();
          } else 
          res.json({message: "Yeah Boy!" ,
          getsearchdocument });
        }); //CLOSE CATCH
      } //CLOSE CALLBACK FUNCTION BODY
      else {
        res.send();
      }
    })
    .catch((err) => {
      return res.status(500).send({
        message: "DB Problem..Error in Retriving with User ",
      });
    });
});

module.exports = router;
