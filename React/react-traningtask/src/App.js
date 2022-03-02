import "./App.css";
import { AddNewWorker } from "./components/form";
import { WorkerList } from "./components/WorkersList";

function App() {
    return (
        <div className="App">
            <AddNewWorker />
            <WorkerList />
        </div>
    );
}

export default App;
