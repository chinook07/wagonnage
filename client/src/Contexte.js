import { createContext, useState } from "react";

export const Contexte = createContext();

const ContexteProvider = ({ children }) => {
  const [lignesC1, setLignes] = useState();
  const [directionsC2, setDirections] = useState([]);
  const [dirChoisiC3, setDirChoisi] = useState(undefined);
  const [stationsC4, setStations] = useState(undefined);
  const [sortiesC5, setSorties] = useState(undefined);
  const [portesC6, setPortes] = useState(undefined);
  const [porteAscC7, setPorteAsc] = useState(undefined);
  const [debarqueGaucheC8, setDebarqueGauche] = useState(false);
  const [etatDuMetro, setEtatDuMetro] = useState(undefined);

  return (
    <Contexte.Provider
      value={{
        lignesC1,
        setLignes,
        directionsC2,
        setDirections,
        dirChoisiC3,
        setDirChoisi,
        stationsC4,
        setStations,
        sortiesC5,
        setSorties,
        portesC6,
        setPortes,
        porteAscC7,
        setPorteAsc,
        debarqueGaucheC8,
        setDebarqueGauche,
        etatDuMetro,
        setEtatDuMetro,
      }}
    >
      {children}
    </Contexte.Provider>
  );
};
export default ContexteProvider;
