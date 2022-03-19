import firebase from "firebase/compat/app"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDund1lS4GKN8UeaERrnkO-m-2Bj8EJOVM",
    authDomain: "todo-32c5c.firebaseapp.com",
    projectId: "todo-32c5c",
    storageBucket: "todo-32c5c.appspot.com",
    messagingSenderId: "703399776816",
    appId: "1:703399776816:web:d4bf1b0d9731de49a2d3f5",
    measurementId: "G-LSH9X0GCSK"
  };

const app = firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();//connected to the firestore database
