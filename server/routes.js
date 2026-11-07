const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "Le frontal et le dorsal se parlent!"
  });
});

const { obtenirEtatMetro } = require("./services");

router.get("/metro", async (req, res) => {
  try {
    const resultat = await obtenirEtatMetro();
    res.json(resultat);
  } catch (error) {
    console.error("Erreur STM :", error);
    res.status(502).json({
      error: "Impossible de récupérer l'état du métro",
    });
  }
});

module.exports = router;