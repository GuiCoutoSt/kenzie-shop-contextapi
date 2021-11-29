import Container from "./styles";

const Button = ({ children, onClick, remove = false }) => {
  return (
    <Container remove={remove}>
      <button onClick={onClick}>{children}</button>
    </Container>
  );
};

export default Button;
