import "../styles/App.css";
import { Posts } from "./Posts";
import { Users } from "./Users";
import { ToDos } from "./Todos";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { PluralPhoto, PostPhoto, ToDoPhoto } from "./UserPhotos";

function App() {
  const HomePage = () => {
    return (
      <div className="welcomeMyApp">
        <h1>Welcome to my APP</h1>
      </div>
    );
  };

  return (
    <div className="first-page">
      <ul className="nav-list">
        <li>
          <Link to="/">Home</Link>
        </li>
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
      <Link to="/"></Link>

      <Routes>
        <Route path="/" element={<HomePage />} />
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
