const obtenirEtatMetro = async () => {
  const response = await fetch(
    "https://api.stm.info/pub/od/i3/v2/messages/etatservice",
    {
      method: "GET",
      headers: {
        apiKey: process.env.STM_API_KEY,
        Accept: "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Erreur API STM : ${response.status}`);
  }

  const data = await response.json();

  const lignes = data.alerts
    .slice(-4)
    .map(element => ({
      ligne: element.informed_entities[0].route_short_name,
      etat: element.description_texts[0].text,
    }))
    .sort((a, b) =>
      a.ligne.localeCompare(b.ligne, undefined, { numeric: true })
    );

  const toutBien = lignes.every(
    element => element.etat === "Service normal du métro"
  );

  return { lignes, toutBien };
};

module.exports = { obtenirEtatMetro };