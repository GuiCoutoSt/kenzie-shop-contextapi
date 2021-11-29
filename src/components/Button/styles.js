import styled from "styled-components";

const Container = styled.div`
  button {
    padding: 5px;
    border: ${(props) =>
      props.remove ? "2px solid #403f3e" : "2px solid #0099de"};
    border-radius: 10px;
    margin-bottom: 5px;
    font-family: "Heebo", sans-serif;
    font-weight: 800;
    font-size: 1rem;
    background-color: ${(props) => (props.remove ? "#fff" : "#0099de")};
    color: ${(props) => (props.remove ? "#403f3e" : "#fff")};
  }

  button:hover {
    transition: 0.3s;
    border-color: ${(props) => (props.remove ? "#E8073D" : "#0099de")};
    background-color: ${(props) => (props.remove ? "#E8073D" : "#165FBE")};
    color: ${(props) => props.remove && "#fff"};
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
