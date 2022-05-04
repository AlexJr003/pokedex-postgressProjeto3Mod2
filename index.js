
require("dotenv").config();
const express = require("express");
const path = require("path");
const { send } = require("process");
const app = express();

const port = process.env.PORT || 3000

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

let pokedex = [
  {
    id: 1,
    name: "Bulbasaur",
    description:
      "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
    type: "Grass",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    height:"0.7 m",
    weight:"6.9 kg",
    category:"Seed",
    skill:"Overgrow",
  },
  {
    id: 2,
    name: "Charmander",
    description:
      "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
    type: "Fire",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    height:"0.6 m",
    weight:"8.5 kg",
    category:"Lizard",
    skill:"Blaze",
  },
  {
    id: 3,
    name: "Squirtle ",
    description:
      "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
    type: "Water",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    height:"0.5 m",
    weight:"9.0 kg",
    category:"Tiny Turtle",
    skill:"Torrent",
  },
  {
    id: 4,
    name: "Pikachu",
    description:
      "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.",
    type: "Electric",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    height:"0.4 m",
    weight:"6.0 kg",
    category:"Mouse",
    skill:"Static",
  },
];

let pokemon = undefined;

app.get("/", (req, res) => {
  
  res.render("index", { pokedex, pokemon });
});

app.post("/add", (req, res) => {
  const pokemon = req.body;
  pokemon.id = pokedex.length + 1;
  pokedex.push(pokemon);
  res.redirect("/#cards");
});

app.get("/details/:id", (req, res) => {
    const id = +req.params.id;
    pokemon = pokedex.find((pokemon) => pokemon.id === id);
    res.redirect("/#submit");
});

app.get('/detalhes/:id', (req, res) => {
  let pokemon = []
  pokedex.filter((element) => {
      if(element.id == req.params.id){
      pokemon = element
    }
  })
  res.render("details.ejs", {pokemon})
  })



app.post("/update/:id", (req, res) => {
    const id = +req.params.id - 1;
    const newPokemon = req.body;
    newPokemon.id = id + 1;
    pokedex[id] = newPokemon;
    pokemon = undefined;
    res.redirect("/#cards");
});

app.get("/delete/:id", (req, res) => {
  const id = +req.params.id - 1;
  
  delete pokedex[id]

  res.redirect("/#cards");
  
})

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:3000`)
);
