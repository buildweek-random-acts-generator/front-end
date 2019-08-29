import React, { useState, useEffect } from "react";
import axios from "axios";

import axiosWithAuth from "../../utils/axiosWithAuth";
import { Button, Icon, List } from 'semantic-ui-react';


const initialContact = {
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
};

const ContactsEdit = ({ props, contacts, updateContacts}) => {

    console.log("contacts data from Contacts List", contacts);
    const [editing, setEditing] = useState(false);
    const [contactToEdit, setContactToEdit] = useState(initialContact);

  console.log("contactToEdit", contactToEdit);

    const editContact = contact => {
      setEditing(true);
      setContactToEdit(contact);
    };

    const saveEdit = event => {
        // event.preventDefault();
        axiosWithAuth()
        .put(`https://random-ark-generator.herokuapp.com/api/contacts/${1}`, contactToEdit)

        .then(response => {
          console.log("saveEdit put request success for contacts", response.data)
          setContactToEdit(response.data);
          // props.history.push("/contacts");
        })
        .catch(error => console.log(error.response));
    };

    useEffect(() => {
      saveEdit();
    }, []);


return (
  <div className="contacts-edit-wrap">
  <ul>
    {contacts.map(contact => (
      <div 
        // key={contact.first_name} 
        onClick={() => editContact(`${contactToEdit.id}`)}>
                  {/* onClick={() => editContact(contact)}> */}

          <div className="edit" onClick={() => saveEdit(`${contactToEdit.id}`)}>
          {/* <div className="edit" onClick={() => saveEdit(contact)}> */}

          <Icon className="edit-icon" name="edit" />
        </div>
      </div>
    ))} 
  </ul>
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>edit contact</legend>
         {/* First name input  */}
<input
          type="text"
          name="first_name"
          onChange={event =>
            setContactToEdit({ ...contactToEdit, first_name: event.target.value })}
            placeholder="first name"
            value={contactToEdit.first_name}
        />
         {/* Last name input  */}
        <input
          type="text"
          name="last_name"
          onChange={event =>
            setContactToEdit({ ...contactToEdit, last_name: event.target.value })}
            placeholder="last name"
            value={contactToEdit.last_name}
        />
 {/* Email input  */}
<input
          type="text"
          name="email"
          onChange={event =>
            setContactToEdit({ ...contactToEdit, email: event.target.value })}
            placeholder="email"
            value={contactToEdit.email}
        />

         {/* Phone # input  */}
<input
          type="text"
          name="phone"
          onChange={event =>
            setContactToEdit({ ...contactToEdit, phone: event.target.value })}
            placeholder="phone #"
            value={contactToEdit.phone}
        />
         
          <div className="buttonz">
            <button type="submit">save edit</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )} 

    </div>
  );
};
export default ContactsEdit;

