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
  const user = useSelector((state) => state.user.user);
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
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login></Login>
        ) : (
          <Switch>
            <Route path="/profile">
              <Profile></Profile>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
