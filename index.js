const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

const below = require("./src/below-ten/below-ten.json");

const above = require("./src/above-ten/above-ten.json");

app.get("/below-ten", (req, res) => {
  return res.json(below);
});

app.get("/above-ten", (req, res) => {
  return res.json(above);
});

app.listen(port, () => {
  console.log("Servidor está rodando...");
});
