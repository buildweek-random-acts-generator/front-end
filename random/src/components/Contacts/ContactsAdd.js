import React, { useState } from "react";
import axios from "axios";
import './Random.css';

const ContactsAdd = props => {
    const [Contacts, setContacts] = useState ({});


const changeHandler = event => {
    event.persist();
    let value = event.target.value;

    setContacts({
        ...Contacts,
        [event.target.name]: value
    });
};

const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
        .post()
}

  


return (

    <div>
   
   
    </div>
  );

}

export default ContactsAdd;