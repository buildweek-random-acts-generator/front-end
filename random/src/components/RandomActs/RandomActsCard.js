import React, { useEffect } from "react";
import './Random.css';
import { Button, Icon, List } from 'semantic-ui-react';

import axiosWithAuth from "../../utils/axiosWithAuth";


import RandomActsEdit from "./RandomActsEdit";
// import RandomActsDelete from "./RandomActsDelete";



export default function RandomActsCard(props) {
  const { ark } = props.ark;
  const { id } = props.id;
  console.log('ark = ', ark)
  console.log('id = ', id)

  const attemptedDelete = (item) => { 
    console.log('attempted to delete ', item)
  }
  
 const attemptedEdit = (item, id) => { 
    console.log('attempted to edit ', item)
    // event.preventDefault();
    axiosWithAuth()
    .put(`https://random-ark-generator.herokuapp.com/api/arks/${id}`)
    .then(response => {
      console.log("saveEdit put request success", response.data)
      // setActToEdit(response.data);
      // props.history.push("/ideas");
    })
    .catch(error => console.log(error.response));
};

useEffect(() => {
  attemptedEdit();
}, []);

  return (
    <List divided verticalAlign="middle">
      <List.Item>
        <List.Content floated="right">
          {/* <RandomActsDelete />  */}
        <Icon name='delete' onClick={() => attemptedDelete(ark, id)} />
        <Icon name='edit'  onClick={() => attemptedEdit(id)} /> 
        </List.Content> 
        <List.Content className="random-actz">{ark}</List.Content>
      
      </List.Item>
    </List>
  )
}


