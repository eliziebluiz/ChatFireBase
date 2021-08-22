import firebase from "firebase";

const fireBaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCGV6veYzsc7LgT6tjbV0PuhNRRQb6xDHo",
  authDomain: "chatfire-a6788.firebaseapp.com",
  projectId: "chatfire-a6788",
  storageBucket: "chatfire-a6788.appspot.com",
  messagingSenderId: "647145096168",
  appId: "1:647145096168:web:e2ed49e6301708469b9a5d",
  measurementId: "G-WLJ7H1KZ1C",
});

export const db = fireBaseApp.firestore();

export const auth = firebase.auth();
