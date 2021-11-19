import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyC-mE9WFJ0k5dmgbRwh0UMC7jBN2tld2yQ",
  authDomain: "crown-db-b1a12.firebaseapp.com",
  projectId: "crown-db-b1a12",
  storageBucket: "crown-db-b1a12.appspot.com",
  messagingSenderId: "952162037133",
  appId: "1:952162037133:web:4c3490f8d827f0cd15a1c4",
  measurementId: "G-63DW2TL10J",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
