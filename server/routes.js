const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "Le frontal et le dorsal se parlent!",
  });
});

const { obtenirEtatMetro, obtenirEtatREM } = require("./services");

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

router.get("/rem", async (req, res) => {
  try {
    const incidents = await obtenirEtatREM();

    if (incidents === null) {
      return res.status(502).json({
        error: "Impossible de récupérer l'état du REM",
      });
    }

    res.json(incidents);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Erreur serveur",
    });
  }
});

module.exports = router;
