import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import axiosWithAuth from "../../utils/axiosWithAuth"
import ContactsCard from './ContactsCard';

import './Contacts.css';


const ContactsList = (user_id) => {
  const [contact, setContact] = useState([]);

  useEffect(() => {
    axiosWithAuth().get(`https://random-ark-generator.herokuapp.com/api/contacts/${user_id}`)
    .then(res => {
      console.log(res.data)
      setContact(res.data)
    })
    .catch(err => console.log('Contacts list not working ', err))
  }, []);

  return (
    <div>
      <div className="contact-wrap">
        <h1>Contacts</h1>
        </div>
        <div className='contacts-cards'>
          <ContactsCard />
      </div>
    </div>
  )
}

export default ContactsList;
