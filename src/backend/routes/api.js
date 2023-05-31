const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/endpoint", function(req, res, next) {
  console.log('get "endpoint" route hit');
  res.send({ data: ["Tokyo", "Madrid", "Moscow", "Chicago", "Johannesburg"] });
});

module.exports = router;
