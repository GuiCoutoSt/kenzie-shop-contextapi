import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  margin-top: 80px;

  h2 {
    padding: 10px;
    background-color: var(--yellow);
    color: var(--grey);
    font-weight: 900;
    text-align: center;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    width: 700px;
    margin: 20px auto;
  }
`;

const CardNest = styled.div`
  @media (min-width: 768px) {
    max-height: 650px;
    padding: 0 15px;
    overflow: auto;
    border: solid 2px var(--white);
    border-radius: 10px 0 0 10px;
    background-color: var(--blue);

    ::-webkit-scrollbar {
      width: 5px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: var(--light-blue);
      border-radius: 5px;
    }
  }
`;

const Resume = styled.div`
  width: 290px;
  margin-top: 10px;

  border: 2px solid var(--yellow);
  border-radius: 5px;
  background-color: var(--grey);
  text-align: center;

  button {
    margin: 10px 0;
  }

  @media (min-width: 768px) {
    align-self: flex-start;
    margin-top: 0;
  }
`;

const Price = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  border-bottom: 2px solid var(--yellow);

  span {
    display: flex;
    align-items: center;
    margin: 10px;
  }
`;

const None = styled.div`
  margin: 70px 0;
  padding: 10px;
  border-top: 3px solid var(--yellow);
  background-color: var(--white);
  width: fit-content;
  border-radius: 0 0 5px 5px;

  h3 {
    font-weight: 900;
  }

  @media (min-width: 768px) {
    margin: 0;
  }
`;

export { Container, CardNest, Resume, Price, None };
