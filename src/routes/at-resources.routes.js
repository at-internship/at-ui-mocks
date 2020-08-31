const router = require("express").Router();

const { dashboard, backlog, activeSprint } = require("../controllers/at-resources.controller.js");

const { isAdmin, isCareProvider } = require("../helpers/auth");

/* Routes */

// Dashboard
router.get("/dashboard", dashboard);

// Backlog
router.get("/backlog", backlog);

// Active Sprint
router.get("/activeSprint", activeSprint);

module.exports = router;