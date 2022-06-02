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
    id: 3,
    nome: "Bulbasaur",
    tipo: "Planta",
    fraqueza: "Fogo",
    img: "http://pm1.narvii.com/6738/e6b5aee01669689a45bec15dd7c1551da653ae4bv2_00.jpg",
  },
  {
    id: 4,
    nome: "Squirtle",
    tipo: "Água",
    fraqueza: "Eletrico",
    img: "https://mestrepokemon.com/wp-content/uploads/2019/11/Squirtle-Pok%C3%A9dex.jpg",
  },
];

app.get("/", (req, res) => {
  res.render("index", { pokedex });
});

app.get("/cadastro", (req, res) => {
  res.render("cadastro");
});
app.get("/editar/:id", (req, res) => {
  let id = req.params.id;
  id = id - 1;

  res.render("editar", { pokedex, id });
});

app.post("/cadastrar", (req, res) => {
  const pokemon = req.body;
  pokemon.id = pokedex.length + 1;
  pokedex.push(pokemon);

  res.redirect("/");
});
app.post("/editar/:id", (req, res) => {
  let id = req.params.id;
  id = id - 1;

  const pokemon = req.body;
  pokedex[id] = pokemon;

  res.redirect("/");
});

app.get("/deletar/:id", (req, res) => {
  const pokemon = req.params.id;
  console.log(pokemon);
  pokedex = pokedex.filter((p) => p.id != pokemon);

  res.redirect("/");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.clear();
  console.log("Servidor rodando");
  console.log("http://localhost:3000");
});
