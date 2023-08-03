const router = require("express").Router();
const phoneJson = require("../data/phones.json");

router.get("/", (req, res, next) => {
  res.json(phoneJson);
});

module.exports = router;
