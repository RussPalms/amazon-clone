import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAEBRNIgpEB4nuElRtjjMshSZkgwrjAqSE",
    authDomain: "azcl-420.firebaseapp.com",
    projectId: "azcl-420",
    storageBucket: "azcl-420.appspot.com",
    messagingSenderId: "545981468121",
    appId: "1:545981468121:web:6f207eb339fed84f815dc8",
    measurementId: "G-2WMWYX8ML0"
  };

// In this code, we initialize a Firebase app with the config.
const firebaseApp = firebase.initializeApp(firebaseConfig);

// We get database and authentication from your Firebase Project
// and export these objects so that we can use them anywhere.
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };