import React from "react";
import data from "../../../data/data.json";
import SummaryItem from "../SummaryItem";
import ScoreDisplay from "../ScoreDisplay";
import { buttonClasses, cardClasses, firstCardClasses } from "@/utils/cardClasses";

const Card = () => {
  const score = 76; 
  const totalScore = 100;

  return (
    <div className={cardClasses}>
      {/* First card */}
      <div className={firstCardClasses}>
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

          <button className={buttonClasses}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
