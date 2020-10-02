const fs = require("fs");
const { googleOAuth } = require("../middleware/googleOAuth");

const SCOPES = ["https://www.googleapis.com/auth/gmail.send"];

const TOKEN_PATH = "token.json";

// this function is used to generateAuthUrl.
function getNewToken(oAuth2Client, res) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
  });
  res.redirect(authUrl);
}

// Signin controller used to generate AuthUrl. 
exports.signIn = async (req, res) => {
  const oAuth2Client = await googleOAuth(res);
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getNewToken(oAuth2Client, res);
    res.status(200).send("Already Signed In");
  });
};

// Signin callback controller used to create token.json file. 
exports.signInCallback = async (req, res) => {
  const code = req.query.code;
  const oAuth2Client = await googleOAuth(res);
  await oAuth2Client.getToken(code, (err, token) => {
    if (err) return console.error("Error retrieving access token", err);
    oAuth2Client.setCredentials(token);
    // Store the token to disk for later program executions
    fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
      if (err) return console.error(err);
      console.log("Token stored to", TOKEN_PATH);
    });
    res.send("successfully logged In");
  });
};

// Signout deletes the token.json file.
exports.signOut = (req, res) => {
  try {
    if (!fs.existsSync(TOKEN_PATH)) {
      res.send("Please Signin");
    } else
    {
      fs.unlinkSync(TOKEN_PATH)
      res.send("Signed Out Successfully");
    }
  } catch(err) {
    console.error(err)
    res.send("Error in Signing out");
  }
}
