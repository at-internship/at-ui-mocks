const app = require("./server");

// Run app
if (app.get("env") == "development") {
    require("dotenv").config();
}

require("./database");

app.listen(app.get("port"), () => {
    console.log("Server on port:", app.get("port"));
});