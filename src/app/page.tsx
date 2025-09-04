"use client";
import { Wheel } from "./components/Wheel";

export default function Home() {
   
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main>
        <Wheel></Wheel>
      </main>
    </div>
  );
}
