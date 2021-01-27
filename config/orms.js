const connection = require("../config/connection.js");

const orm = {
    all: function (tableInput, cb) {
        var queryAll = "select * from " + tableInput + ";";
        connection.query(queryAll, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },

    create: function (table, cols, vals, cb) {
        var queryAdd = "insert into " + table;

        queryAdd += " (";
        queryAdd += cols.toString();
        queryAdd += ") ";
        queryAdd += "values (";
        queryAdd += printQuestionMarks(vals.length);
        queryAdd += ") ";

        console.log(queryAdd);

        connection.query(queryAdd, vals, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        })
    },

    update: function (table, objColVals, condition, cb) {
        var queryUpdate = "update " + table;

        queryUpdate += " set ";
        queryUpdate += objToSql(objColVals);
        queryUpdate += " where ";
        queryUpdate += condition;

        console.log(queryUpdate);
        connection.query(queryUpdate, function (err, res) {
            if (err) {
                throw err;
            }
            console.log(res);
            cb(res);
        });
    }
};

module.exports = orm;
