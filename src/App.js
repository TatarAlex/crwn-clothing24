import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./page/homepage/homepage.component.jsx";
import ShopPage from "./page/shop/shop.component.jsx";
import Header from "./components/header/header.component.jsx";
import SignInAndSignUp from "./page/sign-in-and-sign-up/sign-in-and-sign-up.components.jsx";
import { auth } from "./firebase/firebase.utils.js";

import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState({});

  let unsubscribeFromAuth = null;

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setCurrentUser({ currentUser: user });
      // console.log(user);
    });

    return () => unsubscribeFromAuth();
  }, []);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
