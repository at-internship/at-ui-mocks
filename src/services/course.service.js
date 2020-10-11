const axios = require("axios");
const AT_UNIVERSITY_SERVICE_URI = process.env.AT_UNIVERSITY_SERVICE_URI;
console.log("AT_UNIVERSITY_SERVICE_URI:" + AT_UNIVERSITY_SERVICE_URI);

module.exports = {
    getAllCourses: () =>
        axios({
            method: "GET",
            url: AT_UNIVERSITY_SERVICE_URI + `/v1/course`,
            headers: {
                "content-type": "application/json",
            },
        }).catch(function(error) {
            console.log("Error: " + error.message);
        }),
};