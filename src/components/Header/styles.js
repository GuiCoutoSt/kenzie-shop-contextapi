import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  background-color: var(--grey);

  h1 {
    font-size: 1.5rem;
    font-weight: 900;
  }

  img {
    width: 120px;
  }

  span {
    color: var(--light-blue);
  }
`;

const IconContainer = styled.div`
  position: relative;
  display: flex;
  justify-self: flex-end;

  span {
    position: absolute;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 14px;
    height: 14px;

    border-radius: 100%;
    font-size: 0.7rem;
    font-weight: 900;
    background-color: var(--red);
    color: var(--white);
  }
`;

export { Container, IconContainer };
