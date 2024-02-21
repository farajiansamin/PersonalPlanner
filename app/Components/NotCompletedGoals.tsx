import React, { useEffect, useState } from "react";
import GoalItem from "./GoalItem";

const NotCompletedGoals = (props) => {
  const [goals, setGoals] = useState([]);
  useEffect(() => {
   
    const Week = props.week  

    // Fetch goals from the server
    fetch(`http://127.0.0.1:8000/planner/goals/?week=${Week}&dayNotNull=true&completed=false`)
      .then((response) => response.json())
      .then((data) => {
        setGoals(data); // Assuming the API returns an array of goals
      })
      .catch((error) => console.error("Error fetching goals:", error));
  }, []); // Empty dependency array means this effect runs once on component moun
  return (
    <div className="card  ml-[10rem] w-100 bg-primary mt-10 text-primary-content">
      <div className="card-body">
        <h2 className="card-title">This Week Not Completed Goals</h2>
       
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
      </div>
    </div>
  );
};

export default NotCompletedGoals;
