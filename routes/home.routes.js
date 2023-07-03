const express = require("express");

const router = express.Router();

router.get("/", (request, response) => {

  response.write("<h1> Home for Players router </h1>");
  response.status(200);
  response.end();
});

module.exports = router;