// importujemy hooka z Reduxa, useSelector pozwala nam wykorzystać dane z reducera | useDispatch natomiast zarządza akcją, aktualizuje dane
import { useSelector, useDispatch } from "react-redux";
import { actions } from "./store/index";
import "./App.css";

function App() {
    const counter = useSelector(({ counter }) => counter);
    const dispatch = useDispatch();
    const increment = () => {
        dispatch(actions.increment());
    };
    const decrement = () => {
        dispatch(actions.decrement());
    };
    const addBy = () => {
        dispatch(actions.addBy(10));
    };

    const delBy10 = () => {
        dispatch(actions.delBy10());
    };

    return (
        <div className="App">
            <h1>Counter App</h1>
            <h2>{counter}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={addBy}>Add 10</button>
            <button onClick={delBy10}>Del 10</button>
        </div>
    );
}

export default App;
