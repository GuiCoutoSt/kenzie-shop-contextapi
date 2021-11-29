import { GlobalStyle } from "./styles/global";
import Header from "./components/Header";
import Routes from "./routes";

import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
      <Toaster />
      <GlobalStyle />
    </div>
  );
}

export default App;
