import { useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faWheelchair,
  faAnglesDown,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { Contexte } from "../Contexte";

const ListeStations = () => {
  const {
    lignesC1,
    dirChoisiC3,
    stationsC4,
    setStations,
    sortiesC5,
    setSorties,
  } = useContext(Contexte);

  useEffect(() => {
    if (dirChoisiC3 === undefined || !lignesC1) return;
    const arrayStations = lignesC1.stations.map(
      (station) => Object.keys(station)[0],
    );
    setStations(arrayStations);
  }, [dirChoisiC3, lignesC1, setStations]);

  const choisirStation = (arret) => {
    setSorties(arret);
  };
  const possedeAscenseur = (arret) =>
    lignesC1.ascenseur.some((element) => Object.hasOwn(element, arret));
  if (stationsC4 === undefined) {
    return lignesC1 ? (
      <p>
        <FontAwesomeIcon icon={faCircleArrowRight} />
        <span> Choisissez votre direction.</span>
      </p>
    ) : null;
  }
  const stationsOrdonnees =
    dirChoisiC3 === 1 ? stationsC4 : [...stationsC4].reverse();
  const stationDepart = stationsOrdonnees[0];

  return (
    <Container>
      <button disabled>
        <Ruban $couleur={lignesC1.hex[0]}>
          <FontAwesomeIcon icon={faCircle} />
        </Ruban>
        <NomStation>
          <span>{stationDepart} </span>
          {possedeAscenseur(stationDepart) && (
            <FontAwesomeIcon icon={faWheelchair} />
          )}
          <FontAwesomeIcon icon={faAnglesDown} />
        </NomStation>
      </button>
      {stationsOrdonnees.slice(1).map((arret, index) => (
        <button key={index} onClick={() => choisirStation(arret)}>
          <Ruban $couleur={lignesC1.hex[0]}>
            <CercleStation
              icon={faCircle}
              $couleur={sortiesC5 === arret && "var(--c0)"}
            />
          </Ruban>
          <NomStation
            $poids={
              index === stationsOrdonnees.slice(1).length - 1
                ? "bold"
                : "normal"
            }
          >
            <span>{arret}</span>
            {possedeAscenseur(arret) && <FontAwesomeIcon icon={faWheelchair} />}
            {/* {index === stationsOrdonnees.slice(1).length - 1 && <span> : terminus</span>} */}
          </NomStation>
        </button>
      ))}
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: fit-content;
  button {
    background-color: initial;
    display: flex;
    padding: 0;
    &:disabled {
      opacity: 0.6;
      cursor: default;
    }
    &:hover {
      background-color: var(--c1);
    }
    &:first-child div:first-child {
      border-radius: 50% 50% 0 0;
    }
    &:last-child div:first-child {
      border-radius: 0 0 50% 50%;
    }
  }
`;

const Ruban = styled.div`
  align-items: center;
  background-color: ${({ $couleur }) => $couleur};
  display: flex;
  color: var(--c2);
  justify-content: center;
  width: 40px;
`;

const CercleStation = styled(FontAwesomeIcon)`
  color: ${({ $couleur }) => $couleur};
`;

const NomStation = styled.div`
  color: var(--c2);
  font-weight: ${({ $poids }) => $poids};
  padding: 10px;
  svg {
    margin-left: 5px;
  }
`;

export default ListeStations;
