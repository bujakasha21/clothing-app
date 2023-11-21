import { AnyAction } from "redux";

import {
  signInFailed,
  signUpFailed,
  signOutFailed,
  signInSuccess,
  signOutSuccess,
} from "./user.action";
import { UserData } from "../../utils/firebase/firebase.utils";

export type UserState = {
  readonly currUser: UserData | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
};

const INITIAL_STATE: UserState = {
  currUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = INITIAL_STATE, action: AnyAction) => {
  if (signInSuccess.match(action)) {
    return {
      ...state,
      currUser: action.payload,
    };
  }

  if (signOutSuccess.match(action)) {
    return { ...state, currUser: null };
  }

  if (
    signInFailed.match(action) ||
    signOutFailed.match(action) ||
    signUpFailed.match(action)
  ) {
    return { ...state, error: action.payload };
  }

  return state;
};
