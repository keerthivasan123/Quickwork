var express = require("express");
var router = express.Router();
const { check, validationResult } = require("express-validator");
const { sendEmail } = require("../controllers/email.js");

// send email route
// @require subject, to , message in req.body.
router.post(
  "/sendEmail",
  [
    check("subject", "subject should be at least 3 char").isLength({ min: 1 }),
    check("to", "Sender email is required").isEmail(),
    check("message", "password should be at least 3 char").isLength({ min: 1 })
  ],
  sendEmail
);

module.exports = router;