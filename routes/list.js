const express = require("express");
const List = require("../modules/list");
const router = express.Router();
router.get("/", (req, res) => {
  List.find({}, (err, data) => {
    res.json(data);
  });
});
router.get("/:id", (req, res) => {
  List.findById(req.params.id, (err, data) => {
    res.json(data);
  });
});
router.delete("/:id", async (req, res) => {
  await List.findByIdAndDelete(req.params.id);
  res.json({ message: "delete" });
});
router.post("/", (req, res) => {
  list = new List({
    name: req.body.name,
    id: req.body.id,
    category: req.body.category,
    purchasePrice: req.body.purchasePrice,
    sellingPrice: req.body.sellingPrice,
  });
  list.save(() => {
    res.json(list);
  });
});
router.put("/:id", async (req, res) => {
  await List.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "update" });
});
module.exports = router;
