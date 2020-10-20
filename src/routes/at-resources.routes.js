const router = require("express").Router();

const { dashboard, backlog, activeSprint, tests } = require("../controllers/at-resources.controller.js");

const { isAdmin, isCareProvider } = require("../helpers/auth");

/* Routes */

// Dashboard
router.get("/dashboard", dashboard);

// Backlog
router.get("/backlog", backlog);

// Active Sprint
router.get("/activeSprint", activeSprint);

router.get("/test", tests);


module.exports = router;