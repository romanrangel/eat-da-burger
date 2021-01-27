const express = require("express");

const cat = require("../models/burger");

const router = express.Router();

router.get("/", (req, res) => {
    cat.all((data) => {
      const hbsObject = {
        burgers: data,
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

module.exports = router;