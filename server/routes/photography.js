var express = require("express");
var router = express.Router();

/* GET photography page. */
router.get("/", function (req, res, next) {
  res.render("photography", { title: "Photography" });
});

module.exports = router;
