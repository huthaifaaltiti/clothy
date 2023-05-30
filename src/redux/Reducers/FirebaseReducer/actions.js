// Firebase reducer constants
import * as FIREBASE_CONSTANTS from "./constants";

// firebase
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

// functions
export const signInWithGooglePopup = () => async (dispatch) => {
  try {
    dispatch({
      type: FIREBASE_CONSTANTS.FIREBASE_FETCH_DATA_REQUEST,
    });

    const firebaseConfig = {
      apiKey: "YOUR_API_KEY",
      authDomain: "YOUR_AUTH_DOMAIN",
      projectId: "YOUR_PROJECT_ID",
      storageBucket: "YOUR_STORAGE_BUCKET",
      messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
      appId: "YOUR_APP_ID",
    };

    const firebaseApp = initializeApp(firebaseConfig);

    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: "select_account",
    });

    const auth = getAuth();

    const signInWithGoogle = () => signInWithPopup(auth, provider);
    const { user } = await signInWithGoogle(); // Retrieve user data

    const db = getFirestore();

    const createUserDocFromAuth = async (user) => {
      const userDocRef = doc(db, "users", user.uid);

      await setDoc(userDocRef, {
        name: user.displayName,
        email: user.email,
      });

    };
    
    console.log(createUserDocFromAuth);
    // console.log("user:", user);

    dispatch({
      type: FIREBASE_CONSTANTS.FIREBASE_FETCH_USER_DATA_SUCCESS,
      // payload: signInWithGooglePopup,
    });
  } catch (error) {
    dispatch({
      type: FIREBASE_CONSTANTS.FIREBASE_FETCH_DATA_FAILURE,
      payload: error.message,
    });
  }
};