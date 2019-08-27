import React, { useState, useEffect } from "react";
import axios from "axios";
// import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialAct = {
    ark: '',
};

const ActsEdit = ({ acts, updateActs }) => {
    console.log("acts data from Random Acts List", acts);
    const [editing, setEditing] = useState(false);
    const [actToEdit, setActToEdit] = useState(initialAct);

  console.log("actToEdit", actToEdit);

    const editAct= ark => {
      setEditing(true);
      setActToEdit(ark);
    };


    // useEffect(() => {
    const saveEdit = event => {
        event.preventDefault();
        // axiosWithAuth()
        axios 
        .put(`http://localhost:5000/api/arks/${actToEdit.id}`, actToEdit)
        .then(response => {
          console.log("saveEdit put request success", response)
          // setActToEdit(response.data);
          // props.history.push("/randomactslist");
        })
        .catch(error => console.log(error.response));
    };

// }, []);


// const deleteAct = act => {

// }

return (
    <div>
        <h2>Update Acts </h2>
<form onSubmit={saveEdit}>
<legend>edit act</legend>

<input
              onChange={e =>
                setActToEdit({ ...actToEdit, ark: e.target.value })
              }
              value={actToEdit}
            />

</form>
        </div>

)
}

export default ActsEdit;




