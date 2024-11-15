import TypeScript from "./slider/typescript";
import React from "./slider/react";
import TailwindCSS from "./slider/tailwindcss";
import Nextjs from "./slider/nextjs";
import Astro from "./slider/astro";
import PostgreSQL from "./slider/postgresql";
import Shadcnui from "./slider/shadcnui";
import Playwright from "./slider/playwright";
import Angular from "./slider/angular";
import Vue from "./slider/vue";
import Laravel from "./slider/laravel";
import Jest from "./slider/jest";
import MySQL from "./slider/mysql";
import Docker from "./slider/docker";
import Expressjs from "./slider/expressjs";

interface Logo {
  component: JSX.Element;
  name: string;
}

const LOGOS: Logo[] = [
  { component: <TypeScript width={24} height={24} />, name: "TypeScript" },
  { component: <React width={24} height={24} />, name: "React" },
  { component: <Vue width={24} height={24} />, name: "Vue" },
  { component: <Angular width={24} height={24} />, name: "Angular" },
  { component: <Jest width={24} height={24} />, name: "Jest" },
  { component: <Playwright width={24} height={24} />, name: "Playwright" },
  { component: <Laravel width={24} height={24} />, name: "Laravel" },
  { component: <Expressjs width={24} height={24} />, name: "Express.js" },
  { component: <MySQL width={24} height={24} />, name: "MySQL" },
  { component: <PostgreSQL width={24} height={24} />, name: "PostgreSQL" },
  { component: <Docker width={24} height={24} />, name: "Docker" },
  { component: <TailwindCSS width={24} height={24} />, name: "TailwindCSS" },
  { component: <Nextjs width={24} height={24} />, name: "Next.js" },
  { component: <Astro width={24} height={24} />, name: "Astro" },
  { component: <Shadcnui width={24} height={24} />, name: "Shadcn/ui" },
];

export const InfiniteSlider: React.FC = () => {
  return (
    <div className="relative m-auto w-full overflow-hidden bg-zinc-950 before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:content-['']">
      <div className="animate-infinite-slider flex w-[calc(250px*10)]">
        {LOGOS.map((logo, index) => (
          <div
            className="slide flex flex-col w-[125px] items-center justify-center"
            key={index}
          >
            {logo.component}
            <span className="text-white/80 mt-2 text-xs">{logo.name}</span>
          </div>
        ))}
        {LOGOS.map((logo, index) => (
          <div
            className="slide flex flex-col w-[125px] items-center justify-center"
            key={`duplicate-${index}`}
          >
            {logo.component}
            <span className="text-white/80 mt-2 text-xs">{logo.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
