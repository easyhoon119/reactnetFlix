import './App.css';
import MainScreen from './mainComponent/Main';
import Sublogin from './mainComponent/Sublogin';
import Login from './mainComponent/Login';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/main">
            <MainScreen />
          </Route>
          <Route path="/login" exact>
            <Sublogin />
          </Route>
          <Route path="/" exact>
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
