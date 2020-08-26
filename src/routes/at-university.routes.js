const router = require("express").Router();
const { dashboard, careerDetails, courseDetails, startCourse } = require("../controllers/at-university.controller");

const { isAdmin, isCareProvider } = require("../helpers/auth");

/* Routes */

// Dashboard
router.get("/dashboard", dashboard);

// Career details
router.get("/careers/details", careerDetails);

// Course details
router.get("/courses/details", courseDetails);

// Start Course
router.get("/courses/start", startCourse);

module.exports = router;