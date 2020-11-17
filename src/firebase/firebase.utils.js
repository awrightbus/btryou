import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDdreFHOnwCwigOU6srT5P8g7I37b4uMw0",
    authDomain: "btryou-db.firebaseapp.com",
    databaseURL: "https://btryou-db.firebaseio.com",
    projectId: "btryou-db",
    storageBucket: "btryou-db.appspot.com",
    messagingSenderId: "496211914875",
    appId: "1:496211914875:web:1c7e731987525e77a8f2de",
    measurementId: "G-YYTG55HG55"
  }

  firebase.initializeApp(config);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


  //authentican utility
  //setting the provider of authentication to be google
  const provider = new firebase.auth.GoogleAuthProvider();
  //allowing the authentication to create a pop up when activated on the page
  provider.setCustomParameters({promp:'select_account'});
  //setting the many available pop ups to the specific company were using google
  export const signInWithGoogle = () => auth.signInWithPopup(provider) 

  export default firebase;

  