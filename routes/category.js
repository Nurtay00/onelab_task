const express = require("express");
const Category = require("../modules/category");
const router = express.Router();

router.get("/", (req, res) => {
  Category.find({}, (err, data) => {
    res.json(data);
  });
});
router.get("/:id", (req, res) => {
  Category.findById(req.params.id, (err, data) => {
    res.json(data);
  });
});
router.delete("/:id", async (req, res) => {
  await Category.findByIdAndDelete(req.params.id);
  res.json({ message: "delete" });
});
router.post("/", (req, res) => {
  user = new Category({
    category: req.body.category,
  });
  user.save(() => {
    res.json(user);
  });
});

module.exports = router;
