import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCfUL6JzwzKZ2vXW1cDrMg_Gj8xRivR93Q",
  authDomain: "clone-f0511.firebaseapp.com",
  databaseURL: "https://clone-f0511.firebaseio.com",
  projectId: "clone-f0511",
  storageBucket: "clone-f0511.appspot.com",
  messagingSenderId: "988455930173",
  appId: "1:988455930173:web:da07b743424042b6d49d54",
  measurementId: "G-ESXG1XR8W1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
export { db, auth };
