import React from 'react';
import './App.css';
import TabNav from './components/TabNav';

import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <TabNav />
       <LoginForm />
       <SignUpForm />
      </header>
    </div>
  );
}

export default App;
