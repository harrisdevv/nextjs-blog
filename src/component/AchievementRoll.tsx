import React from "react";

interface AchievementRollProps {
  insights: string[];
}

const AchievementRoll: React.FC<AchievementRollProps> = ({ insights }) => {
  return (
    <div className="w-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-black dark:text-white whitespace-nowrap overflow-hidden">
      <div className="animate-roll  w-full py-2 sm:py-3 flex items-center justify-center capitalize font-semibold tracking-wider text-sm sm:text-base">
        {insights.map((text, index) => (
          <div key={text}>
            {text} {index < insights.length - 1 && <span className="px-4">|</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementRoll;
