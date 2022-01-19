import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // isloading sprawi że wyświetlni nam cos w trakcie ladowania listy. Implementujemy ją najpierw przed fetchem a potem na końcu już po odebraniu danych oraz już po returnie
  const [isLoading, setIsLoading] = useState(false);
  const [workers, setWorkes] = useState([]);
  const [refresh, setRefresh] = useState(0);

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
  }, [refresh]);

  //możemy dodatkowo sprawić za pomocą setInterval aby odświeżało liste co jakiś konkretny czas, do tego musimy stworzyć nowego useState

  useEffect(() => {
    setInterval(() => {
      setRefresh((old) => old + 1);
    }, 10000);
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
