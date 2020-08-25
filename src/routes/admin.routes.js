const express = require("express");
const router = express.Router();
const path = require('path');
const {
    renderIndex,
    renderAppointments,
    renderCareProviders,
    renderPatients,
    renderInsurances,
    renderReports
} = require("../controllers/admin.controller");

// Helpers
const { isAdmin } = require("../helpers/auth");


/* Routes */

// Index
router.get("/", isAdmin, renderIndex);

// Appointments
router.get("/appointments", isAdmin, renderAppointments);

// Care Providers
router.get("/careproviders", isAdmin, renderCareProviders);

// Patients
router.get("/patients", isAdmin, renderPatients);

// Insurances
router.get("/insurances", isAdmin, renderInsurances);

// Reports
router.get("/reports", isAdmin, renderReports);
router.get('/reports/example', function(req, res) {
    const file = path.join(__dirname, '../public/reports/example.xls');
    res.download(file); // Set disposition and send it.
});

module.exports = router;