import React, {
  useState,
  useEffect
} from 'react';
import {
  Link
} from 'react-router-dom';
import axios from 'axios';
import axiosWithAuth from "../../utils/axiosWithAuth"
import ContactsCard from './ContactsCard';

import './Contacts.css';

import ContactsEdit from "./ContactsEdit";
import ContactsDelete from "./ContactsDelete";


const ContactsList = () => {
  const [contacts, setContacts] = useState([]);
  console.log("contactz", contacts);
  
  useEffect(() => {
    const id = localStorage.getItem('id')    

    axiosWithAuth().get(`https://random-ark-generator.herokuapp.com/api/contacts/${id}`)
      .then(res => {
        setContacts(res.data)
      })
      .catch(err => console.log('Contacts list not working ', err))
  }, []);

  return ( 
    <div className = "ContainerContact" >

<div>
<ContactsEdit contacts={contacts} updateContacts={setContacts} />
  </div>
  <div>
<ContactsDelete contacts={contacts} deleteContacts={setContacts} />
  </div>

    <div className = 'contacts-cards'>
    <table className = "tableContacts">
    <thead>
    <th > First Name </th> 
    <th> Last Name </th> 
    <th> Phone Number </th> 
    <th > Actions </th> 
    </thead> {
      contacts.length ? (
        contacts.map(contact => {
          return <ContactsCard contact = {contact} />
        })
      ) : ( 
        <p > Loading... </p>
      )
    } 
    </table> 
    </div>
    </div> 

  )
}


export default ContactsList;
