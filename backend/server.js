const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

//middlewares
const app = express();
app.use(cors());
app.use(express.json());

//db connection
mongoose.connect("mongodb://localhost:27017/todoapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
var db = mongoose.connection;
db.on("open", () => {
  console.log("Connected to mongoDB");
});
db.on("error", (error) => {
  console.log(error);
});

//start listening
app.listen(5000, () => {
  console.log("server started on port 5000");
});
