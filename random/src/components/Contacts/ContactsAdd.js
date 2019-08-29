import React, { useState } from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";
import './Contacts.css';

const ContactsAdd = props => {
    const [contact, setContact] = useState ({first_name: ""});


const changeHandler = event => {
    event.persist();
    let value = event.target.value;

    setContact({
        ...contact,
        [event.target.name]: value
    });
};

const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
        .post(`https://random-ark-generator.herokuapp.com/api/contacts/`, contact)
        .then(res => {
            setContact({
                first_name: ''
            });
        })
        .catch(err => console.log(err.response))
};

return (

    <div>
    <div className = "contact-wrap">
    <h1> Contacts </h1> 
    </div> 
   <form className="contactsForm" onSubmit= {handleSubmit}>
       <input type="text"
       className="inputContact"
       name="contact"
       placeholder="Add Contact"
       onChange={changeHandler}
       value={contact.first_name}
   />

<button className="contactbtn" type="submit" >Add Contact </button> 
        </form>

    </div>    

);

}

export default ContactsAdd;