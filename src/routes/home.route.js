const express = require("express");

const router = express.Router();

router.route("/").get(async (req, res) => {
  const html = `<h1>Root Page under construction</h1>`;
  return res.send(html);
});

module.exports = router;
