import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import firebase from "firebase/compat/app";

import App from "App";

const {
  REACT_APP_FIREBASE_API_KEY,
  REACT_APP_FIREBASE_APP_ID,
  REACT_APP_FIREBASE_BUCKET,
  REACT_APP_FIREBASE_DOMAIN,
  REACT_APP_FIREBASE_ID,
  REACT_APP_FIREBASE_MEASUREMENT_ID,
  REACT_APP_FIREBASE_SENDER_ID,
} = process.env;

firebase.initializeApp({
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: REACT_APP_FIREBASE_DOMAIN,
  projectId: REACT_APP_FIREBASE_ID,
  storageBucket: REACT_APP_FIREBASE_BUCKET,
  messagingSenderId: REACT_APP_FIREBASE_SENDER_ID,
  appId: REACT_APP_FIREBASE_APP_ID,
  measurementId: REACT_APP_FIREBASE_MEASUREMENT_ID,
});

const firestore = firebase.firestore();
const auth = firebase.auth();

export const FireBaseContext = createContext(null);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <FireBaseContext.Provider
      value={{
        auth,
        firestore,
        firebase,
      }}
    >
      <App />
    </FireBaseContext.Provider>
  </Router>
);
