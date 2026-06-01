"use client";

import { useState, useEffect } from "react";
import { WorldSidebar } from "@/components/WorldSidebar";
import { WorldHeader } from "@/components/WorldHeader";
import { CharacterMaker } from "@/components/CharacterMaker";
import worldsData from "@/data/worlds.json";
import { World, City } from "@/types/types";

export default function Home() {
  const [world, setWorld] = useState<World | null>(null);
  const [starterCity, setStarterCity] = useState<City | null>(null);

  useEffect(() => {
    const selectedWorld = worldsData[Math.floor(Math.random() * worldsData.length)] as World;
    const selectedCity = selectedWorld.cities[Math.floor(Math.random() * selectedWorld.cities.length)];
    setWorld(selectedWorld);
    setStarterCity(selectedCity);
  }, []);

  if (!world || !starterCity) return null;

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
