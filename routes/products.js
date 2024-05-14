const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/products.html"));
});

router.post("/add", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/product-add.html"));
});

module.exports = router;
