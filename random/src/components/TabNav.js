import React from 'react';
import { Tab } from 'semantic-ui-react';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';

const panes = [
  {
    menuItem: {key: 'home', icon: 'home', content: 'Home Page'},
    render: () => 
    <Tab.Pane>
      Welcome Page
    </Tab.Pane>
  },
  {
    menuItem: {key: 'login', icon: 'user', content: 'Login'},
    render: () => 
    <Tab.Pane>
      <LoginForm />
    </Tab.Pane> },
  {
    menuItem: {key: 'signup', icon: 'address card', content: 'Sign Up'}, 
    render: () =>
    <Tab.Pane>
      <SignUpForm />
    </Tab.Pane> },
];


export default function TabNav() {
  return <Tab className='container' panes={ panes } />
}

// ./src/components/TabNav.js
//   Line 24:  'SignUp' is not defined  react/jsx-no-undef

// ./src/components/TabNav.js
// Module not found: Can't resolve './components/LoginForm' in 'C:\Users\Jengo\Documents\Lambda\front-end\random\src\components'
