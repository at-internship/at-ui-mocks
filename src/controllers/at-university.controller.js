const universityCtrl = {};

// Models
//const User = require('../models/User');

const tutorialServiceAPI = require('../services/tutorial.service');

// Modules
const passport = require("passport");

// Dashboard - LOCAL
/*universityCtrl.dashboard = (req, res) => {
    res.render("at-university/dashboard");
};*/

// Dashboard - PROD
universityCtrl.dashboard = async(req, res) => {
    const responseTutorials = await tutorialServiceAPI.getAllTutorials();
    console.log("---> Tutorials");
    console.log(responseTutorials.data);
    const tutorials = responseTutorials.data
    res.render("at-university/dashboard", { tutorials });
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