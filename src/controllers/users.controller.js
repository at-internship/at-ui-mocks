const usersCtrl = {};

// Models
const User = require('../models/User');

// Modules
const passport = require("passport");

// Get All Users
usersCtrl.renderUsers = async(req, res) => {
    //const users = await User.find({ user: req.user.id }).sort({ date: "desc" });
    const users = await User.find().sort({ date: "desc" });
    res.render("users/all-users", { users });
};

usersCtrl.renderSignUpForm = (req, res) => {
    res.render('users/signup');
};

// Post new user
usersCtrl.singup = async(req, res) => {
    let errors = [];
    let userIncomming = req.body.user; // Storing user from post resquest
    try {
        // First Validations throws PasswordError;
        if (userIncomming.password != userIncomming.confirm_password) throw {
            name: "PasswordError",
            description: "Passwords do not match."
        };
        // Creating new User Model
        const newUser = new User(userIncomming);
        await newUser.validate();
        // Encrypting password
        newUser.password = await newUser.encryptPassword(userIncomming.password);
        // Trying to save
        await newUser.save();
        // if successfully
        res.status(201);
        req.flash("success_msg", "You are registered.");
        res.redirect("/users/signin");
    } catch (error) {
        console.log(error.errors || error);
        let errorMessage = "Please, review data.";
        res.status(400);
        if (error.name === "ValidationError")
            for (let key in error.errors) errors.push({ text: error.errors[key].message });
        else if (error.name === "PasswordError")
            errorMessage = error.description;
        else if (error.name === "MongoError" && error.code === 11000) {
            for (let key in error.keyValue)
                errorMessage = `The ${key} = ${error.keyValue[key]} is already registered`;
            res.status(409);
        }
        // Addind error to 
        errors.push({ text: errorMessage });
        res.render("users/signup", { errors, user: userIncomming });
    }
};

usersCtrl.updateUser = (req, res) => {
    console.log(req.body);
    res.send("Updating user");
}

usersCtrl.renderSigninForm = (req, res) => {
    res.render("users/signin");
};

usersCtrl.signin = passport.authenticate("local", {
    successRedirect: "/users/dashboard",
    failureRedirect: "/users/signin",
    failureFlash: true
});

usersCtrl.logout = (req, res) => {
    req.logout();
    req.flash("success_msg", "You are logged out now.");
    res.redirect("/users/signin");
};

// dashboard
usersCtrl.dashboard = (req, res) => {
    res.render("users/dashboard");
};

// Details
usersCtrl.details = (req, res) => {
    res.render("users/details");
};

// Wallet
usersCtrl.wallet = (req, res) => {
    res.render("users/wallet");
};

module.exports = usersCtrl;