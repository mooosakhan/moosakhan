import React from "react";
import { cn } from "../../../lib/utils";

interface ItemProps {
  emoji: string;
  position: string;
}

const HeroSectionTextHover: React.FC = () => {
  const destinations: ItemProps[] = [
    {
        // 🪂
      emoji: "💻",
      position:
        "left-10 top-3 group-hover:-rotate-[10deg] group-hover:-translate-y-12 md:left-16 md:top-2 sm:left-12", // Adjusted position
    },
    {
      emoji: "🔧",
      position:
        "left-[50px] top-0 group-hover:-rotate-[20deg] group-hover:-translate-x-10 md:left-[95px] md:-top-2 sm:left-10", // Adjusted position
    },
    {
      emoji: "🎮",
      position:
        "right-[100px] top-0 group-hover:rotate-[10deg] group-hover:-translate-y-10 md:right-[160px] md:-top-1 sm:right-[120px]", // Adjusted position
    },
    {
      emoji: "🕹️",
      position:
        "right-[70px] top-0 group-hover:rotate-[20deg] group-hover:translate-x-16 md:right-[130px] md:-top-2 sm:right-[100px]", // Adjusted position
    },
  ];

  return (
    <div className={cn("storybook-fix py-12 relative min-h-[100px] w-full md:min-h-[200px]")}>
      <div className="mb-2 flex flex-col items-center justify-center gap-3">
        {/* "Moosa Khan" with hover effect */}
        <div className="group relative">
          <span className="text-yellow-500 text-3xl md:text-6xl lg:text-7xl font-extrabold font-poppins z-50">
            Moosa Khan
          </span>
          <div className="duration-400 absolute inset-0 cursor-pointer opacity-0 transition-opacity group-hover:opacity-100">
            {destinations.map((dest, index) => (
              <span
                key={index}
                className={cn(
                  "pointer-events-none absolute transform text-lg transition-transform duration-500 group-hover:scale-110 sm:text-2xl md:text-4xl",
                  dest.position,
                )}
              >
                {dest.emoji}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionTextHover;
