const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

const movementsModel = require("./models/Movements");

let PORT = process.env.PORT || 3001;

app.use(express.json());

app.use(
  cors({
    methods: ["GET", "POST"],
  })
);

mongoose.connect(process.env.KEY, {
  useNewUrlParser: true,
});

app.get("/", async (req, res) => {
  movementsModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
      console.log(err);
    }

    res.send(result);
    console.log(result);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})