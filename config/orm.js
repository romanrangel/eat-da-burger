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

    update: (tableInput, cols, boolean, condition, cb) => {
        var queryString = `update ${tableInput} SET ${cols} = ${boolean} WHERE ${condition}`;
        connection.query(queryString, (err, res) => {
            if (err) {
                throw err;
            }
            cb(result);
        });

    },
};

module.exports = orm;
