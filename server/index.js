const express = require("express");
const app = express();
const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://kevniew33055:<password>@strand.k879t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

app.listen(5000, () => {
    console.log("Backend server is running!")
});