import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  margin: 10px 0;
  padding: 20px;
  border: 2px solid var(--light-grey);
  border-radius: 10px;
  box-sizing: border-box;
  background-color: var(--grey);

  img {
    width: 120px;
    background-color: var(--white);
    border: 2px solid var(--black);
    border-radius: 5px;
  }

  h3 {
    width: 120px;
    font-size: 1.2rem;
    font-weight: 900;
    margin-top: 5px;
    text-align: center;
    word-wrap: break-word;
  }

  @media (min-width: 768px) {
    width: 350px;
    justify-content: space-evenly;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 40px;
`;

const Price = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  padding: 5px;
  border-radius: 5px;
  font-size: 0.9rem;
  font-weight: 900;
  background-color: var(--black);
  color: var(--white);
`;

const PriceNest = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100px;
`;

export { Container, Price, Info, PriceNest };
