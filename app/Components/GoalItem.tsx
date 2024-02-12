"use client";
import React, { useState } from "react";

export default function GoalItem(props) {
    const [isChecked, setIsChecked] = useState(false);
    function handleClick(){
        setIsChecked(true)

    }
  return (
    <div onDoubleClick={() => props.onChecked(props.id)}>
      {" "}
      <div className="flex flex-row">
        <div className="form-control">
          <label className="cursor-pointer label">
            
            <input
              type="checkbox"
              checked={isChecked}
              className="checkbox checkbox-success"
              onClick={handleClick}
            />
            <span className="label-text pl-1">{props.text}</span>
          </label>
        </div>
      
      </div>
    </div>
  );
}
