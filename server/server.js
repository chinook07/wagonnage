require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors({
  origin: "https://wagonnage.touristechezsoi.ca"
}));

// Routes
app.use("/api", require("./routes"));

// Root endpoint
app.get("/", (req, res) => {
  res.type("text/plain").send("l'API fonctionne");
});

// Health check
app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    message: "l'API fonctionne"
  });
});

// Passenger manages the listening port
app.listen();