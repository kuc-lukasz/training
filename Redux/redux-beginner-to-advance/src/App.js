// importujemy hooka z Reduxa, useSelector pozwala nam wykorzystać dane z reducera
import { useSelector, useDispatch } from "react-redux";
import "./App.css";

function App() {
    const counter = useSelector(({ licznik }) => licznik);
    const dispatch = useDispatch();
    const increment = () => {
        dispatch({ type: "INC" });
    };
    const decrement = () => {
        dispatch({ type: "DEC" });
    };
    const addBy = () => {
        dispatch({ type: "ADD", payload: 10 });
    };

    return (
        <div className="App">
            <h1>Counter App</h1>
            <h2>{counter}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={addBy}>Add 10</button>
        </div>
    );
}

export default App;
