"use client";
import React, { useState } from "react";
import GoalItem from "./GoalItem";

function GoalCard(props) {
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
    <div tabIndex={0} className="  z-30 absolute collapse bg-[#ee9191]  ">
      <input type="checkbox" />
      <div className="collapse-title">{props.title}</div>
      <div className=" z-30  collapse-content">
      <ul className="list-disc  pb-5"> 
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
        <div className="flex flex-row gap-1">
          <form>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              onChange={handleChange}
              name="Goal"
              value={inputText}
            />
            <button onClick={handleClick} className="btn btn-sm m-2 ">ADD</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GoalCard;
