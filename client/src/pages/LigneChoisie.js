import { useContext } from "react";
import styled from "styled-components";
import { Contexte } from "../Contexte";
import toutesLignes from "../donnees/toutesLignes";

const LigneChoisie = () => {
  const {
    setLignes,
    lignesC1,
    setDirChoisi,
    setStations,
    setSorties,
    setPortes,
    setPorteAsc,
    setDebarqueGauche,
  } = useContext(Contexte);

  const choisirLigne = (ligne) => {
    setLignes(ligne);
    setDirChoisi(undefined);
    setStations(undefined);
    setSorties(undefined);
    setPortes(undefined);
    setPorteAsc(undefined);
    setDebarqueGauche(false);
  };

  return (
    <Container>
      {toutesLignes.map((ligne, index) => {
        const estRem = ligne.rame === "rem";
        return (
          <BoutonLigne
            $couleur={estRem ? "#fff" : ligne.hex[0]}
            key={index}
            $limite={estRem}
            onClick={() => choisirLigne(ligne)}
            $opaque={!lignesC1 || ligne.sigle === lignesC1.sigle ? 1 : 0.5}
            $texte={ligne.sigle === "4" || estRem ? "var(--c1)" : "var(--c2)"}
          >
            {ligne.sigle}
          </BoutonLigne>
        );
      })}
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  button {
    align-items: center;
    border-radius: 50%;
    display: flex;
    height: 50px;
    justify-content: center;
    text-align: center;
    font-weight: bold;
    width: 50px;
    &:hover {
      opacity: 0.8;
    }
    @media screen and (max-width: 380px) {
      height: 40px;
      width: 40px;
    }
  }
`;

const BoutonLigne = styled.button`
  background-color: ${({ $couleur }) => $couleur};
  border: ${({ $limite }) => ($limite ? "2px solid var(--ub)" : "none")};
  color: ${({ $texte }) => $texte};
  opacity: ${({ $opaque }) => $opaque};
`;

export default LigneChoisie;
