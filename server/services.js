const obtenirEtatMetro = async () => {
  const response = await fetch(
    "https://api.stm.info/pub/od/i3/v2/messages/etatservice",
    {
      method: "GET",
      headers: {
        apiKey: process.env.STM_API_KEY,
        Accept: "application/json",
      },
    },
  );

  if (!response.ok) {
    throw new Error(`Erreur API STM : ${response.status}`);
  }

  const data = await response.json();

  const lignes = data.alerts
    .slice(-4)
    .map((element) => ({
      ligne: element.informed_entities[0].route_short_name,
      etat: element.description_texts[0].text,
    }))
    .sort((a, b) =>
      a.ligne.localeCompare(b.ligne, undefined, { numeric: true }),
    );

  const toutBien = lignes.every(
    (element) => element.etat === "Service normal du métro",
  );

  return { lignes, toutBien };
};

const obtenirEtatREM = async () => {
  try {
    const response = await fetch("https://transit-status.fly.dev/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        operationName: "GetIncidents",
        variables: {
          offset: 0,
          limit: 100,
        },
        query: `
            query GetIncidents($offset: Int, $limit: Int) {
              incidents(offset: $offset, limit: $limit) {
                items {
                  id
                  type
                  scope
                  details
                  dateTimeRaw
                  expectedRecoveryRaw
                  ongoing
                }
                totalCount
                hasMore
              }
            }
          `,
      }),
    });

    if (!response.ok) {
      throw new Error(`Erreur API REM: ${response.status}`);
    }

    const data = await response.json();

    if (data.errors) {
      throw new Error(data.errors[0].message);
    }

    return data.data.incidents.items.filter((incident) => incident.ongoing);
  } catch (error) {
    console.error("Erreur lors de la récupération du REM:", error);
    return null;
  }
};

module.exports = { obtenirEtatMetro, obtenirEtatREM };
