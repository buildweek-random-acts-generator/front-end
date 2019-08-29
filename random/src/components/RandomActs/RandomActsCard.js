import React from "react";
import './Random.css';
import { Button, Icon, List } from 'semantic-ui-react';


import RandomActsEdit from "./RandomActsEdit";
// import RandomActsDelete from "./RandomActsDelete";



export default function RandomActsCard(props) {
  const { ark } = props.ark;

  return (
    <List divided verticalAlign="middle">
      <List.Item>

        <List.Content floated="right">
          <RandomActsEdit />
          {/* <RandomActsDelete /> 
        <Icon name='delete' />
        <Icon name='edit' /> */}
        </List.Content> 
        <List.Content className="random-actz">{ark}</List.Content>
      
      </List.Item>
    </List>
  )
}


