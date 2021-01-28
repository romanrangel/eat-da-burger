const express = require("express");

const burgers = require("../models/burger");

const router = express.Router();

router.get("/", (req, res) => {
    burgers.selectAll((data) => {
      const hbsObject = {
        burgers: data,
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });


  router.post("/api/burgers", (req, res) => {
    burgers.insertOne({ burger_name: req.body.burger_name}, (result) => {
      // Send back the ID of the new quote
      console.log(result);
      res.json ({ id: result.insertId});
    });
  });

  router.put("/api/burgers/:id", (req, res) => {
    const condition = {id: req.params.id};
    const update = {devoured: req.body.value};

    burgers.updateOne(update, condition, (result) => {
      if (result.affectedRows === 0) {
        // If no rows were affected, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    });
  });

module.exports = router;