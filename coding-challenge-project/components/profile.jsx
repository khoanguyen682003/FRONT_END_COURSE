import React from "react";
import { SignIn } from "./signIn.jsx";
import { SignUp } from "./signUp.jsx";

export function Profile() {
  return (
    <div id="form">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default Profile;
