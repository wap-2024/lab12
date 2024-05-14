const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/users.html"));
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.send("POST request to the homepage");
});

module.exports = router;
