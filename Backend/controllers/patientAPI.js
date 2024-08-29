const sgmail = require("@sendgrid/mail");

// const API_KEYS =
// <<<<------------- SET YOUR API KEYS-------------->>>>
const API_KEYS = process.env.API_KEYS;

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
const secretKey = process.env.SECRET_KEY;
//IMPORT EMPLOYEE MODEL AND BIND IT
const PatientModel = require("../models/patient_schema");

// post is used to INSERT DOCUMENT/RECORD
// CALLBACK using lambda
router.post(
  "/register",
  (req, res) => {
    PatientModel.find({
      $or: [{ email: req.body.email }],
    }).then((getElement) => {
      if (getElement.length > 0) {
        return res.send([]);
      } else {
        bcrypt.hash(req.body.password, 10).then((encpass) => {
          //Create Object of Employee Model Class
          // And Receive value from request body and Store value within the Object

          const patientobj = new PatientModel({
            Firstname: req.body.Firstname,
            lastname: req.body.lastname,
            id: uuidv4(),
            email: req.body.email,
            mobileno: req.body.mobileno,
            address1: req.body.address1,
            address2: req.body.address2,
            state: req.body.state,
            city: req.body.city,
            zip: req.body.zip,
            termsConditionsStatus: req.body.termsConditionsStatus,
            password: encpass,
          }); //CLOSE EmpModel
          //INSERT/SAVE THE RECORD/DOCUMENT
          patientobj
            .save()
            .then((inserteddocument) => {
              res.status(200).send(inserteddocument);
            }) //CLOSE THEN
            .catch((err) => {
              res
                .status(500)
                .send({ message: err.message || "Error in Employee Save " });
            });
        }); //CLOSE CATCH
      }
    });
  } //CLOSE CALLBACK FUNCTION BODY Line 27
); //CLOSE POST METHOD Line 26

