import { GlobalStyle } from "./styles/global";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <Button children={"Adicionar"} />
      <Button children={"Remover"} remove />
      <GlobalStyle />
    </div>
  );
}

export default App;
