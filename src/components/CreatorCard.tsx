import { creator } from "@/util";
import React from "react";

const CreatorCard = ({}) => {
  return (
    <div
      className="w-full px-5 md:px-32 lg:px-60 bg-white
     rounded-lg  flex flex-col md:flex-row  md:gap-10"
    >
      <div className="flex-none md:flex-1 order-2">
        <img
          src={creator.image}
          alt={`${creator.name}'s picture`}
          className="w-full  object-cover"
        />
      </div>
      <div className="flex-none md:flex-1 order-1">
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
