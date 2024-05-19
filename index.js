import express from "express";
import axios from "axios";
import path from "path";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/quote", async (req, res) => {
  try {
    const response = await axios.get("https://api.tronalddump.io/random/quote");
    res.json(response.data);
  } catch (error) {
    res.status(500).send("Error retrieving quote");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
