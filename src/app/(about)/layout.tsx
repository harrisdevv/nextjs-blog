import AchievementRoll from "@/component/AchievementRoll";
import React, { ReactNode } from "react";

const insights: string[] = [
  "5+ Projects Completed",
  "5+ Years of Software Engineering",
];

interface AboutLayoutProps {
  children: ReactNode;
}

export default function AboutLayout({ children }: AboutLayoutProps) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <AchievementRoll insights={insights} />
      {children}
    </main>
  );
}
