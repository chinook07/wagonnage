import { useContext } from "react";
import styled from "styled-components";
import toutesLignes from '../donnees/toutesLignes';
import { Contexte } from "./src/Contexte";

const Lignes = () => {
  const { setLignes } = useContext(Contexte);

  const choisirLigne = (ligne) => {
    setLignes(ligne);
    console.log(ligne.sigle);
  }

  return (
    <Container>
      {toutesLignes.map((ligne, index) => (
        <button onClick={() => (choisirLigne(ligne))} key={index}>{ligne.sigle}</button>      
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export default Lignes;