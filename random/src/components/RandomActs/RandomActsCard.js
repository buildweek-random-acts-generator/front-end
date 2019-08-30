import React, { useState, useEffect } from "react";
import './Random.css';
import { Button, Icon, List } from 'semantic-ui-react';

import axiosWithAuth from "../../utils/axiosWithAuth";


import RandomActsEdit from "./RandomActsEdit";
// import RandomActsDelete from "./RandomActsDelete";


const RandomActsCard = ({ props, id, act, updateActs, deleteActs }) => {
  // console.log("acts data from Random Acts List", acts);
  console.log("act data from Random Acts List", act);
  // console.log("props from Random Acts List", props);
  console.log("id from Random Acts List", id);



  const initialActState = {
  ark: '',
  id: '',
  user_id: '',

  }

  const [actToEdit, setActToEdit] = useState(initialActState);
  // const [actToDelete, setActToDelete] = useState(initialActState);

  const [editing, setEditing] = useState(false);
  // const [deleting, setDeleting] = useState(false);


  console.log("actToEdit from Random Acts Card", actToEdit );
  // console.log("actToDelete from Random Acts Card", actToDelete );


  const editAct = act => {
    console.log("edit act ", act)
    setEditing(true);
    setActToEdit( {
      ark: act.ark,
      id: act.id,
      user_id: act.user_id
    });
  };

  // const deleteAct = item=> {
  //   console.log("delete act item", item)
  //     setDeleting(true);
  //     setActToDelete(item);
  //   };

  const saveEdit = item => {
    console.log("saveEdit item", item)
    // event.preventDefault();
    axiosWithAuth()
    .put(`https://random-ark-generator.herokuapp.com/api/arks/${act.id}`, act)
    .then(response => {
      console.log("saveEdit put request success", response.data)
      // setActToEdit(response.data);
      // props.history.push("/ideas");
    })
    .catch(error => console.log(error.response));
};

useEffect(() => {
  saveEdit();
}, []);

console.log("act", act)
console.log("act.id ", act.id)


// const saveDelete = item => {
//   console.log("saveDelete item", item)
//   axiosWithAuth()
//     .delete(`https://random-ark-generator.herokuapp.com/api/arks/${act.id}`)
//     .then(response => {
//       console.log("deleteAct delete request success", response.data);
//       // deleteActs(acts.filter(act => act.id !== act.id));
//       // props.history.push("/ideas");
//     })
//     .catch(error => console.log(error.response));
// };

// useEffect(() => {
//   saveDelete();
// }, []);

console.log("actToEdit", actToEdit);
console.log("act", act);
// console.log("edit act", editAct);

  return (
    <List divided verticalAlign="middle">
      <List.Item>
        <List.Content floated="right">
          <div>

       {/* Editing  */}
        <div onClick={() => editAct(`${act.id}`)}>
        <Icon name='edit' onClick={() => saveEdit(`${act.id}`)} /> 
        </div>



        {editing && (
        <form onSubmit={saveEdit}>
          <legend>edit act</legend>
         
            <label>Act </label> 
            <input
              onChange={event =>
                setActToEdit({ ...act, ark: event.target.value })
              }
              value={act.ark}
            />
        
         
          <div className="buttonz">
            <button type="submit">save edit</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )} 


        </div>

            {/* Deleting  */}
              {/* <div onClick={() => deleteAct(`${actToDelete.id}`)}>
              <Icon name='trash alternate outline' onClick={() => saveDelete(`${actToDelete.id}`)} /> 
              </div> */}
        </List.Content> 
        <List.Content className="random-actz">{act.ark}</List.Content>
      
      </List.Item>
    </List>
  )
}


export default RandomActsCard;

