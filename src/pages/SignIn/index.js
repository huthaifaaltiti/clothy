// React
import React, { useEffect } from "react";

// firebase
import {
  auth,
  signInWithGooglePopup,
  createUserDocFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";
import { getRedirectResult } from "firebase/auth";

// components
import SignUpForm from "../../components/SignUpForm";

// styles
import "./signIn.styles.scss";

export default function SignIn() {
  const logGooglePopupUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user);
  };

  // useEffect(() => {
  //   const myAsyncFun = async () => {
  //     const response = await getRedirectResult(auth);
  //    if (response) {
  //     // to store data in database-firebase
  //     const userDocRef = await createUserDocFromAuth(response.user);
  //    }
  //   };

  //   myAsyncFun();
  // }, []);

  return (
    <div className="sign-in-page">
      <div className="sign-in-page-cont">
        <h1>Sign In Page</h1>

        <button onClick={logGooglePopupUser}>Sign in with Google Popup</button>
        {/* <button onClick={signInWithGoogleRedirect}>
          Sign in with Google Redirect
        </button> */}

        <SignUpForm />
      </div>
    </div>
  );
}
