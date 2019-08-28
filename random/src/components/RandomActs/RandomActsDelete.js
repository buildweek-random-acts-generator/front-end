// import React, { useState, useEffect } from "react";
// import axios from "axios";

// import axiosWithAuth from "../../utils/axiosWithAuth";
// // import { Button, Icon, List } from 'semantic-ui-react';


// const initialAct = {
//     ark: '',
// };

// const ActsDelete= ({ props, acts, updateActs }) => {
//     console.log("acts data from Random Acts List", acts);
//     // const [delete, setDelete] = useState(false);
//     const [actToDelete, setActToDelte] = useState(initialAct);

//   console.log("actToEdit", actToDelete);

//     const toggleDelete = ark => {
//       setDelete(true);
//       setActToDelete(ark);
//     };

//     // const saveEdit = event => {
//     //     // - comment out event.preventDefault();
//     //     axiosWithAuth()
//     //     .put(`https://random-ark-generator.herokuapp.com/api/arks/${actToEdit.id}`, actToEdit)
//     //     .then(response => {
//     //       console.log("saveEdit put request success", response.data)
//     //       // - comment out setActToEdit(response.data);
//     //       // - comment out props.history.push("/ideas");
//     //     })
//     //     .catch(error => console.log(error.response));
//     // };

//     // useEffect(() => {
//     //   saveEdit();
//     // }, []);

// const deleteAct = ark => {
//     axiosWithAuth()
//       .delete(`https://random-ark-generator.herokuapp.com/api/arks/${actToDelete.id}`)
//       .then(response => {
//         console.log("deleteAct delete request success", response.data);
//         updateActs(acts.filter(ark => ark.id !== ark.id));
//         props.history.push("/ideas");
//       })
//       .catch(error => console.log(error.response));
//   };

//   useEffect(() => {
//     deleteAct();
//   }, []);

// return (
//     <div className="acts-delete-wrap">
//       <ul>
//           <h3>Delete act </h3>
//         {acts.map(ark => (
//           <li key={ark} onClick={() => deleteAct(ark)}>
//             <span>
//               <span className="delete" onClick={() => deleteAct(ark)}>
//                Remove
//               </span>{" "}
//             </span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
// export default ActsDelete;


