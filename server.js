const express = require("express");
const mongoose = require("mongoose");
// require("dotenv").config();

const app = express();
const port = 8080;
// const mongoURI = process.env.DATABASE_URL;

mongoose.connect('mongodb+srv://singhdharmu89:03F1JtdHnSnKLul8@cluster0.wcw3ygc.mongodb.net/subscribers', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});
db.once("open", () => {
  console.log("---Connected to MongoDB");
});

// pars data into json file
app.use(express.json());

const subscriberRouter = require("./routes/subscribers");

app.use('/subscribers', subscriberRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
