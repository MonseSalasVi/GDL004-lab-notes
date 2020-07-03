import React from "react";

function Task(props) {
  return (
   <div className="task-container">
       <h3 className='task'>{props.value}</h3>
       <div className="button-container">
           <buttonon
           onClick={()=> {props.handleDelete(props.id)}}
           >
               X
           </buttonon>
       </div>
   </div>

  );
}
export default Task;