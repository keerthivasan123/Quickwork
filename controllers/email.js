const { check, validationResult } = require("express-validator");
const fs = require("fs");
const { google } = require("googleapis");
const { googleOAuth } = require("../middleware/googleOAuth");

const TOKEN_PATH = "token.json";

// this function is used to generate the base64 encoded message.
const makeBody = (params) => {
  params.subject = new Buffer.from(params.subject).toString("base64");
  const str = [
    'Content-Type: text/plain; charset="UTF-8"\n',
    "MINE-Version: 1.0\n",
    "Content-Transfer-Encoding: 7bit\n",
    `to: ${params.to} \n`,
    `from: ${params.from} \n`,
    `subject: =?UTF-8?B?${params.subject}?= \n\n`,
    params.message,
  ].join(""); // <--- Modified
  return new Buffer.from(str)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
};

// Send Email send the given message in the body to the recipient.
exports.sendEmail = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }

  const raw = makeBody({
    to: req.body.to,
    subject: req.body.subject,
    message: req.body.message,
  });

  const oAuth2Client = await googleOAuth(res);
  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return res.send("Pls Signin");
    oAuth2Client.setCredentials(JSON.parse(token));
    const gmail = google.gmail({ version: "v1", auth: oAuth2Client });
    gmail.users.messages.send(
      {
        userId: "me",
        resource: {
          raw: raw,
        },
      },
      (err, result) => {
        // Error in sending Email.
        if (err) {
          console.log(err);
          res.send("Error in Sending Email");
          return;
        }
        // Email Successfully sent
        res.send({
          res: result.data,
          message: "Email Sent Successfully",
        });
      }
    );
  });
};
