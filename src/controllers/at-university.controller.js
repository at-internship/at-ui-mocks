const universityCtrl = {};

// Models
//const User = require('../models/User');

// Modules
const passport = require("passport");

// Dashboard
universityCtrl.dashboard = (req, res) => {
    res.render("at-university/dashboard");
};

// Career details
universityCtrl.careerDetails = (req, res) => {
    res.render("at-university/careers/details");
};

// Course details
universityCtrl.courseDetails = (req, res) => {
    res.render("at-university/courses/details");
};

// Start Course
universityCtrl.startCourse = (req, res) => {
    res.render("at-university/courses/start");
};

module.exports = universityCtrl;