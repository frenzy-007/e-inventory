const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ Text: "Welcome to the user route!" });
});

module.exports = router;
