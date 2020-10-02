var express = require("express");
var router = express.Router();

const { signIn, signInCallback, signOut } = require("../controllers/auth.js");

// signin route
router.get("/signin", signIn);

// signin callback route
router.get("/signin/callback", signInCallback);

// signout callback route
router.get("/signout", signOut);

module.exports = router;