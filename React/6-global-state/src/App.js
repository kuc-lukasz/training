import "./App.css";
import { Header } from "./Components/Header";
import { ThemeProvider } from "./Components/Provider";

//Rozpoczęcie otwierania portalu

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <Header />
      </div>
    </ThemeProvider>
  );
};

export default App;
