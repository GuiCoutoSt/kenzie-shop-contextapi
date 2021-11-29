import styled from "styled-components";

const Container = styled.div`
  button {
    padding: 5px;
    border: 2px solid var(--black);
    border-radius: 10px;
    margin-bottom: 5px;
    font-family: "Work Sans", sans-serif;
    font-weight: 900;
    font-size: 1rem;
    background-color: var(--white);
    color: var(--black);
  }

  button:hover {
    transition: 0.3s;
    border-color: ${(props) => (props.remove ? "#E8073D" : "#0099de")};
    background-color: ${(props) => (props.remove ? "#E8073D" : "#0099de")};
    color: var(--white);
  }

  button:not(:hover) {
    transition: 0.3s;
  }

  @media (min-width: 760px) {
    button:hover {
      cursor: pointer;
    }
  } ;
`;

export default Container;
