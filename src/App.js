import './App.css';
import MainScreen from './mainComponent/Main';
import Sublogin from './mainComponent/Sublogin';
import Login from './mainComponent/Login';
import {
  HashRouter,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route path="/main">
            <MainScreen />
          </Route>
          <Route path="/sublogin" exact>
            <Sublogin />
          </Route>
          <Route path="/" exact>
            <Login />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
