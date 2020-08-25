const mongoose = require("mongoose");

// ECMA 6
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.set("useCreateIndex", true);
mongoose
    .connect(MONGODB_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    .then(db => console.log("Database is connected"))
    .catch(err => console.log(err));