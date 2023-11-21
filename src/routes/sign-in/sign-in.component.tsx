import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.components";

import { SigninInContainer } from "./sign-in.styles";

const SignIn = () => {
  return (
    <SigninInContainer>
      <SignInForm />
      <SignUpForm />
    </SigninInContainer>
  );
};

export default SignIn;
