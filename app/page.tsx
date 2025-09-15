"use client"
import Image from "next/image";
import { Hero } from "./Hero";
import { SparklesCore } from "@/components/ui/sparkles";
import { BackgroundLines } from "@/components/ui/background-lines";

export default function Home() {
  return (
    <div className="bg-black">


    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        I´m Lumio,  <br /> a fullstack Dev.
      </h2>
      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        I will complete your order as said. "A good Developer doesn´t focus on speed, instead he focuses on perfection" - said a wise man.
      </p>
      <button className="relative inline-flex h-12 overflow-hidden rounded-3xl mt-6 p-[3px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" onClick={() => {
      }}>
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center  rounded-3xl bg-slate-950 px-3 py-1 text-lg font-medium text-white backdrop-blur-3xl">
    Order now!
  </span>
</button>
    </BackgroundLines>

    {FlipWordsDemo()}



    <div className="flex items-center justify-center gap-3 mt-9">

      {
        SMPCard()
      }

      {
        Citybuild()
      }

      {
        PartyGames()
      }

    </div>

    {MacbookScrollDemo()}

    
    
    </div>
  );
}

import ColourfulText from "@/components/ui/colourful-text";
import { motion } from "motion/react";
 
export function ColourfulTextDemo() {
  return (
    <div className="  w-full flex items-center justify-center relative overflow-hidden bg-black mt-8">
      <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold text-center text-white relative z-2 font-sans">
        Some <ColourfulText text="Gamemodes" /> <br />
      </h1>
    </div>
  );
}

export function MacbookScrollDemo() {
  return (
    <div className="w-full overflow-hidden bg-white dark:bg-[#0B0B0F]">
      <MacbookScroll
        title={
          <span>
            My work: Finwise:
          </span>
        }
        badge={
          <a href="https://google.com/">
            <Badge className="h-10 w-10 -rotate-12 transform" />
          </a>
        }
        src={`/work.png`}
        showGradient={true}
      />
    </div>
  );
}
// Peerlist logo
const Badge = ({ className }: { className?: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28Z"
        fill="#00AA45"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28 54C42.3594 54 54 42.3594 54 28C54 13.6406 42.3594 2 28 2C13.6406 2 2 13.6406 2 28C2 42.3594 13.6406 54 28 54ZM28 56C43.464 56 56 43.464 56 28C56 12.536 43.464 0 28 0C12.536 0 0 12.536 0 28C0 43.464 12.536 56 28 56Z"
        fill="#219653"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.0769 12H15V46H24.3846V38.8889H27.0769C34.7305 38.8889 41 32.9048 41 25.4444C41 17.984 34.7305 12 27.0769 12ZM24.3846 29.7778V21.1111H27.0769C29.6194 21.1111 31.6154 23.0864 31.6154 25.4444C31.6154 27.8024 29.6194 29.7778 27.0769 29.7778H24.3846Z"
        fill="#24292E"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 11H29.0769C36.2141 11 42 16.5716 42 23.4444C42 30.3173 36.2141 35.8889 29.0769 35.8889H25.3846V43H18V11ZM25.3846 28.7778H29.0769C32.1357 28.7778 34.6154 26.39 34.6154 23.4444C34.6154 20.4989 32.1357 18.1111 29.0769 18.1111H25.3846V28.7778Z"
        fill="white"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 10H29.0769C36.7305 10 43 15.984 43 23.4444C43 30.9048 36.7305 36.8889 29.0769 36.8889H26.3846V44H17V10ZM19 12V42H24.3846V34.8889H29.0769C35.6978 34.8889 41 29.7298 41 23.4444C41 17.1591 35.6978 12 29.0769 12H19ZM24.3846 17.1111H29.0769C32.6521 17.1111 35.6154 19.9114 35.6154 23.4444C35.6154 26.9775 32.6521 29.7778 29.0769 29.7778H24.3846V17.1111ZM26.3846 19.1111V27.7778H29.0769C31.6194 27.7778 33.6154 25.8024 33.6154 23.4444C33.6154 21.0864 31.6194 19.1111 29.0769 19.1111H26.3846Z"
        fill="#24292E"
      ></path>
    </svg>
  );
};


export function FlipWordsDemo() {
  const words = ["Speed", "Pricing", "Products"];
 
  return (
    <div className="flex justify-center items-center px-4 mt-9">
      <div className="text-5xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Q&A for my
        <FlipWords words={words} /> <br />
      </div>
    </div>
  );
}

import { CardSpotlight } from "@/components/ui/card-spotlight";
import { FlipWords } from "@/components/ui/flip-words";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
 
export function SMPCard() {
  return (
    <CardSpotlight className="h-94 w-94">
      <p className="text-xl font-bold relative z-20 mt-2 text-white">
        Speed
      </p>
      <p className="text-neutral-300 mt-4 relative z-20 text-sm">
        I can tell you something my friend, I won´t be the fastet, BUT i will be accurate and have fair pricing.
      </p>
    </CardSpotlight>
  );
}

export function Citybuild() {
  return (
    <CardSpotlight className="h-96 w-96">
      <p className="text-xl font-bold relative z-20 mt-2 text-white">
        Pricing
      </p>
      <p className="text-neutral-300 mt-4 relative z-20 text-sm">
        Some Guys might say its cheap while for others it is expensive, but from my view its perfect for the quality i provide!
      </p>
    </CardSpotlight>
  );
}
export function PartyGames() {
  return (
    <CardSpotlight className="h-96 w-96">
      <p className="text-xl font-bold relative z-20 mt-2 text-white">
        Products
      </p>
      <p className="text-neutral-300 mt-4 relative z-20 text-sm">
       I sell handcrafted (or developed you can say) websites that are visually stunning and will attract clients, but I also do custom requests (backend or something like that)
      </p>
    </CardSpotlight>
  );
}
 
const Step = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="text-white">{title}</p>
    </li>
  );
};
 
const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-500 mt-1 shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};
