import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyDgPh2zgXJggaJWE3zRxIwyjr-4rGbqmhE",
    authDomain: "crwn-db-2453e.firebaseapp.com",
    projectId: "crwn-db-2453e",
    storageBucket: "crwn-db-2453e.appspot.com",
    messagingSenderId: "2521398334",
    appId: "1:2521398334:web:4f602744e64cce98b7e56f",
    measurementId: "G-R78L9JYNRY"
  }
  firebase.initializeApp(config);
  export const auth= firebase.auth();
  export const firestore = firebase.firestore();
  const provider= new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle= ()=>auth.signInWithPopup(provider);

  export default firebase;