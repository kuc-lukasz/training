import "../styles/App.css";
import { Posts } from "./Posts";
import { Users } from "./Users";
import { ToDos } from "./Todos";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { PluralPhoto, PostPhoto, ToDoPhoto } from "./UserPhotos";

function App() {
  return (
    <div className="navigation">
      <ul className="nav-list">
        <li>
          <Link to="/users">
            Users
            <PluralPhoto />
          </Link>
        </li>
        <li>
          <Link to="/posts">
            Posts
            <PostPhoto />
          </Link>
        </li>
        <li>
          <Link to="/todos">
            ToDo List
            <ToDoPhoto />
          </Link>
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
