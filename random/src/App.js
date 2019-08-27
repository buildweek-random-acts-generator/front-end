import React from 'react';
import './App.css';
import LoginForm from "./components/LoginForm";
import FormikSignUpForm from "./components/SignUpForm"


function App() {
  return (
    <div>
    <FormikSignUpForm />
     <LoginForm />
    </div>
  );
}

export default App;
