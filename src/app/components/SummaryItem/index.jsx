import React from "react";
import Image from "next/image";

const colorMap = {
  "primary-lightRed": "text-primary-lightRed bg-primary-lightRed",
  "primary-orangeyYellow":
    "text-primary-orangeyYellow bg-primary-orangeyYellow",
  "primary-greenTeal": "text-primary-greenTeal bg-primary-greenTeal",
  "primary-cobaltBlue": "text-primary-cobaltBlue bg-primary-cobaltBlue",
};

const SummaryItem = ({ item }) => (
    <div
      key={item.category}
      className={`flex justify-between items-center gap-x-4 mt-4 p-3 rounded-xl bg-opacity-5 ${colorMap[item.color]} ${item.bgColor}`}
    >
      <div className="flex gap-x-2 items-center">
        <Image
          src={item.icon}
          className="w-6 h-10"
          width={0}
          height={0}
          alt="icon"
        />
        <p className={`text-lg ${item.color} font-semibold`}>
          {item.category}
        </p>
      </div>
      <div className="flex gap-x-2 items-center">
        <p className="text-lg text-black font-bold">{item.score}</p>
        <p className="text-lg text-black/50 font-semibold">/ 100</p>
      </div>
    </div>
  );

  export default SummaryItem