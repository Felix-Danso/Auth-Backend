const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb://localhost:27017/Login-tut")

//check database connected or not
connect.then((db) => {
    console.log("Database connected");
})
.catch((err) => {
    console.log("Database cannot be connected");
})

//create a schema
const LoginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

//collection Part
const collection = new mongoose.model("user", LoginSchema)

module.exports = collection;