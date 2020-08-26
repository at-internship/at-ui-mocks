const resourcesCtrl = {};

// Models
//const User = require('../models/User');

// Modules
const passport = require("passport");

// Dashboard
resourcesCtrl.dashboard = (req, res) => {
    res.render("at-resources/dashboard");
};

module.exports = resourcesCtrl;