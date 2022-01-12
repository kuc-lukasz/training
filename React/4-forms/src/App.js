import "./App.css";
import ControlledInputWithValidation from "./Formularze/FormularzKontrolowanyZWalidacja";
import FormularzZLista from "./Formularze/formularzZLista";
import ControlledInput2 from "./Formularze/KontrFormZjednPolStanu";
import ControlledInput from "./Formularze/KontrolowanyFormula";
import UnControlledInput from "./Formularze/NiekontrolowanyFormularz";

function App() {
  return (
    <div className="App">
      {/* <UnControlledInput />
      <ControlledInput />
      <ControlledInput2 />
      <FormularzZLista /> */}
      <ControlledInputWithValidation />
    </div>
  );
}

export default App;
