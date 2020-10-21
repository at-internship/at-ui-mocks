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
    getAllTutorialsByTitle: () =>
        axios({
            method: "GET",
            url: TUTORIAL_SERVICE_URI + `/tutorials?title=${title}`,
            headers: {},
        }),
    getCompatibility: (yourName, yourBirthday, theirName, theirBirthday) =>
        axios({
            method: "POST",
            url: TUTORIAL_SERVICE_URI + `/zodiac_compatibility/result`,
            headers: {
                "content-type": "application/x-www-form-urlencoded",
                "x-rapidapi-host": "astrology-horoscope.p.rapidapi.com",
                "x-rapidapi-key": "yourapikey",
            },
            params: {
                mystic_dob: yourBirthday,
                mystic_dob2: theirBirthday,
                mystic_name: yourName,
                mystic_name2: theirName,
            },
        }),
};