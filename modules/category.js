const mongoose = require("mongoose");
const Schema = mongoose.Schema;

newSchema = new Schema({ category: String });

module.exports = mongoose.model("Category", newSchema);
