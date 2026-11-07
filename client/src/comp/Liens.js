import styled from "styled-components";
import { ExternalLink } from "react-external-link";

const Liens = () => {
  return (
    <Container>
      <h2>Liens</h2>
      <ul>
        <li>
          <ExternalLink href="https://onroule.org/ressources/metro-rem/">
            Schéma des stations de métro, avec le nombre de marches
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://www.stm.info/guide-reseau/plans-reseaux">
            Plans des quartiers autour des stations de métro
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://rem.info/fr/se-deplacer/stations-du-reseau">
            Fiches des stations REM
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="http://stations.albertguillaumes.cat/">
            Schémas 3D des stations de métro (ANG)
          </ExternalLink>
        </li>
      </ul>
    </Container>
  );
};

const Container = styled.section`
    ul {
        padding-left: 15px;
        a {
            color: var(--c2);
        }
    }
`;

export default Liens;
