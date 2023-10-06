import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.components";

import "./sign-in.styles.scss";

import {
  signInWithGooglePopup,
  createUserDocfromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  return (
    <div className="signing-in-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default SignIn;
