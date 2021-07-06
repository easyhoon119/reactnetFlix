import './App.css';
import MainScreen from './mainComponent/Main';
import Sublogin from './mainComponent/Sublogin';
import Login from './mainComponent/Login';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  useHistory,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path={"/"} exact>
            <MainScreen />
          </Route>
          <Route path="/sublogin">
            <Sublogin />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
