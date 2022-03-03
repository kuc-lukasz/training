import "./App.css";
import { AddNewWorker } from "./components/form";
import { Home } from "./components/home";
import { WorkerList } from "./components/WorkersList";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/create" element={<AddNewWorker />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
