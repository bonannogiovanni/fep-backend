const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv/config");

app.use(cors());
app.use(bodyParser.json());

// Import Routes
const kidsRoutes = require("./routes/kids");
const usersRoutes = require("./routes/users");

app.use("/kids", kidsRoutes);
app.use("/users", usersRoutes);

//ROUTES
app.get("/", (req, res) => {
  res.send("We are on home");
});

mongoose.connect(
  process.env.MONGO_DB_CONNECTION,
  { useNewUrlParser: true },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to DB!");
    }
  }
);

// .then(() => console.log("Connected to DB!"))
// .catch((e) => console.log(e));

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log("REST Server started on port " + PORT);
});

module.exports = app;
