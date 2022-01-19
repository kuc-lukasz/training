import { useEffect, useState } from "react";
import "./App.css";

const employes = [
  {
    id: 1,
    name: "Jose",
  },
  {
    id: 2,
    name: "Steve",
  },
  {
    id: 3,
    name: "Henry",
  },
];
function App() {
  // isloading sprawi że wyświetlni nam cos w trakcie ladowania listy. Implementujemy ją najpierw przed fetchem a potem na końcu już po odebraniu danych oraz już po returnie
  const [isLoading, setIsLoading] = useState(false);
  const [workers, setWorkes] = useState([]);

  //pierwszy parametr useEffect to funkcja, drugi to tablica zależności - sa jej trzy opcje
  // 1. może jej nie być, to sprawi że useEffect odpali sie za kazdym razem kiedy komponent sie renderuje
  // 2. Podanie pustej tablicy[], to sprawi że wywoła się tylko raz w momencie kiedy komponent pierwszy raz pokaże się na ekranie

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3004/employees")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setWorkes(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <section>
        <h2>Employes</h2>
        {isLoading && <p>Loading...</p>}
        <ul>
          {workers.map((worker) => {
            return (
              <>
                <li key={worker.id}>{worker.name}</li>
              </>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default App;
