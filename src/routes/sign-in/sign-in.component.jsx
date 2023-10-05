import SignUpForm from "../../components/sign-up-form/sign-up-form.components";

import {
  signInWithGooglePopup,
  createUserDocfromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocfromAuth(user);
  };

  return (
    <div>
      <h1>SignIn</h1>;
      <button onClick={logGoogleUser}>Sign in with google</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
