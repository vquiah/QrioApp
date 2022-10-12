const Todos = require("../models/Todos");

module.exports = {
    getDashbaord: (req, res) => {
      res.render("dashboard.ejs");
    },
    getStudies: (req, res) => {
      res.render("dashboard.ejs");
    },
    }