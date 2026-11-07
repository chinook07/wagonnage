import styled from "styled-components";
import { ExternalLink } from "react-external-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const Pied = () => {
  return (
    <Container>
      <ExternalLink href="https://github.com/chinook07">Page Github</ExternalLink>
    </Container>
  );
};

const Container = styled.footer`
  background-color: var(--c2);
  bottom: 0;
  height: 50px;
  padding: 10px;
  position: fixed;
  width: 100%;
`;

export default Pied;
