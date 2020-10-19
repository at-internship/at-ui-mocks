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

// Sprint
resourcesCtrl.sprint = (req, res) => {
    res.render("at-resources/sprint");
};

// Members
resourcesCtrl.members = (req, res) => {
    res.render("at-resources/members");
};

// Teams
resourcesCtrl.teams = (req, res) => {
    res.render("at-resources/teams");
};

// Mentors
resourcesCtrl.mentors = (req, res) => {
    res.render("at-resources/mentors");
};

// Metrics
resourcesCtrl.metrics = (req, res) => {
    res.render("at-resources/metrics");
};

resourcesCtrl.tests = (req, res) => {
    res.render("at-resources/test");
};

module.exports = resourcesCtrl;