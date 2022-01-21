import "./App.css";
import { Posts } from "./components/Posts";
import { Users } from "./components/Users";
import { ToDos } from "./components/Todos";

function App() {
  return (
    <div className="App">
      <Users />
      <Posts />
      <ToDos />
    </div>
  );
}

export default App;
