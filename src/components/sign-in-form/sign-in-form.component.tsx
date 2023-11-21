import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";

//styles
import { SignInContainer, ButtonsContainer } from "./sign-in-form.styles";

import FormInput from "../form-input/form-input-component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../store/user/user.action";

const defaultFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFields);
  const { email, password } = formFields;
  const dispatch = useDispatch();

  const resetFields = () => {
    setFormFields(defaultFields);
  };

  const logGoogleUser = async () => {
    dispatch(googleSignInStart());
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
      resetFields();
    } catch (err) {
      console.log("Try again! Check you profile informations.", err);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign In!</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Enter Email"
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
          required
        />

        <FormInput
          label="Password"
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
          required
        />
        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            onClick={logGoogleUser}
            buttonType={BUTTON_TYPE_CLASSES.google}
          >
            Google Sign In
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
