import AllMacs from "./Pages/AllMacs";
import Home from "./Pages/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
        <div className="header">
          <Router>
            <div className="nav">
              <Link to="/all">Все компьтеры Apple</Link>
              <Link to="/">Главная</Link>
            </div>
            <Switch>
              <Route path="/all">
                <AllMacs />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>  
            </Switch>
          </Router>
        </div>
    </div>
  );
}

export default App;