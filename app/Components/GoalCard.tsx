"use client";
import React, { useState } from "react";
import GoalItem from "./GoalItem";

import GoalCategoryCard from "./GoalCategoryCard";
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
    <div tabIndex={0} className=" collapse bg-[#fdf2bf] overflow-visible">
  <input type="checkbox" />
  <div className="collapse-title text-black">{props.title}</div>
  <div className="container collapse-content z-30 overflow-visible">
    <div className="flex flex-col w-70 gap-3">
      <ul className="list-disc">
        {goals.map((goal, index) => (
          <GoalItem id={index} text={goal} key={index} onChecked={deleteItem} />
        ))}
      </ul>
      {props.goals}
      <div className="card-actions flex flex-row gap-2">
        <form>
          <input
            type="text"
            placeholder="Type here"
            className="input input-sm pb-1 m-1 input-bordered w-full max-w-xs"
            onChange={handleChange}
            name="Goal"
            value={inputText}
          />
          <div className="dropdown dropdown-right ">
            <div tabIndex={0} role="button" className="btn m-1">
              Click
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow z-40 bg-base-100 rounded-box w-52"
            >
              <li><a  onClick={handleClick}>Career</a></li>
              <li><a onClick={handleClick}>Health</a></li>
              <li><a onClick={handleClick}>RelationShip</a></li>
              <li><a onClick={handleClick}>Entertainmnet</a></li>
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
