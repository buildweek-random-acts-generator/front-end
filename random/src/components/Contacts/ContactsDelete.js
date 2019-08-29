import React, { useState, useEffect } from "react";
import axios from "axios";

import axiosWithAuth from "../../utils/axiosWithAuth";
import { Button, Icon, List, Image } from 'semantic-ui-react';

const initialContact = {
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
};

const ContactsDelete = ({ props, contacts, deleteContacts}) => {
    console.log("contacts data from Contacts List", contacts);
    const [deleting, setDeleting] = useState(false);
    const [contactToDelete, setContactToDelete] = useState(initialContact);

  console.log("contactToDelete", contactToDelete);

    const deleteContact= contact => {
    console.log("contact", contact)
      setDeleting(true);
      setContactToDelete(contact);
    };


const saveDelete = contact => {
    axiosWithAuth()
      .delete(`https://random-ark-generator.herokuapp.com/api/contacts/${contact.id}`)
      .then(response => {
        console.log("deleteContact delete request success", response.data);
        deleteContacts(contacts.filter(contact => contact.id !== contact.id));
        // props.history.push("/contacts");
      })
      .catch(error => console.log(error.response));
  };

//   useEffect(() => {
//     saveDelete();
//   }, []);

return (
    <div className="contacts-delete-wrap">
      <ul>
        {contacts.map(contact => (
          <div key={contact.last_name} onClick={() => deleteContact(contact)}>
            <span>
              <span className="delete" onClick={() => saveDelete(contact)}>
              <Icon className="delete-icon" name="trash alternate outline
" />
              </span>{" "}
            </span>
          </div>
        ))}
      </ul>

    </div>
  );
};
export default ContactsDelete;


