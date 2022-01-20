import { useState } from "react";
import { logOut, signIn as APISignIn, signUp as APISignUp } from "../api/requestAuth";

export const useAuth = () => {
  const [ authUser, setAuthUser ] = useState(null);
  const signIn = async requestData => {
    const userData = await APISignIn(requestData);
    setAuthUser(userData);
  }
  const signUp = async requestData => {
    const userData = await APISignUp(requestData);
  }
  const signOut = () => {
    logOut();
    setAuthUser(null);
  }
  return { authUser, signIn, signUp, signOut }
}