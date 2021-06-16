import React, { useRef } from "react";
import classes from "./SignIn.module.css";
import { auth } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../store/auth";

function SignIn() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const dispatch = useDispatch();

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        dispatch(
          userActions.login({
            uid: authUser.uid,
            email: authUser.email,
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className={classes.signIn}>
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder="Email" type="email"></input>
        <input ref={passwordRef} placeholder="Password" type="password"></input>
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className={classes.signIn__gray}>New to Netflix?</span>
          <span className={classes.signIn__link} onClick={register}>
            {" "}
            Sign Up Now
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignIn;
