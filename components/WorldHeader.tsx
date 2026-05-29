"use client";

import { World, City } from "@/types/types";

interface WorldHeaderProps {
  world: World;
  starterCity: City;
}

export function WorldHeader({ world, starterCity }: WorldHeaderProps) {

  return (
    <div className="mb-8">
      <h1 className="text-5xl font-bold mb-4">{world.name}</h1>
      <h2 className="text-2xl text-gray-200 mb-4">{world.description}</h2>
      <p className="text-gray-400 mt-4">
        You begin in <span className="text-green-400 font-semibold">{starterCity.name}</span>
        , a {starterCity.type} city in the {starterCity.region} region
        {starterCity.description ? ` — ${starterCity.description}` : ""}
      </p>
    </div>
  );
}
