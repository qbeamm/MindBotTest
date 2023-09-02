import React from "react";
import male from "../assets/male.png";
import female from "../assets/female.png";

export default function card(props) {
  return (
    <div>
      <div className="w-[250px] h-[270px] bg-violet-300 rounded-2xl flex flex-col items-center justify-evenly text-xl font-bold mb-7">
        <div className="w-1/2">
          {props.result.gender === "male" ? (
            <img src={male} alt="" />
          ) : (
            <img src={female} alt="" />
          )}
        </div>
        <div className="bg-white w-3/4 h-2/5 rounded-2xl flex flex-col justify-evenly items-center">
          <div>Name: {props.result.name}</div>
          <div>Gender: {props.result.gender}</div>
          <div>Probability: {props.result.probability}</div>
        </div>
      </div>
    </div>
  );
}
