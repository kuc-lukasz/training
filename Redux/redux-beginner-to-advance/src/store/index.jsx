// // importowanie reduxa
// import { createStore } from "redux";

// // tworzenie funkcji reducera, parametrami będą akcja oraz state
// const reducerFn = (state = { licznik: 0 }, action) => {
//     //synchroniczna funkcja
//     if (action.type === "INC") {
//         return { licznik: state.licznik + 1 };
//     } else if (action.type === "DEC") {
//         return { licznik: state.licznik - 1 };
//     } else if (action.type === "ADD") {
//         return { licznik: state.licznik + action.payload };
//     } else if (action.type === "DEL") {
//         return { licznik: state.licznik - 10 };
//     }

//     return state;
// };

// export const store = createStore(reducerFn);

import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: { counter: 0 },
    reducers: {
        increment(state, action) {
            state.counter++;
        },
        decrement(state, action) {
            state.counter--;
        },
        addBy(state, action) {
            state.counter += action.payload;
        },
        delBy10(state, action) {
            state.counter -= 10;
        },
    },
});

export const store = configureStore({
    reducer: counterSlice.reducer,
});

export const actions = counterSlice.actions;
