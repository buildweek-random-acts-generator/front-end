import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './Contacts.css';

const ContactList = () => {
  const [contact, setContact] = useState([]);

  useEffect(() => {
    axios.get('https://random-ark-generator.herokuapp.com/api/')
    .then(res => {
      console.log(res.data)
      setContact(res.data)
    })
    .catch(err => console.log('Cannot get contacts...', err))
  }, []);

  return (
    <div>
      <h1>Contact LIST</h1>
    </div>
  )
}

export default ContactList;
