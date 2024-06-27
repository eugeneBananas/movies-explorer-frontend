import "./Register.css";
import React from "react";
import Welcome from "../Welcome/Welcome.js";
import EntryForm from "../EntryForm/EntryForm.js";

function Register({setLoggedIn}) {
  return (
    <section className="register">
      <Welcome />
      <EntryForm setLoggedIn={setLoggedIn}/>
    </section>
  );
}

export default Register;
