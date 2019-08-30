import React from 'react';
import axiosWithAuth from "../../utils/axiosWithAuth";
import './Contacts.css';
import { Link } from 'react-router-dom';
export default function ContactsCard(props) {
  const { first_name, last_name, phone } = props.contact;

  const handleSubmit = () => {
  
    const id = props.contact.id
    axiosWithAuth().delete(`https://random-ark-generator.herokuapp.com/api/contacts/${id}`)
      .then(res => {
    
        console.log(res.data);

      })
  }
  

  return (

    <tr className = "listContacts" >

    <td> {first_name} </td> 
    <td>{last_name} </td> 
    <td>{phone} </td> 
    < td > 
    <button className="delete-button" type="submit" onClick={() => handleSubmit()}> 
    Delete 
    </button>
  <Link to={`/updatecontact/${props.contact.id}`} className="update-button"> Edit </Link>
    </td >

    </tr>


  )
}