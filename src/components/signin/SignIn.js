import React, { useState } from "react";
import FormInput from "../forminput/FormInput";
import CustomBtn from '../custombtn/CustomBtn'
import "./SignIn.scss";

// this function will store what the user is typing in

function SignIn() {
  const [signInCredentials, setSignInCredentials] = useState({
    email: "",
    password: "",
  });

  //
  const handleSubmit = (e) => {
    e.preventDefault();
    setSignInCredentials({
      email: "",
      password: "",
    });
  };
  //capture user input and pulling te value and the name to set it as the state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignInCredentials({
      [name]: value,
    });
  };

  
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={signInCredentials.email}
          handleChange={handleChange}
          label="email"
          required
        />

        <FormInput
          name="password"
          label="password"
          type="password"
          value={signInCredentials.password}
          handleChange={handleChange}
          required
        />

        <CustomBtn type="submit">Submit</CustomBtn>
      </form>
    </div>
  );
}

export default SignIn;
