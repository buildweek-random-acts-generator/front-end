import React from "react";
import './RandomActsCard.css';
import { Button, List } from 'semantic-ui-react';


export default function RandomActsCard(props) {
  const { ark } = props.ark;

  return (
    <div classAdd='random-cards'>
    <List divided verticalAlign="middle">
        <List.Item>
          <List.Content floated="right">
            <Button>Edit</Button>
          </List.Content>
          <List.Content>{ark}</List.Content>
        </List.Item>
      </List>
      {/* <ul>
        <li>{ark} <span>Edit</span><span>Delete</span></li>
      </ul> */}
    </div>
  )
}
