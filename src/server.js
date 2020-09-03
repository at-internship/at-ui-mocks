// Express file
const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const morgan = require("morgan");
const methodOverride = require("method-override");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");

// Initializations
const app = express();
require("./config/passport");

// Settings
app.set("port", process.env.PORT || 4000);
app.set("views", path.join(__dirname, "views"));
app.engine(
    ".hbs",
    exphbs({
        defaultLayout: "main",
        layoutsDir: path.join(app.get("views"), "layouts"),
        partialsDir: path.join(app.get("views"), "partials"),
        extname: ".hbs",
    })
);
app.set("view engine", ".hbs");

// Middlewares (Funciones que se van ejecutando a medida que llegan al server)
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true })); // Tratar datos de formulario como json
app.use(methodOverride("_method"));
app.use(
    session({
        secret: "secret",
        resave: true,
        saveUninitialized: true,
    })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Global Middlewares
app.use((req, res, next) => {
    res.locals.success_msg = req.flash("success_msg");
    res.locals.error_msg = req.flash("error_msg");
    res.locals.error = req.flash("error");
    res.locals.user = req.user || null;
    next();
});

// Routes
app.use("/", require("./routes/index.routes"));
app.use("/users", require("./routes/users.routes"));
app.use("/notes", require("./routes/notes.routes"));
app.use("/admin", require("./routes/admin.routes"));

app.use("/at-university", require("./routes/at-university.routes"));
app.use("/at-resources", require("./routes/at-resources.routes"));

// Static files
app.use(express.static(path.join(__dirname, "public")));

module.exports = app;