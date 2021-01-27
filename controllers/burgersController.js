const express = require("express");

const burgers = require("../models/burger");

const router = express.Router();

router.get("/", (req, res) => {
    burgers.all((data) => {
      const hbsObject = {
        burgers: data,
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });


  router.post("/api/burgers", (req, res) => {
    burger.create(
      { name: req.body.name},
      (result) => {
        // Send back the ID of the new burger
        res.json({ id: result.insertId });
      }
    );
  });

  router.put("/api/burgers/:id", (req, res) => {
    const condition = { id: req.params.id };
    const update = { devoured: req.body.value };
  
    burger.update(update, condition, (result) => {
      if (result.affectedRows === 0) {
        // If no rows were affected, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    });
  });

module.exports = router;