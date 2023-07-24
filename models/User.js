const mongoose = require("mongoose");

console.log("model mein aa gye");
const userSchema = new mongoose.Schema({
    
    // let enumm = [];
    name:{
        type : String,
        required : true,
        trim: true,
    },
    email:{
        type : String,
        required : true,
        trim: true,

    },
    password:{
        type : String,
        required : true,
    },
    // role:{
    //     type : String,
    //     enumm: ["admin","student", "visitor"]
    // }
});
console.log("model se chle gye");
module.exports = mongoose.model("user", userSchema);

