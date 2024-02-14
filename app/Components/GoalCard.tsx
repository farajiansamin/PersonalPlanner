"use client";
import React, { useState } from "react";

import GoalCategoryCard from "./GoalCategoryCard";
function GoalCard(props) {
    
    

    
   


  return (
    <div tabIndex={0} className="  z-30   collapse bg-[#fdf2bf]  ">
      <input type="checkbox" />
      <div className="collapse-title">{props.title}</div>
      <div className=" container z-30  ">
      <div className="flex flex-col w-70 gap-3 m-5 ">
          
            {" "}
            <GoalCategoryCard color="bg-[#76a1f1]" title={"Career"} />
            <GoalCategoryCard color="bg-[#91eead]" title={"Health"} />
          
          
            {" "}
            <GoalCategoryCard color="bg-[#fda66c]" title={"Relationship"} />
            <GoalCategoryCard color="bg-[#ff00ff]"title={"Entertainment"} />
            
          
        </div>
      



       
      </div>
    </div>
  );
};

export default GoalCard;
