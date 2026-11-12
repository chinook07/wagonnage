import { useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { Contexte } from "../Contexte";
import toutesLignes from "../donnees/toutesLignes";

const Directions = () => {
  const {
    lignesC1,
    directionsC2,
    setDirections,
    dirChoisiC3,
    setDirChoisi,
    setSorties,
    setPortes,
    setPorteAsc,
    setDebarqueGauche,
  } = useContext(Contexte);

  useEffect(() => {
    if (!lignesC1) return;
    const ligneTrouvee = toutesLignes.find(
      (ligne) => ligne.sigle === lignesC1.sigle,
    );
    setDirections(ligneTrouvee?.terminus);
  }, [lignesC1, setDirections]);

  const choisirLaDir = (gir) => {
    setDirChoisi(gir);
    setSorties(undefined);
    setPortes(undefined);
    setPorteAsc(undefined);
    setDebarqueGauche(false);
  };

  if (directionsC2[1]) {
    return (
      <Container>
        <p>Direction</p>
        {directionsC2.map((term, index) => (
          <BoutonDir
            key={index}
            onClick={() => choisirLaDir(index)}
            $opaque={
              dirChoisiC3 === undefined || index === dirChoisiC3 ? 1 : 0.5
            }
          >
            {index === 0 && (
              <CercleColore couleur={lignesC1.hex[0]} icon={faCircle} />
            )}
            <span>{term}</span>
            {index === 1 && (
              <CercleColore couleur={lignesC1.hex[0]} icon={faCircle} />
            )}
          </BoutonDir>
        ))}
      </Container>
    );
  } else {
    return (
      <p>
        <FontAwesomeIcon icon={faCircleArrowRight} />
        <span> Choisissez votre ligne de transport.</span>
      </p>
    );
  }
};

const Container = styled.section`
  display: flex;
  gap: 10px;
  justify-content: center;
  p {
    order: 1;
  }
`;

const BoutonDir = styled.button`
  background-color: var(--c1);
  border: 1px solid var(--c2);
  color: var(--c2);
  opacity: ${({ $opaque }) => $opaque};
  &:first-of-type svg {
    margin-right: 5px;
  }
  &:last-of-type {
    order: 2;
    svg {
      margin-left: 5px;
    }
  }
  &:hover {
    opacity: 0.8;
  }
`;

const CercleColore = styled(FontAwesomeIcon)`
  color: ${({ couleur }) => couleur};
`;

export default Directions;
