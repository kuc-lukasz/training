import "./App.css";
import { Posts } from "./components/Posts";
import { Users } from "./components/Users";
import { ToDos } from "./components/Todos";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/todos">ToDo List</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/todos" element={<ToDos />} />
      </Routes>
    </div>
  );
}

export default App;

// <div className="App">
//       <Users />
//       <Posts />
//
//     </div>
