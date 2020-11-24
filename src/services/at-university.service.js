const axios = require("axios");

// LOCAL
//require("dotenv").config();
//const TUTORIAL_SERVICE_URI = process.env.TUTORIAL_SERVICE_URI || `http: //localhost:8080/api`;
//const TUTORIAL_SERVICE_URI = process.env.TUTORIAL_SERVICE_URI || `https://at-mock-services-api.herokuapp.com/api`;

// PROD
const TUTORIAL_SERVICE_URI = process.env.TUTORIAL_SERVICE_URI;
console.log("TUTORIAL_SERVICE_URI:" + TUTORIAL_SERVICE_URI);

module.exports = {
    getAllTutorials: () =>
        axios({
            method: "GET",
            url: TUTORIAL_SERVICE_URI + `/tutorials`,
            headers: {
                "content-type": "application/json",
            },
        })
        /*.then(function() {
                    //console.log('Success ' + JSON.stringify(data))
                    console.log("getAllTutorials: " + TUTORIAL_SERVICE_URI + `/tutorials`);
                })*/
        .catch(function(error) {
            console.log('Error: ' + error.message)
        }),
};