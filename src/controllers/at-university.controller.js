/**
 * AT UI MOCKS - AT University Controller.
 * Copyright 2020 AgileThought, Inc.
 * 
 * Functions for general at-university-controller.
 * 
 * @author @at-internship
 * @version 1.0
 */

// AT University Controller
const universityCtrl = {};

// AT University Service
const tutorialServiceAPI = require('../services/at-university.service');

// Modules
const passport = require("passport");

/**
 * Controller method to handle view render for Dashboard section.
 * 
 * @param  {req} req  Request object
 * @param  {res} res  Response object
 * @return {Promise<any>} Render hablebars view
 * @abstract
 */
universityCtrl.dashboard = async(req, res) => {
    try {
        const responseTutorials = await tutorialServiceAPI.getAllTutorials();
        console.log("---> universityCtrl.dashboard.getAllTutorials");
        //console.log(responseTutorials.data);
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