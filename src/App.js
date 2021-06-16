import { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "./store/auth";

import Home from "./pages/Home";
import Login from "./pages/Login";
import { auth } from "./firebase";
import Profile from "./pages/Profile";

function App() {
  const authUserState = useSelector((state) => state.user);
  const user = authUserState;
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          userActions.login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(userActions.logout());
      }
    });

    return unsubscribe;
  }, []);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login></Login>
        ) : (
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/profile">
              <Profile></Profile>
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
