const router = require("express").Router();
const {
    renderUsers,
    renderSignUpForm,
    singup,
    renderSigninForm,
    signin,
    signout,
    home,
    details,
    wallet,
    updateUser
} = require("../controllers/users.controller");

const { isAdmin, isCareProvider } = require('../helpers/auth');

/* Routes */

// Get All Users
router.get("/", isAdmin, renderUsers);

// Login
router.get("/signin", renderSigninForm);
router.post("/signin", signin);

// Logout
router.get("/signout", signout);

// Home
router.get("/home", home);

// Add User
router.get("/signup", renderSignUpForm);
router.post("/signup", singup);

// Edit User
router.put("/:id", isAdmin, updateUser);

// Delete User

// Details
router.get("/details", details);

// Wallet
router.get("/wallet", wallet);

module.exports = router;