const adminCtrl = {};

// Index
adminCtrl.renderIndex = (req, res) => {
    res.render('admin/index');
};

// Appointments
adminCtrl.renderAppointments = (req, res) => {
    res.render('admin/appointments');
};

// Care Providers
adminCtrl.renderCareProviders = (req, res) => {
    res.render('admin/careproviders');
};

// Patients
adminCtrl.renderPatients = (req, res) => {
    res.render('admin/patients');
};

// Insurances
adminCtrl.renderInsurances = (req, res) => {
    res.render('admin/insurances');
};

// Reports
adminCtrl.renderReports = (req, res) => {
    res.render('admin/reports');
};

module.exports = adminCtrl;