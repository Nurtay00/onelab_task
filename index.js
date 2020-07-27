const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const port = process.env.PORT || 5000;
mongoose.connect(
  // process.env.MONGODB_URI ||
  "mongodb+srv://nurtay:asdf@cluster0.heoih.gcp.mongodb.net/app?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/list", require("./routes/list"));
app.use("/categories", require("./routes/category"));

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "client", "build", "index.html"));
//   });
// }
app.listen(port);
