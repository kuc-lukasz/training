import "./App.css";
import { Header } from "./Components/Header";
import { ThemeProvider } from "./Components/Provider";

export const App = () => {
  return (
    <ThemeProvider>
      <div>
        <Header />
      </div>
    </ThemeProvider>
  );
};
