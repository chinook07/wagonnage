import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import { ExternalLink } from "react-external-link";
import { Contexte } from "../Contexte";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faHourglassHalf,
} from "@fortawesome/free-solid-svg-icons";

const EtatMetro = () => {
  const { etatDuMetro, setEtatDuMetro } = useContext(Contexte);
  const [toutBien, setToutBien] = useState(true);

  useEffect(() => {
    obtenirEtatMetro();
    obtenirEtatREM();
  }, []);

  const obtenirEtatMetro = async () => {
    try {
      const response = await fetch("https://api.touristechezsoi.ca/api/metro");
      if (!response.ok) {
        throw new Error(`Erreur API : ${response.status}`);
      }
      const data = await response.json();
      setEtatDuMetro(data.lignes);
      setToutBien(data.toutBien);
    } catch (error) {
      console.error("Erreur métro :", error);
    }
  };

  const obtenirEtatREM = async () => {
    try {
      const response = await fetch("https://api.touristechezsoi.ca/api/rem");
      if (!response.ok) {
        throw new Error(`Erreur API : ${response.status}`);
      }
      const data = await response.json();
      // setEtatDuMetro(data.lignes);
      // setToutBien(data.toutBien);
    } catch (error) {
      console.error("Erreur métro :", error);
    }
  };

  return (
    <Container>
      {etatDuMetro !== undefined ? (
        <>
          {toutBien ? (
            <p>
              <FontAwesomeIcon icon={faCircleCheck} />
              <span> Le métro fonctionne normalement.</span>
            </p>
          ) : (
            etatDuMetro.map((ligne, index) => {
              return (
                <p key={index}>
                  Ligne {ligne.ligne} : {ligne.etat}
                </p>
              );
            })
          )}
        </>
      ) : (
        <p>
          <FontAwesomeIcon icon={faHourglassHalf} />
          <span>En attente du serveur...</span>
        </p>
      )}
      <p>
        <ExternalLink href="https://www.stm.info/horaires-et-trajets/metro?showAccessibility=true">
          Voir l'état des ascenseurs et des escaliers mécaniques
        </ExternalLink>
      </p>
      <p>
        <ExternalLink href="https://rem.info/fr/se-deplacer/etat-du-service">
          État du service du REM
        </ExternalLink>
      </p>
    </Container>
  );

  if (etatDuMetro !== undefined) {
    return <Container></Container>;
  }
};

const Container = styled.section`
  background-color: var(--u1a);
  margin: 0;
  padding: 15px 0;
  a,
  p {
    color: var(--c0);
  }
`;

export default EtatMetro;
