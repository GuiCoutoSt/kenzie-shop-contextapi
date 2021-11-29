import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 20px auto;
  margin-top: 80px;

  @media (min-width: 768px) {
    margin: 20px auto;
  }
`;

export default Container;
