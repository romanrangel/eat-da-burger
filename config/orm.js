const connection = require("../config/connection.js");

const orm = {
    selectAll: (tableInput, cb) => {
        const queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    insertOne: (tableInput, cols, cb) => {
        const queryString = 'INSERT INTO ?? SET ?'
        const values = [tableInput, cols];

        connection.query(queryString, values, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    updateOne: (tableInput, cols, condition, cb) => {
        const queryString = 'update ?? SET ? WHERE ?';
        const values = [tableInput, cols, condition, cd];

        console.log(queryString);
        connection.query(queryString, values, (err, res) => {
            if (err) {
                throw err;
            }
            cb(result);
        });

    },
};

module.exports = orm;
