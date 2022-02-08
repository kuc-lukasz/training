import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppStyles from "./styles/App.module.css";
import { HomePage } from "./components/HomePage";
import { SingleProjectWindow } from "./components/SingleProjectWindow";
import { Projects } from "./components/Projects";
import { AboutMe } from "./components/AboutMe";

function App() {
    return (
        <div className={AppStyles.app}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route
                        path="/projects/:id/*"
                        element={<SingleProjectWindow />}
                    />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/aboutme" element={<AboutMe />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
