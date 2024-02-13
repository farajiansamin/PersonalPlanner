"use client";
import React, { useState } from "react";
import GoalItem from "./GoalItem";

const GoalCategoryCard = (props) => {
  const [inputText, setInputText] = useState("");
    const [goals, setGoal] = useState([]);
   

    function handleChange(event) {
        setInputText(event.target.value);
    }

   
    function handleClick(event) {
        event.preventDefault();
        setGoal((prevGoals) => {
          return [...prevGoals, inputText];
        });
        setInputText("");
      }

    function deleteItem(id) {
        setGoal((prevGoals) => {
          return prevGoals.filter((goals, index) => {
            return index !== id;
          });
        });
      }
  return (
    <div className={`card  ${props.color} shadow-xl`}>
  <div className="card-body gap-0 p-[1rem]">
    <h2 className="card-title">{props.title}</h2>
    <ul className="list-disc  "> 
            {goals.map((goal, index) => (
               
                <GoalItem
                id={index}
                text={goal}
                key={index}
                onChecked={deleteItem}
                />
                       

       
                
              
               
               
              
            ))}
            
          </ul>
          {props.goals}
        <div className="card-actions flex flex-row gap-1">
          <form>
            <input
              type="text"
              placeholder="Type here"
              className="input input-sm input-bordered w-full max-w-xs"
              onChange={handleChange}
              name="Goal"
              value={inputText}
            />
            <button onClick={handleClick} className="btn btn-sm m-1 ">ADD</button>
          </form>
        </div>
    
  </div>
</div>
  )
}

export default GoalCategoryCard