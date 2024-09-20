import JavaScript from "./slider/javascript";
import TypeScript from "./slider/typescript";
import HTML5 from "./slider/html";
import React from "./slider/react";
import CSS from "./slider/css";
import TailwindCSS from "./slider/tailwindcss";
import Nextjs from "./slider/nextjs";
import Astro from "./slider/astro";
import PostgreSQL from "./slider/postgresql";
import Shadcnui from "./slider/shadcnui";
import Git from "./slider/git";
import Github from "./slider/github";
import Playwright from "./slider/playwright";
import Vercel from "./slider/vercel";
import Angular from "./slider/angular";

// Define el tipo para los elementos de LOGOS
interface Logo {
  component: JSX.Element;
  name: string;
}

const LOGOS: Logo[] = [
  { component: <HTML5 width={24} height={24} />, name: "HTML5" },
  { component: <CSS width={24} height={24} />, name: "CSS" },
  { component: <JavaScript width={24} height={24} />, name: "JavaScript" },
  { component: <React width={24} height={24} />, name: "React" },
  { component: <TypeScript width={24} height={24} />, name: "TypeScript" },
  { component: <Angular width={24} height={24} />, name: "Angular" },
  { component: <TailwindCSS width={24} height={24} />, name: "TailwindCSS" },
  { component: <Nextjs width={24} height={24} />, name: "Next.js" },
  { component: <Astro width={24} height={24} />, name: "Astro" },
  { component: <PostgreSQL width={24} height={24} />, name: "PostgreSQL" },
  { component: <Vercel width={24} height={24} />, name: "Vercel" },
  { component: <Playwright width={24} height={24} />, name: "Playwright" },
  { component: <Git width={24} height={24} />, name: "Git" },
  { component: <Github width={24} height={24} />, name: "Github" },
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
