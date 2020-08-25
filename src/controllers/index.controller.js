const indexController = {};

indexController.renderIndex = (req, res) => {
    res.render('index');
};

indexController.renderAbout = (req, res) => {
    res.render('about');
};

indexController.renderNotifications = (req, res) => {
    res.render('notifications');
};

module.exports = indexController;