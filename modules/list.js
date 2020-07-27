const mongoose = require("mongoose");
const Schema = mongoose.Schema;

newSchema = new Schema({
  name: String,
  id: Number,
  category: String,
  purchasePrice: Number,
  sellingPrice: Number,
});

module.exports = mongoose.model("List", newSchema);
