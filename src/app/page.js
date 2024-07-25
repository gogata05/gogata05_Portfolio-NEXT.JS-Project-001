// app/page.js
import Image from "next/image";
import Link from "next/link";
import Particles from "./components/particles";
import { data } from "../../util/data";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-black opacity-90">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {data.navigation.map(item => (
            <Link key={item.href} href={item.href} className="text-sm duration-500 text-zinc-500 hover:text-zinc-300">
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />

      <h1 className="z-10 text-4xl mx-2 py-2  font-Hanken font-semibold  text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title  sm:text-6xl md:text-8xl whitespace-nowrap bg-clip-text ">{"Georgi Markov"}</h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 ">
          Hello and <span className="font-semibold ">welcome</span> to my personal <span className="font-semibold text-[#2ed3db] opacity-50">portfolio</span>.
        </h2>
      </div>
      <div>
        <h1 className="text-[10px] right-4 bottom-4 absolute opacity-10">Design is inspired from Panayot Petkov </h1>
      </div>
      <Analytics />
    </div>
  );
}
