const express = require("express")

const path = require("path")

const app = express();

const PORT = process.env.PORT || 5000

let ID = 0;

const helmet = require("helmet");

app.use(helmet());

app.use((err, req, res, next) => {
  console.error("Error detectado:", err);
  res.status(500).json({ error: "Error interno del servidor" });
});


app.use(express.static(path.resolve(__dirname, "public")));


app.get("/", (req, res) => {

  ID++;

  console.log(`Nuevo usario! [${ID}]`);


  res.sendFile(path.resolve(__dirname, "public", "index.html"));

})

app.get("/info", (req, res) => {

  res.status(200).json({ saludo: "hola, ¿cómo estás? Espero bien." });

})

app.listen(PORT, () => {

  console.log(`servidor activo. Puerto: ${PORT}`)

})