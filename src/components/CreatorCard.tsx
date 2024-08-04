import { creator } from "@/util";
import React from "react";

const CreatorCard = ({}) => {
  return (
    <div
      className="w-full px-60 bg-white 
     rounded-lg  flex  gap-10"
    >
      <div className="flex-1">
        <img
          src={creator.image}
          alt={`${creator.name}'s picture`}
          className="w-full  object-cover"
        />
      </div>
      <div className="flex-1">
        <h2 className="text-xl font-bold mb-2">{creator.name}</h2>
        <ul>
          {creator.description.map((desc, key) => (
            <li key={key}>
              <div>{desc}</div>
              <br />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CreatorCard;
