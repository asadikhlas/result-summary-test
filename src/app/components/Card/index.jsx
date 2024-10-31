import React from "react";
import data from "../../../data/data.json";
import SummaryItem from "../SummaryItem";
import ScoreDisplay from "../ScoreDisplay";

const Card = () => {
  const score = 76; 
  const totalScore = 100;

  return (
    <div className="flex flex-col md:flex md:flex-row rounded-3xl md:overflow-hidden md:w-[800px] md:h-[520px] bg-white shadow-2xl">
      {/* First card */}
      <div className="flex flex-col p-4 md:p-0 flex-1 justify-center items-center gap-y-9 md:rounded-3xl rounded-b-3xl bg-gradient-to-b from-gradient-lightSlateBlue to-gradient-lightRoyalBlue">
        <h2 className="text-neutral-lightLavender md:text-2xl text-xl font-bold">Your Result</h2>
        <ScoreDisplay score={score} total={totalScore} />
        <div className="flex flex-col justify-center items-center gap-4">
          <h2 className="text-3xl text-white font-bold">Great</h2>
          <p className="text-center text-neutral-lightLavender text-lg w-[90%] md:w-[65%]">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
      </div>

      {/* Second card */}
      <div className="flex-1">
        <div className="p-6 flex flex-col h-full w-full">
          <h1 className="md:text-3xl text-xl text-black font-semibold">Summary</h1>

          {data?.map((item) => (
            <SummaryItem key={item.category} item={item} />
          ))}

          <button className="bg-black/80 text-white rounded-3xl w-full py-4 mt-10 font-semibold hover:bg-gradient-lightRoyalBlue">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