router.post("/login", (req, res) => {
  //Create Object of Employee Model Class
  // And Receive value from request body and Store value within the Object
  PatientModel.find({ email: req.body.email })
    .then((getsearchdocument) => {
      if (getsearchdocument.length > 0) {
        let enteredpassword = req.body.password;
        let storedpassword = getsearchdocument[0].password;
        bcrypt.compare(enteredpassword, storedpassword).then((result) => {
          if (result == false) {
            res.send();
          } else
            jwt.sign(
              { getsearchdocument: [0] },
              secretKey,
              { expiresIn: "300s" },
              (err, Token) => {
                res.json({ Token, getsearchdocument });
              }
            );
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

router.get("/reset-password/:id/:token", (req, res, next) => {
  const { id, token } = req.params;
  // console.log(req.params);
  //check if id is presend or not
  PatientModel.find({ id: req.params.id }).then((user) => {
    if (user.length > 0) {
      console.log("Inside if part");
      console.log(req.params.token);

      // we have a valid id & a valid user exist with this id
      const secret = secretKey + user[0].password;
      try {
        const payload = jwt.verify(req.params.token, secret);
        res.render("form");
      } catch (error) {
        console.log(error.message);
        res.send(error.message);
      }
    } else {
      res.send({ message: "hi" });
      return;
    }
  });
});

router.post("/reset-password/:id/:token", (req, res, next) => {
  const { id, token } = req.params;
  const { password, password2 } = req.body;

  console.log(req.body.password);
  //check if id is presend or not
  PatientModel.find({ id: req.params.id }).then((user) => {
    if (user.length > 0) {
      // we have a valid id & a valid user exist with this id
      const secret = secretKey + user[0].password;
      try {
        const payload = jwt.verify(req.params.token, secret);
        console.log(req.params.id);
        bcrypt
          .hash(password, 10)
          .then((encpass) => {
            PatientModel.findOneAndUpdate(
              {
                id: req.params.id,
              },

              {
                $set: {
                  password: encpass,
                },
              },
              { new: true }
            ).then((user) => {
              res.status(200).send({
                message: " password Reset Successfully",
              });
            });
          })
          .catch((err) => {
            console.log(err);
            return res
              .status(500)
              .send({ message: "DB Problem..Error in UPDATE with id " });
          }); // CLOSE CATCH
      } catch (error) {
        console.log(error.message);
        res.send(error.message);
      }
    } else {
      res.send({ message: "hi" });
      return;
    }
  });
});

router.post("/forgot-password", (req, res, next) => {
  PatientModel.find({ email: req.body.email }).then((getsearchdocument) => {
    if (getsearchdocument.length > 0) {
      // user exist now crete a one time password reset link for 5 mins
      const secret = secretKey + getsearchdocument[0].password;
      const payload = {
        email: getsearchdocument[0].email,
        id: getsearchdocument[0].id,
      };
      const token = jwt.sign(payload, secret, { expiresIn: "300s" });

      const link = `http://localhost:5000/patient/reset-password/${getsearchdocument[0].id}/${token}`;
      console.log(link);
      sgmail.setApiKey(API_KEYS);
      const message = {
        to: req.body.email,
        from: {
          name: "Doctor Choice",
          email: "badshabhotaps@gmail.com",
        },

        subject: "Reset Password Link",
        html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
        <table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8"
    style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: 'Open Sans', sans-serif;">
    <tr>
        <td>
            <table style="background-color: #f2f3f8; max-width:670px;  margin:0 auto;" width="100%" border="0"
                align="center" cellpadding="0" cellspacing="0">
                <tr>
                    <td style="height:80px;">&nbsp;</td>
                </tr>
                <tr>
                    <td style="text-align:center;
                        ">
                      <a href="" title="logo" target="_blank">
                        <img width="250" height="250" src="https://static.vecteezy.com/system/resources/previews/003/063/237/non_2x/male-doctor-medical-insurance-doctor-s-appointment-vector.jpg" title="logo" alt="logo">
                      </a>
                    </td>
                </tr>
                <tr>
                    <td style="height:20px;">&nbsp;</td>
                </tr>
                <tr>
                    <td>
                        <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0"
                            style="max-width:670px;background:#fff; border-radius:3px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);">
                            <tr>
                                <td style="height:40px;">&nbsp;</td>
                            </tr>
                            <tr>
                                <td style="padding:0 35px;">
                                    <h1 style="color:#1e1e2d; font-weight:500; margin:0;font-size:32px;font-family:'Rubik',sans-serif;">You have
                                        requested to reset your password</h1>
                                    <span
                                        style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;"></span>
                                    <p style="color:#455056; font-size:15px;line-height:24px; margin:0;">
                                        We cannot simply send you your old password. A unique link to reset your
                                        password has been generated for you. To reset your password, click the
                                        following link and follow the instructions.
                                    </p>
                                    <a href=""
                                        style="background:#20e277;text-decoration:none !important; font-weight:500; margin-top:35px; color:#fff;text-transform:uppercase; font-size:14px;padding:10px 24px;display:inline-block;border-radius:50px;">Reset
                                        Password</a>
                                        <h1></h1>
                                </td>
                            </tr>
                            <tr>
                                <td style="height:40px;">&nbsp;</td>
                            </tr>
                        </table>
                    </td>
                <tr>
                    <td style="height:20px;">&nbsp;</td>
                </tr>
                <tr>
                    <td style="text-align:center;">
                        <p style="font-size:14px; color:rgba(69, 80, 86, 0.7411764705882353); line-height:18px; margin:0 0 0;">&copy; <strong>www.DoctorChoice.com</strong></p>
                    </td>
                </tr>
                <tr>
                    <td style="height:80px;">&nbsp;</td>
                </tr>
            </table>
        </td>
    </tr>
    </table>
    </body>
        </html>`,
      };

      sgmail
        .send(message)
        .then((res) => console.log("mail send to your email"))
        .catch((err) => console.log(err.message));
      res.status(200).send(JSON.stringify(getsearchdocument[0].email));
      // res.send(JSON.stringify(getsearchdocument[0].email));
    } else {
      res.send();
    }
  });
});
// router.get(
//   "/viewall",
//   (req, res) => {
//     EmpModel.find()
//       .then((getalldocumentsfrommongodb) => {
//         res.status(200).send(getalldocumentsfrommongodb);
//       }) //CLOSE THEN
//       .catch((err) => {
//         res
//           .status(500)
//           .send({ message: err.message || "Error in Fetch Employee " });
//       }); //CLOSE CATCH
//   } //CLOSE CALLBACK FUNCTION BODY
// ); //CLOSE GET METHOD
// //SHOULD BE EXPORTED

// router.delete('/deleteprofile/:v1', (req,res) => {
//   EmpModel.findOneAndDelete({ "Uemail": req.params.v1}).then(getdetails => {
//     console.log(getdetails)
//     return res.send(getdetails)
//   })
// })

router.post("/afteruserlogin", verifyToken, (req, res) => {
  jwt.verify(req.token, secretKey, (err, authData) => {
    if (err) {
      res.send({ result: "no login" });
    } else {
      res.json({
        message: "Hiii there! I am 'afteruserlogin' API ",
        authData,
      });
    }
  });
});
// Verify Token
function verifyToken(req, res, next) {
  // Get auth header value
  const bearerHeader = req.headers["authorization"];
  // Check if bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    // Split at the space
    const bearer = bearerHeader.split(" ");
    // Get token from array
    const bearerToken = bearer[1];
    // Set the token
    req.token = bearerToken;
    // Next middleware
    next();
  } else {
    // Forbidden
    res.send({ result: "no login" });
  }
}
module.exports = router;
