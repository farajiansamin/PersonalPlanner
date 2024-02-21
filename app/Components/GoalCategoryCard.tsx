"use client";
import React, { useState, useEffect } from "react";
import GoalItem from "./GoalItem";



function GoalCard(props) {
  let month =props.month 
  let categoryID
  let goalType;
  let day;
  let week;
  console.log(props.type)

  if (props.type === "Weekly") {
      goalType = "W";
      day = null;
      week=props.week
      
  }
  if (props.type === "Monthly") {
      goalType = "M";
      week = null;
      day = null;
  }
  if (props.type === "Daily") {
      goalType = "D";
      week=props.week
      day=props.day
      console.log(day)
      

     
  }

  


  
  
  if (props.title ==="Career"){categoryID=6}
  if (props.title ==="Health"){categoryID=5}
  if (props.title ==="Relationship"){categoryID=7}
  if (props.title==="Entertainment"){categoryID=8}
  
  const [inputText, setInputText] = useState("");
  const [goals, setGoals] = useState([]); 

  useEffect(() => {
    const fetchGoals = async () => {
      const numericMonth = Number(month);
      console.log(week)
      

      let query = `month=${numericMonth}&category=${categoryID}&week=${week}&day=${day}`;
     
      
    
  
      try {
        const response = await fetch(`http://127.0.0.1:8000/planner/goals/?${query}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setGoals(data);
      } catch (error) {
        console.error("Failed to fetch goals:", error);
      }
    };
  
    fetchGoals();
  }, [month, categoryID, day, week]); // Ensure all used variables are in the dependency array
  

  //console.log(goals);

  function handleChange(event) {
    setInputText(event.target.value);
  }

  function handleClick(event) {
    event.preventDefault();

    const newGoal = {
      title: inputText,
      user: 1,
      goal_type:goalType,
      month: props.month,
      week:null,
      day: null,
      completed: false,
      category: categoryID,
      
    };

    fetch("http://127.0.0.1:8000/planner/goals/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newGoal),
    })
      .then((response) => response.json())
      .then((data) => {
        setGoals((prevGoals) => [...prevGoals, data]); // Assuming the backend returns the created goal with an id
        setInputText("");
      })
      .catch((error) => console.error("Error adding goal:", error));
  }

  function deleteItem(goalId) {
    
    // First, make a request to the backend to delete the goal
    fetch(`http://127.0.0.1:8000/planner/goals/${goalId}/`, {
      method: 'DELETE',
      headers: {
        // If your API requires authentication, make sure to include the necessary headers
        // "Authorization": "Bearer YOUR_TOKEN_HERE",
        "Content-Type": "application/json",
      },
    })
    .then(response => {
      if (!response.ok) {
        // If the server responds with an error, throw an error
        throw new Error('Network response was not ok');
      }
      // If the delete request was successful, update the local state
      setGoals(prevGoals => prevGoals.filter(goal => goal.id !== goalId));
    })
    .catch(error => {
      console.error("Error deleting goal:", error);
      // Here, you might want to handle the error, perhaps by showing an error message to the user
    });
  }

  return (
    <div tabIndex={0} className={`collapse ${props.color} z-20 overflow-visible`}>

      <input type="checkbox" />
      <div className="collapse-title text-black">{props.title}</div>
      <div className="container collapse-content overflow-visible">
        <div className="flex flex-col w-70 gap-3">
          <ul className="list-disc  ">
            {goals.map((goal, index) => (
              <GoalItem
                id={goal.id}
                text={goal.title} 
                completed={goal.completed}
                key={index}
                category ={goal.category}
                onDoubleClick={() => deleteItem(goal.id)}
                goalCategory={true}
              />
            ))}
          </ul>
         
          <div className="card-actions flex flex-row gap-3">
            <form>
              <input
                type="text"
                placeholder="Type here"
                className="input input-sm input-bordered w-full max-w-xs"
                onChange={handleChange}
                name="Goal"
                value={inputText}
              />
              <button onClick={handleClick} className="btn btn-sm">Add</button>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GoalCard;
