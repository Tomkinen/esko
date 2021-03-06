const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv-extended");
const store = require("json-fs-store")("./store");
const schedule = require("node-schedule");
const random = require("random-js")();
require("./engine/engine")(store, schedule, random);

const app = express();
const serverHttp = require("http").Server(app);

dotenv.load();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", express.static(path.join(__dirname, "frontend/dist")));
require("./api/create")(app, store);
require("./api/delete")(app, store);
require("./api/list")(app, store);

app.get("/*", (req, res) => {
  res.sendFile("frontend/dist/index.html", { root: path.join(__dirname) });
});
serverHttp.listen(process.env.server_port);
console.log(
  `${Date()}\nEsko Lunch Decision Support started in port: ${
    process.env.server_port
  }`
);
