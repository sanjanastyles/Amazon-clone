// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAMUP32j3BpkDxUAXAxJNqCbwdidmaadiE",
  authDomain: "clone-d14cb.firebaseapp.com",
  projectId: "clone-d14cb",
  storageBucket: "clone-d14cb.appspot.com",
  messagingSenderId: "617984240363",
  appId: "1:617984240363:web:99c65ea1b8c36125542cae",
  measurementId: "G-4JCKBB8BTC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore(firebaseApp);
const auth = firebase.auth();

export { db, auth };
