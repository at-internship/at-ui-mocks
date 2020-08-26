const router = require("express").Router();

const { dashboard } = require("../controllers/at-resources.controller.js");

const { isAdmin, isCareProvider } = require("../helpers/auth");

/* Routes */

// Dashboard
router.get("/dashboard", dashboard);

module.exports = router;