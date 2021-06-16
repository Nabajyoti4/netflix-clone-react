import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAWNyDn1NGdegH_gyLyb5yMQ3PfIt5pxk4",
  authDomain: "netflix-clone-5bd65.firebaseapp.com",
  projectId: "netflix-clone-5bd65",
  storageBucket: "netflix-clone-5bd65.appspot.com",
  messagingSenderId: "1028304340141",
  appId: "1:1028304340141:web:f4be1af8a1e238b1a9b224",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
