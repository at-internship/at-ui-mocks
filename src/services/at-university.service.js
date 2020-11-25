/**
 * AT UI MOCKS - AT University Service API.
 * Copyright 2020 AgileThought, Inc.
 * 
 * Functions for at-university-api endpoint.
 * 
 * @author @at-internship
 * @version 1.0
 */

// Constants
const axios = require("axios");
const atCourseServiceAPI = {};

// LOCAL
//require("dotenv").config();
//const TUTORIAL_SERVICE_URI = process.env.TUTORIAL_SERVICE_URI || `http: //localhost:8080/api`;
//const TUTORIAL_SERVICE_URI = process.env.TUTORIAL_SERVICE_URI || `https://at-mock-services-api.herokuapp.com/api`;

// PROD
const TUTORIAL_SERVICE_URI = process.env.TUTORIAL_SERVICE_URI;
console.log("TUTORIAL_SERVICE_URI:" + TUTORIAL_SERVICE_URI);

/**
 * Function to retrieve All Tutorials from Tutorial Service API.
 * 
 * @param
 * @return {AxiosTransformer} Course reponse object on JSON format.
 */
atCourseServiceAPI.getAllTutorials = () => {
    return axios({
        method: "GET",
        url: AT_UNIVERSITY_SERVICE_URI + `/v1/course`,
        headers: {
            "content-type": "application/json",
        }
    });
};

module.exports = courseService;