const resourcesCtrl = {};

// Models
//const User = require('../models/User');

// Modules
const passport = require("passport");

// Dashboard
resourcesCtrl.dashboard = (req, res) => {
    res.render("at-resources/dashboard");
};

// Backlog
resourcesCtrl.backlog = (req, res) => {
    res.render("at-resources/backlog");
};

// Active Sprint
resourcesCtrl.activeSprint = (req, res) => {
    res.render("at-resources/activeSprint");
};

resourcesCtrl.tests = (req, res) => {
    res.render("at-resources/test");
};

module.exports = resourcesCtrl;