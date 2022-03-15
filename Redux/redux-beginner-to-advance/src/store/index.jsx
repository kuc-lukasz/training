// importowanie reduxa
import { createStore } from "redux";

// tworzenie funkcji reducera, parametrami będą akcja oraz state
const reducerFn = (state = { licznik: 0 }, action) => {
    //synchroniczna funkcja
    if (action.type === "INC") {
        return { licznik: state.licznik + 1 };
    } else if (action.type === "DEC") {
        return { licznik: state.licznik - 1 };
    } else if (action.type === "ADD") {
        return { licznik: state.licznik + action.payload };
    }

    return state;
};

export const store = createStore(reducerFn);
