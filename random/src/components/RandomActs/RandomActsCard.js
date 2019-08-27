import React from "react";
import './RandomActsCard.css';
import { Button, Image, List } from 'semantic-ui-react';

export default function RandomActsCard(props) {
  const { ark } = props.ark;

  return (
    <div classAdd='random-cards'>
      <ul>
        <li>{ark} <span>Edit</span><span>Delete</span></li>
      </ul>
    </div>
  )
}
