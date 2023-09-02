import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Card from "../components/card";
import people from "../assets/people.png";

export default function MainPage() {
  const [inputName, setInputName] = useState("");
  const [results, setResults] = useState([]);
  const resultsContainerRef = useRef(null);

  useEffect(() => {
    if (resultsContainerRef.current && results.length > 0) {
      resultsContainerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [results]);

  const guessGender = async () => {
    let path = "https://api.genderize.io/?";
    const tempName = inputName.target.value;
    const arrayName = tempName.split(",");
    for (let index = 0; index < arrayName.length; index++) {
      if (index === arrayName.length - 1) {
        path = path + "name[]=" + arrayName[index];
      } else {
        path = path + "name[]=" + arrayName[index] + "&";
      }
    }

    const res = await axios.get(path);
    setResults(res.data);
    console.log(res.data);
  };

  return (
    <div>
      <div className="h-screen flex justify-evenly items-center">
        <div className="flex flex-col h-1/2 justify-center">
          <div className="text-2xl">Guess the gender by</div>
          <div className="text-3xl font-bold mb-5 text-violet-800">
            your name
          </div>
          <input
            className="border-[1px] border-gray-300 rounded-xl p-2 h-10 mb-5"
            type="text"
            placeholder="Please input the name"
            onChange={setInputName}
          />
          <button
            className="border-[1px] bg-violet-800 text-white rounded-xl h-10"
            onClick={guessGender}
          >
            Guess the Gender
          </button>
        </div>
        <div className="w-1/4">
          <img className="" src={people} alt="" />
        </div>
      </div>
      {results.length > 0 ? (
        <div
          className="h-[90vh] flex flex-wrap justify-evenly items-center"
          ref={resultsContainerRef}
        >
          {results.map((result, index) => (
            <div index={index}>
              <Card result={result} />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
