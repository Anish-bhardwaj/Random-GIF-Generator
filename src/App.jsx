import React from "react";
import Random from "./components/Random";
import Tag from "./components/Tag";


export default function App() {
  return (
    <div className="w-full min-h-screen flex flex-col background p-2 sm:p-10">
      <h1 className="uppercase text-xl lg:text-3xl mb-1 bg-slate-50 p-4 border rounded-2xl text-center font-bold">RANDOM GIFS </h1>
      <div className=" flex flex-col items-center gap-y-10 mt-[20px]">
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}
