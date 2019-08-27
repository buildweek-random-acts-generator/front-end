import React from 'react';
import { Route } from "react-router-dom";
import './App.css';
import FormikLoginForm from "./components/LoginForm";
import FormikSignUpForm from "./components/SignUpForm"
import Nav from "./components/Nav";
import RandomActsList from './components/RandomActs/RandomActsList';

function App() {
  return (
    <div>
      <Nav />
      <Route exact path='/login' component={FormikLoginForm} />
      <Route exact path='/signup' component={FormikSignUpForm} />
    {/* <FormikSignUpForm />
     <LoginForm /> */}
     <RandomActsList />
    </div>
  );
}

export default App;
