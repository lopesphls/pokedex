const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

app.use(express.static(path.join(__dirname, "public")));

let pokedex = [
  {
    id: 1,
    nome: "Pikachu",
    tipo: "Eletrico",
    fraqueza: "Terra",
    img: "http://www.smashbros.com/images/og/pikachu.jpg",
  },
  {
    id: 2,
    nome: "Charmander",
    tipo: "Fogo",
    fraqueza: "Água",
    img: "https://pm1.narvii.com/6211/28844b37fc102d346ca78b48f3da1b7e8f014533_hq.jpg",
  },
  {
    id: 1,
    nome: "Pikachu",
    tipo: "Eletrico",
    fraqueza: "Terra",
    img: "http://www.smashbros.com/images/og/pikachu.jpg",
  },
  {
    id: 2,
    nome: "Charmander",
    tipo: "Fogo",
    fraqueza: "Água",
    img: "https://pm1.narvii.com/6211/28844b37fc102d346ca78b48f3da1b7e8f014533_hq.jpg",
  },
  {
    id: 1,
    nome: "Pikachu",
    tipo: "Eletrico",
    fraqueza: "Terra",
    img: "http://www.smashbros.com/images/og/pikachu.jpg",
  },
  {
    id: 2,
    nome: "Charmander",
    tipo: "Fogo",
    fraqueza: "Água",
    img: "https://pm1.narvii.com/6211/28844b37fc102d346ca78b48f3da1b7e8f014533_hq.jpg",
  },
  {
    id: 1,
    nome: "Pikachu",
    tipo: "Eletrico",
    fraqueza: "Terra",
    img: "http://www.smashbros.com/images/og/pikachu.jpg",
  },
  {
    id: 2,
    nome: "Charmander",
    tipo: "Fogo",
    fraqueza: "Água",
    img: "https://pm1.narvii.com/6211/28844b37fc102d346ca78b48f3da1b7e8f014533_hq.jpg",
  },
  {
    id: 1,
    nome: "Pikachu",
    tipo: "Eletrico",
    fraqueza: "Terra",
    img: "http://www.smashbros.com/images/og/pikachu.jpg",
  },
  {
    id: 2,
    nome: "Charmander",
    tipo: "Fogo",
    fraqueza: "Água",
    img: "https://pm1.narvii.com/6211/28844b37fc102d346ca78b48f3da1b7e8f014533_hq.jpg",
  },
  {
    id: 1,
    nome: "Pikachu",
    tipo: "Eletrico",
    fraqueza: "Terra",
    img: "http://www.smashbros.com/images/og/pikachu.jpg",
  },
  {
    id: 2,
    nome: "Charmander",
    tipo: "Fogo",
    fraqueza: "Água",
    img: "https://pm1.narvii.com/6211/28844b37fc102d346ca78b48f3da1b7e8f014533_hq.jpg",
  },
];

app.get("/", (req, res) => {
  res.render("index", { pokedex });
});

app.get("/cadastro", (req, res) => {
  res.render("cadastro");
});

app.post("/cadastrar", (req, res) => {
  const pokemon = req.body;
  pokemon.id = pokedex.length + 1;
  pokedex.push(pokemon);

  res.redirect("/");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.clear();
  console.log("Servidor rodando");
  console.log("http://localhost:3000");
});
