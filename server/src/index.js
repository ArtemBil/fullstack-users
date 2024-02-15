"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var dotenv_1 = require("dotenv");
var path_1 = require("path");
var body_parser_1 = require("body-parser");
var userRoutes_1 = require("./routes/userRoutes");
dotenv_1.default.config();
var app = (0, express_1.default)();
var PORT = process.env.PORT || 3001;
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use('/api', userRoutes_1.default);
if (['production', 'ci'].includes(process.env.NODE_ENV)) {
    app.use(express_1.default.static('client/build'));
    app.get('*', function (req, res) {
        res.sendFile(path_1.default.resolve('client', 'build', 'index.html'));
    });
}
app.listen(PORT, function () {
    console.log("Server is running on port ".concat(PORT));
});
