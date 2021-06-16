import React from "react";
import Nav from "../components/UI/Nav";
import classes from "./Profile.module.css";
import { useSelector } from "react-redux";
import { auth } from "../firebase";

function Profile() {
  const user = useSelector((state) => state.user.user);

  return (
    <div className={classes.profile}>
      <Nav></Nav>
      <div className={classes.profile__body}>
        <h1>Edit Profile</h1>
        <div className={classes.profile__info}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZWr4HVTvL9Mizj4dpW3qfR-oyFGpTXx6wXg&usqp=CAU"
            alt=""
          ></img>
          <div className={classes.profile__details}>
            <h2>{user.email}</h2>
            <div className={classes.profile__plans}>
              <h3>Plans</h3>
              <button
                onClick={() => {
                  auth.signOut();
                }}
                className={classes.profile__signOut}
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
