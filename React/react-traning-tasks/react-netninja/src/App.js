import { Home } from "./Home";
import { Navbar } from "./Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CreateBlog } from "./CreateBlog";
import { BlogDetails } from "./BlogDetails";

export const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            {/* Tutaj znajdują się wszystkie ścieżki  */}
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <CreateBlog />
            </Route>
            <Route path="/blogs/:id">
              {/* możemy zamiast id wpisać cokolwiek chcemy  */}
              <BlogDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};
