import { createContext, useEffect, useReducer } from "react";
import {
  createUserDocfromAuth,
  onAuthStateChangedListener,
} from "../utils/firebase/firebase.utils";

import { createAction } from "../utils/reducer/reducer.utils";

export const UserContext = createContext();

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currUser: payload,
      };

    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
};

const INITIAL_STATE = {
  currUser: null,
};

export const UserProvider = ({ children }) => {
  const [{ currUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);

  const setCurrUser = (user) => {
    dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
  };

  const value = { currUser, setCurrUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocfromAuth(user);
      }
      setCurrUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
