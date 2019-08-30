import React, { useState, useEffect } from "react";
 import axiosWithAuth from "../../utils/axiosWithAuth";
// import axios from "axios";

const ContactsEdit = props => {
    const [contacts, setContacts] = useState({ first_name: "", last_name: "", phone: "" });
        console.log(contacts)
   
    useEffect(() => {
        console.log('hi');
        const id = props.match.params.id;
        const itemInArr = props.contacts.find(contact => `${contact.id}` === id);
        if (itemInArr) setContacts(itemInArr);
    }, [props.contacts, props.match.params.id]);

    const changeHandler = ev => {
        ev.persist();
        
        let value = ev.target.value;

        setContacts({
            ...contacts,
            [ev.target.name]: value
        });

        
    };


    const handleSubmit = e => {
        e.preventDefault();
        console.log(contacts)
        const user_id = localStorage.getItem('id')
        axiosWithAuth()
            .put(`https://random-ark-generator.herokuapp.com/api/contacts/${user_id}`, contacts)
            .then(res => {
                 console.log("contacts", res.data);
                props.history.push('/contacts');
                setContacts({ first_name: "", last_name: "", phone: "" });
                props.updatecontacts(res.data);

            })
            .catch(err => console.log(err.response));
    };

    return (
        <div>

            <div>
                <div>
                    <h2>Update Contact</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="last_name"
                            placeholder="First Name"
                            onChange={changeHandler}
                            value={contacts.first_name}
                        />
                        <input
                            type="text"
                            name="last_name"
                            placeholder="last Name"
                            onChange={changeHandler}
                            value={contacts.last_name}
                        />
                        <input
                            type="text"
                            name="phone"
                            placeholder="phone"
                            onChange={changeHandler}
                            value={contacts.phone}
                        />

                        <button type="submit">
                            Update Contact
          </button>
                    </form>
                </div>


            </div>
        </div>

    );
}

export default ContactsEdit;