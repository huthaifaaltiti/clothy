// React
import React from "react";
import {
  signInWithGooglePopup,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";

// styles
import "./signIn.styles.scss";

export default function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user);
  };

  return (
    <div className="sign-in-page">
      <div className="sign-in-page-cont">
        <h1>Sign In Page</h1>

        <button onClick={logGoogleUser}>Sign in with Google</button>
      </div>
    </div>
  );
}
