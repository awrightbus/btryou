import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import Shop from './pages/shop/Shop'
import { Switch, Route } from "react-router-dom";


const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

function App() {

  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop/hats" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
