import React, { useState } from "react";
import axios from "axios";
import './Contacts.css';

const ContactsAdd = props => {
    const [Contacts, setContacts] = useState ({});


const changeHandler = event => {
    event.persist();
    let value = event.target.value;

    setContacts({
        ...contacts,
        [event.target.name]: value
    });
};

const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
        .post(`https://random-ark-generator.herokuapp.com/api/contacts`, )
}

  


return (

    <div>
   
   
    </div>
  );

}

export default ContactsAdd;