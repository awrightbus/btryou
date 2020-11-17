import React, { useEffect, useState } from "react";
import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header";
import SignInSignUp from './pages/SignInSignUp/SignInSignUp'
import {auth} from './firebase/firebase.utils'
import { Switch, Route } from "react-router-dom";



function App() {

const [currentUser, setCurrentUser] = useState(null);

let unsubscribeFromAuth = null

//component did mount
useEffect(()=>{
  unsubscribeFromAuth = auth.onAuthStateChanged(user =>{
    setCurrentUser(user)
    
  })
},[])

//component will unmount
useEffect(() => {
  
  return () => {
      unsubscribeFromAuth();
  }
}, [])

  return (
    <div className="app">
      <Header currentUser ={currentUser}/>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop/hats" component={Shop} />
        <Route  path='/signin' component={SignInSignUp}/>
      </Switch>
    </div>
  );
}

export default App;
