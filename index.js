const express = require("express"); //hola
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const enterpriseModel = require("./models/Enterprise");

let xlsxRoutes = require("./routes/v0/cargaXlsx");

let PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(
  cors({
    methods: ["GET", "POST"],
  })
);

app.use('/xlsx', xlsxRoutes);

mongoose.connect(process.env.KEY, {
  useNewUrlParser: true,
});

app.get("/", async (req, res) => {
  enterpriseModel.find({}, (err, docs) => {
    if (err) {
      res.send(err);
      console.log(err);
    }

    let doc = docs[docs.length-1]
    res.send(doc);
    console.log(doc);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})