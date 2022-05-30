const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/catalogo", (req, res) => {
  res.render("catalogo");
});
app.get("/cadastro", (req, res) => {
  res.render("cadastro");
});

app.listen(3000, () => {
  console.clear();
  console.log("Servidor rodando");
  console.log("http://localhost:3000");
});
