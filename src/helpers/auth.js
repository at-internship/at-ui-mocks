// Additional helpers to handlebars
const helpers = {};

helpers.isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    req.flash('error_msg', 'Not Authorized.');
    res.redirect('/users/signin');
};

helpers.isAdmin = (req, res, next) => {
    if (req.isAuthenticated()) {
        if (req.user.type === 1) return next();
        else {
            req.flash('error_msg', 'You are not allowed to do this.');
            res.redirect("back");
        }
    } else {
        req.flash('error_msg', 'Not Authorized.');
        res.redirect('/users/signin');
    }
}

helpers.isCareProvider = (req, res, next) => {
    if (req.isAuthenticated()) {
        if (req.user.type === 2) return next();
        else {
            req.flash('error_msg', 'You are not allowed to do this.');
            res.redirect("back");
        }
    } else {
        req.flash('error_msg', 'Not Authorized.');
        res.redirect('/users/signin');
    }
}

module.exports = helpers;