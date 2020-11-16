import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header";
import SignInSignUp from './pages/SignInSignUp/SignInSignUp'
import { Switch, Route } from "react-router-dom";

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop/hats" component={Shop} />
        <Route  path='/signin' component={SignInSignUp}/>
      </Switch>
    </div>
  );
}

export default App;
