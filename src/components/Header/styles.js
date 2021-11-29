import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0;
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

  @media (min-width: 768px) {
    position: relative;
  }
`;

const IconContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-self: flex-end;

  span {
    position: absolute;
    top: 0;
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

  a {
    font-size: 1.1rem;
    font-weight: 900;
    text-decoration: none;
    margin-right: 20px;
    color: var(--light-blue);
  }

  a:hover {
    text-decoration: underline;
  }

  @media (min-width: 768px) {
    &:hover {
      cursor: pointer;
    }

    a:hover {
      cursor: pointer;
    }
  }
`;

export { Container, IconContainer };
