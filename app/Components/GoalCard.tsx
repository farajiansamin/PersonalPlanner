"use client";
import React, { useState, useEffect } from "react";
import GoalItem from "./GoalItem";

import GoalCategoryCard from "./GoalCategoryCard";

function GoalCard(props) {
  const [inputText, setInputText] = useState("");
  const [goals, setGoals] = useState([]); // Start with an empty array

  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/planner/weekly_goals/"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setGoals(data); // Assume data is an array of goal objects
      } catch (error) {
        console.error("Failed to fetch goals:", error);
      }
    };

    fetchGoals();
  }, []);

  console.log(goals);

  function handleChange(event) {
    setInputText(event.target.value);
  }

  function handleClick(event) {
    event.preventDefault();

    const newGoal = {
      title: inputText,
      // Add other necessary fields with default or input values
      // Example: completed: false, week_number: 1, month: new Date().getMonth() + 1, etc.
    };

    fetch("http://127.0.0.1:8000/planner/weekly_goals/", {
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

  function deleteItem(id) {
    setGoal((prevGoals) => {
      return prevGoals.filter((goals, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div tabIndex={0} className="collapse bg-[#fdf2bf] overflow-visible">
      <input type="checkbox" />
      <div className="collapse-title text-black">{props.title}</div>
      <div className="container collapse-content z-30 overflow-visible">
        <div className="flex flex-col w-70 gap-3">
          <ul className="list-disc">
            {goals.map((goal, index) => (
              // Ensure GoalItem can handle these props
              <GoalItem
                key={goal.id}
                goal={goal}
                onChecked={() => deleteItem(goal.id)}
              />
            ))}
          </ul>
          {goals[0].title}
          <div className="card-actions flex flex-row gap-2">
            <form onSubmit={handleClick}>
              <input
                type="text"
                placeholder="Type here"
                className="input input-sm pb-1 m-1 input-bordered w-full max-w-xs"
                onChange={handleChange}
                value={inputText}
              />
              <button type="submit" className="btn m-1">
                Add Goal
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GoalCard;
