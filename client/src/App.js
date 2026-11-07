import styled from "styled-components";
import Entete from "./comp/Entete";
import Pied from "./comp/Pied";
import LigneChoisie from "./pages/LigneChoisie";
import Directions from "./pages/Directions";
import ListeStations from "./pages/ListeStations";
import Rame from "./pages/Rame";
import EtatMetro from "./comp/EtatMetro";
import APropos from "./comp/APropos";
import Liens from "./comp/Liens";

const App = () => {
  return (
    <>
      <Entete />
      <GrosContenant>
        <EtatMetro />
        <LigneChoisie />
        <Directions />
        <Rame />
        <ListeStations />
        <Rame />
        <APropos />
        <Liens />
      </GrosContenant>
      <Pied />
    </>
  );
};

const GrosContenant = styled.main`
  padding-bottom: 50px;
`

export default App;
