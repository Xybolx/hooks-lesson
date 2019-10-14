const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;

// define middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
};

// Static directory
app.use(express.static("client/public"));
app.use(express.static("client/src/imgs"));

// if no route is found
app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});