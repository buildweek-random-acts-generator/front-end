import React from 'react';
import { Button, Icon, List } from 'semantic-ui-react';

export default function ContactsCard(props) {
 const { contact } = props.contact;
  
  return (
    <List divided verticalAlign="middle">
        <List.Item>
          <List.Content floated="right">
            <Icon name="delete" />
            <Icon name="edit" />
            {/* <Button>Edit</Button> */}
          </List.Content>
          <List.Content>Contacts goes here</List.Content>
        </List.Item>
      </List>
  )
}