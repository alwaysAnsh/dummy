
const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.use(express.json());



//import all the routes
console.log("idhr pe dikkat hai");
const userr = require("./routes/user");

//mounting ka kaam 
app.use("/api/v1", userr);

app.listen(PORT, () => {
    console.log(`Application started succesfully at ${PORT}`);
})
// const dbconnect = require("./config/database");
// dbconnect();
require("./config/database").connect();