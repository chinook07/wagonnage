import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const Entete = () => {
  return (
    <Container>
      {/* <FontAwesomeIcon icon={faCircle} /> */}
      <h1>Wagonnage</h1>
    </Container>
  );
};

const Container = styled.header`
  display: flex;
  justify-content: center;
  padding: 15px 0;
  h1 {
    margin: 0;
  }
`;

export default Entete;