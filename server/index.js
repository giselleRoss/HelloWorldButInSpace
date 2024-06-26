import express from "express";
import { issCurrentLocation } from "./iss/iss.js";
import { getWeather } from "./weather/weather.js";
import cors from "cors";

const PORT = 8000;
const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World 2!");
});

app.get("/iss", async (req, res) => {
  const locationData = await issCurrentLocation();
  res.send(locationData);
});

app.get("/weather", async (req, res) => {
  const locationData = await getWeather(36.6674, -78.39);
  res.send("OK");
});

app.listen(PORT, () => {
  console.log("Listening on port: ", PORT);
});
