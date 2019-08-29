import React from 'react';
export default function ContactsCard(props) {
  const {
    first_name,
    last_name,
    phone,
    email
  } = props.contact;

  return (



    <tr className = "listContacts" >

    <td> {first_name} </td> 
    <td>{last_name} </td> 
    <td>{phone} </td> 
    <td> Edit / Delete </td>

    </tr>


  )
}