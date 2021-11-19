import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyCGiIwOO3n2xrludZ3FBV2DHqjUc75u8ws",
  authDomain: "crown-db-e28b6.firebaseapp.com",
  databaseURL: "https://crown-db-e28b6.firebaseio.com",
  projectId: "crown-db-e28b6",
  storageBucket: "crown-db-e28b6.appspot.com",
  messagingSenderId: "842712932280",
  appId: "1:842712932280:web:08359e2e14e3ddf389f94d",
  measurementId: "G-XXSZKPPR3P",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating the user..", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
