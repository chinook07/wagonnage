import styled from "styled-components";

const APropos = () => {
  return (
    <Container>
      <h2>À propos</h2>
      <p>
        Wagonnage est une application web qui invite l'utilisateur du métro ou
        du REM à choisir la voiture située à côté de la sortie à la station de
        destination.
      </p>
    </Container>
  );
};

const Container = styled.section`
  background-color: var(--c1);
  padding: 15px;
  margin: 0;
  h2 {
    margin-top: 0;
  }
  p {
    margin: auto 0;
  }
`;

export default APropos;
