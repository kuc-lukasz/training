import style from "./App.module.css";
import { Employees } from "../../Employees/Employess";

function App() {
  return (
    <div className="App">
      <section className={style.Container}>
        <section className={style.EmployeeList}>
          <Employees />
        </section>
        <section className={style.DealsList}>
          <h2>Deals</h2>
        </section>
      </section>
    </div>
  );
}

export default App;
