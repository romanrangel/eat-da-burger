const orm = require("../config/orm.js");

const burger = {
    selectAll: (cb) => {
      orm.selectAll("burgers", (res) => {
        cb(res);
      });
    },


    // The variables cols and vals are arrays.
    insertOne: (val, cb) => {
      orm.insertOne("burgers", "burger_name", val, (res) => {
        cb(res);
      });
    },


    
    updateOne: (boolean, condition, cb) => {
      orm.updateOne("burgers", "devoured", boolean, condition, (res) => {
        cb(res);
      });
    },
  };
  
  // Export the database functions for the controller (burgersController.js).
  module.exports = burger;
  