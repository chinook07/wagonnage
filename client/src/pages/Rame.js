import styled from "styled-components";
import { useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faElevator,
} from "@fortawesome/free-solid-svg-icons";
import { Contexte } from "../Contexte";

const Rame = () => {
  const {
    lignesC1,
    dirChoisiC3,
    sortiesC5,
    portesC6,
    setPortes,
    porteAscC7,
    setPorteAsc,
    debarqueGaucheC8,
    setDebarqueGauche,
  } = useContext(Contexte);
  //   console.log("C1", lignesC1);
  //   console.log("C5", sortiesC5);
  //   console.log("C6", portesC6);
  //   console.log("C7", porteAscC7);

  useEffect(() => {
    if (sortiesC5 === undefined || !lignesC1) return;

    const vraiDirection = dirChoisiC3 === 0 ? 1 : 0;
    const station = lignesC1.stations.find((element) =>
      Object.hasOwn(element, sortiesC5),
    );
    if (!station) return;

    let donneesPourC6 = station[sortiesC5][vraiDirection];
    // let tableauC6 = [];
    setPortes(Array.isArray(donneesPourC6) ? donneesPourC6 : [donneesPourC6]);
    // if (Array.isArray(donneesPourC6)) {
    //   setPortes(donneesPourC6);
    // } else {
    //   tableauC6.push(donneesPourC6);
    //   setPortes(tableauC6);
    // }
    let porteDelAsc = lignesC1.ascenseur.find((station) =>
      Object.hasOwn(station, sortiesC5),
    );
    setPorteAsc(porteDelAsc?.[sortiesC5]?.[vraiDirection]);
    setDebarqueGauche(lignesC1.mauvaisSens[vraiDirection].includes(sortiesC5));
  }, [
    sortiesC5,
    lignesC1,
    dirChoisiC3,
    setPortes,
    setPorteAsc,
    setDebarqueGauche,
  ]);

  if (sortiesC5 === undefined || portesC6 === undefined) {
    return dirChoisiC3 !== undefined ? (
      <p>Choisissez votre station de destination.</p>
    ) : null;
  }

  const nombreVoitures =
    lignesC1.rame === "rem" ? 4 : lignesC1.sigle === "5" ? 6 : 9;

  const numerosVoitures = Array.from(
    { length: nombreVoitures },
    (_, index) => nombreVoitures - index,
  );

  const porteAvecSortie = (num) =>
    portesC6.some((porte) =>
      typeof porte === "number" ? porte === num : porte.voiture === num,
    );

  return (
    <Container>
      <table>
        <thead>
          <tr>
            {numerosVoitures.map((num) => (
              <th key={num}>{num}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {numerosVoitures.map((num) => (
              <td key={num}>
                {porteAvecSortie(num) && (
                  <SortieGauche
                    icon={faArrowRightFromBracket}
                    $senssortie={debarqueGaucheC8 ? "180deg" : "0deg"}
                  />
                )}
                {porteAscC7 === num && <FontAwesomeIcon icon={faElevator} />}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      {debarqueGaucheC8 && (
        <p>
          {lignesC1.rame === "rem"
            ? "Les portes s'ouvriront sur le côté... gauche."
            : "Ouverture des portes de l'autre côté."}
        </p>
      )}
    </Container>
  );
};

const Container = styled.section`
  margin-top: 15px;
  table {
    border: 2px solid var(--c2);
    border-radius: 10px 10px 0 0;
    margin: 0 auto;
  }
  thead tr th {
    border-bottom: 2px solid var(--c2);
    padding: 5px;
    width: 25px;
  }
  tbody tr {
    vertical-align: top;
  }
  p {
    text-align: center;
  }
`;

const SortieGauche = styled(FontAwesomeIcon)`
  transform: rotate(${({ $senssortie }) => $senssortie});
`;

export default Rame;
