"use client";
import React, { useState, useEffect } from "react";
import GoalItem from "./GoalItem";



function GoalCard(props) {
  let weekNumber=props.week
  let month =props.month 
  let day=null



  


    if(props.type==="Weekly"){
      if (props.title ==="Week One") {weekNumber=1}
      if (props.title ==="Week Two"){weekNumber=2}
      if (props.title ==="Week Three"){weekNumber=3}
      if(props.title==="Week Four"){weekNumber=4}

    }

    if(props.type==="Daily"){
      if (props.title ==="Day One") {day=1}
      if (props.title ==="Day Two"){day=2}
      if (props.title ==="Day Three"){day=3}
      if (props.title ==="Day Four"){day=4}
      if(props.title==="Day Five"){day=5}
      if(props.title==="Day Six"){day=6}
      if(props.title==="Day Seven"){day=7}


    }
  
    
  
  const [inputText, setInputText] = useState("");
  const [goals, setGoals] = useState([]); 

  useEffect(() => {
    const fetchGoals = async () => {
      // Example: Fetching goals for week 1 where day is null
     
      const numericMonth = Number(month); 
      let query = `month=${numericMonth}&week=${weekNumber}&day=${day}`;
      
  
      try {
        const response = await fetch(`http://127.0.0.1:8000/planner/goals/?${query}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setGoals(data); // Initialize goals state with fetched data
      } catch (error) {
        console.error("Failed to fetch goals:", error);
      }
    };
  
    fetchGoals();
  }, [month, weekNumber,day]);

  //console.log(goals);

  function handleChange(event) {
    setInputText(event.target.value);
  }

  function handleClick(event, category) {
    event.preventDefault();
    let categoryID
    let goalType
    
    
  
  
    if (category==="Health"){ categoryID=5 }
    if (category==="Career"){categoryID=6}
    if (category==="Relationship"){categoryID=7}
    if(category==="Entertainment"){categoryID=8}

    if (props.type ==="Weekly"){goalType="W"}
    if (props.type ==="Monthly"){goalType="M"}
    if (props.type ==="Daily"){goalType="D"}

    
  

    const newGoal = {
      title: inputText,
      user: 1,
      goal_type:goalType,
      month: props.month,
      week:weekNumber,
      day: day,
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
    <div tabIndex={0} className="collapse bg-[#fdf2bf] overflow-visible">
      <input type="checkbox" />
      <div className="collapse-title text-black">{props.title}</div>
      <div className="container collapse-content z-10 overflow-visible">
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
                goalCategory={false}
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
              <div className="dropdown dropdown-right">
                <div tabIndex={0} role="button" className="btn m-1">
                  Click
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a onClick={() => handleClick(event, "Career")}>Career</a>
                  </li>
                  <li>
                    <a onClick={() => handleClick(event, "Health")}>Health</a>
                  </li>
                  <li>
                    <a onClick={() => handleClick(event, "Relationship")}>Relationship
                    </a>
                  </li>
                  <li>
                  <a onClick={() => handleClick(event, "Entertainment")}>Entertainment
                  </a>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GoalCard;
