const { google } = require("googleapis");
const fs = require("fs");
var credentials = require("../credentials.json");

//This is the callback used to set googleOAuth 
exports.googleOAuth = async (res) => {
  if (!credentials) {
    res.send("Pls set the credentials file in root folder");
  }
  const {
    client_secret,
    client_id,
    redirect_uris,
  } = await credentials.installed;

  const oAuth2Client = await new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  );
  return oAuth2Client;
};
