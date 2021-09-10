import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAzcpbBpSCbnUNQngYB3KqsEwbkzmS_FEU",
  authDomain: "e-commerce-887aa.firebaseapp.com",
  databaseURL: "https://e-commerce-887aa-default-rtdb.firebaseio.com",
  projectId: "e-commerce-887aa",
  storageBucket: "e-commerce-887aa.appspot.com",
  messagingSenderId: "626765668267",
  appId: "1:626765668267:web:2a426faf8eb5757aaa3cee",
  measurementId: "G-JWNZRBTM9N"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }; 