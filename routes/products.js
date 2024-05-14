const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/products.html"));
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.send("POST request to the homepage");
});

module.exports = router;
