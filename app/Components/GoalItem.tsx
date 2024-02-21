"use client";
import React, { useState } from "react";

function getCategoryColor(categoryId) {
  switch (categoryId) {
    case 5:
      return "text-green-500"; // Tailwind CSS class for green text
    case 6:
      return "text-blue-500"; // Tailwind CSS class for blue text
    case 7:
      return "text-orange-500"; // Tailwind CSS class for orange text
    case 8:
      return "text-purple-500"; // Tailwind CSS class for purple text
    default:
      return ""; // Default class if no category matches
  }
}

export default function GoalItem(props) {


  const [isChecked, setIsChecked] = useState(props.completed);
  function handleClick() {
    console.log(props.id)
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
  
    // Construct the URL with the goal's ID
    const url = `http://127.0.0.1:8000/planner/goals/${props.id}/`;
  
    const data = {
      completed: newCheckedState, // Set isCompleted based on the new checkbox state
    };
  
    // Send the PATCH request to the server
    fetch(url, {
      method: "PATCH", 
      headers: {
        "Content-Type": "application/json",
      
      },
      body: JSON.stringify(data),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to update goal');
      }
      return response.json();
    })
    .then(updatedGoal => {
      console.log('Goal updated successfully:', updatedGoal);
      
    })
    .catch(error => {
      console.error("Error updating goal:", error);
    });
  }
  return (
    <div onDoubleClick={props.onDoubleClick} >
      {" "}
      <div className="flex flex-row">
        <div className="form-control">
          <label className="cursor-pointer label">
            
          <input
              type="checkbox"
              checked={isChecked} // Ensure the input respects the isChecked state
              onChange={handleClick} // Use onChange instead of onClick for checkboxes
              className="checkbox checkbox-success"
            />
             <span className={`label-text pl-1 ${!props.goalCategory ? getCategoryColor(props.category) : ''}`}>{props.text}</span>

          </label>
        </div>
      
      </div>
    </div>
  );
}
