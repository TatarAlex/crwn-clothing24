import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBdU9LdYG2mvglAe33G0if5U3GI0DtBV8c",
  authDomain: "crwn-db24-469bd.firebaseapp.com",
  projectId: "crwn-db24-469bd",
  storageBucket: "crwn-db24-469bd.appspot.com",
  messagingSenderId: "213076061834",
  appId: "1:213076061834:web:8a487244412c532bcfc773",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
