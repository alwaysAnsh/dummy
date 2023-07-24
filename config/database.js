const mongoose = require("mongoose");

require("dotenv").config();

exports.connect = ()=>{
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("db connection successs");
    })
    .catch((err) => {
        console.log("db connection faliled");
        console.error(err);
        process.exit(1);
    });
}