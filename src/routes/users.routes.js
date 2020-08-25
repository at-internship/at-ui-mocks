const router = require("express").Router();
const {
    renderUsers,
    renderSignUpForm,
    singup,
    renderSigninForm,
    signin,
    logout,
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
router.get("/logout", logout);

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