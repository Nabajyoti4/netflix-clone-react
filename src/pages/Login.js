import React, { useState } from "react";
import SignIn from "../components/SignIn";
import classes from "./Login.module.css";

function Login() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className={classes.login}>
      <div className={classes.login__background}>
        <img
          className={classes.login__logo}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png"
          alt="Netflix"
        ></img>
        <button onClick={() => setSignIn(true)} className={classes.login__btn}>
          Sign In
        </button>

        <div className={classes.login__gradient}></div>

        <div className={classes.login__body}>
          {signIn ? (
            <SignIn></SignIn>
          ) : (
            <React.Fragment>
              <h1>Unlimited movies, TV shows and more.</h1>
              <h2>Watch anywhere. Cancel anytime</h2>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>

              <div className={classes.login__input}>
                <form>
                  <input type="email" placeholder="Email Address"></input>
                  <button
                    onClick={() => setSignIn(true)}
                    className={classes.login__btnEmail}
                  >
                    Get Started
                  </button>
                </form>
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
