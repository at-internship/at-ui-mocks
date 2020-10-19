const router = require("express").Router();

const {
    dashboard,
    backlog,
    sprint,
    members,
    teams,
    mentors,
    metrics,
    tests
} = require("../controllers/at-resources.controller.js");

const { isAdmin, isCareProvider } = require("../helpers/auth");

/* Routes */

// Dashboard
router.get("/dashboard", dashboard);

// Backlog
router.get("/backlog", backlog);

// Sprint
router.get("/sprint", sprint);

// Members
router.get("/members", members);

// Teams
router.get("/teams", teams);

// Mentors
router.get("/mentors", mentors);

// Metrics
router.get("/metrics", metrics);

router.get("/test", tests);

module.exports = router;