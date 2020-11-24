const universityCtrl = {};

const tutorialServiceAPI = require('../services/at-university.service');

// Modules
const passport = require("passport");

// Dashboard
universityCtrl.dashboard = async(req, res) => {
    try {
        const responseTutorials = await tutorialServiceAPI.getAllTutorials();
        console.log("---> universityCtrl.dashboard.getAllTutorials");
        console.log(responseTutorials.data);
        const tutorials = responseTutorials.data
        res.render("at-university/dashboard", { tutorials });
    } catch (err) {
        console.error(err.message)
        res.render("at-university/dashboard");
    }
};

// Career details
universityCtrl.careerDetails = async(req, res) => {
    res.render("at-university/careers/details");
};

// Course details
universityCtrl.courseDetails = async(req, res) => {
    res.render("at-university/courses/details");
};

// Start Course
universityCtrl.startCourse = async(req, res) => {
    res.render("at-university/courses/start");
};

module.exports = universityCtrl;