"use client";

import { useState } from "react";
import { WorldSidebar } from "@/components/WorldSidebar";
import { WorldHeader } from "@/components/WorldHeader";
import { CharacterMaker } from "@/components/CharacterMaker";
import worldsData from "@/data/worlds.json";
import { World, City } from "@/types/types";

export default function Home() {
  const [world] = useState<World>(
    () => worldsData[Math.floor(Math.random() * worldsData.length)] as World
  );
  const [starterCity] = useState<City>(
    () => world.cities[Math.floor(Math.random() * world.cities.length)]
  );

  return (
    <main className="flex min-h-screen bg-slate-900 text-white">
      <WorldSidebar world={world} />

      <div className="flex-1 flex flex-col p-8">
        <WorldHeader world={world} starterCity={starterCity} />
        <CharacterMaker starterCity={starterCity} />
      </div>
    </main>
  );
}
