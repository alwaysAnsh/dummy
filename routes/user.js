const express = require("express");
const router = express.Router;

const {signup} = require("../controllers/Auth");

// router.post("/login", login);
console.log("kyunki route wale folder mein dikkat hai");
router.post("/signup", signup);

//export krwa do
module.exports = router;