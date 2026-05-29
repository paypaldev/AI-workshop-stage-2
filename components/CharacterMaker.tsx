"use client";

import { Avatar } from "@/components/Avatar";
import { generateCharacter } from "@/lib/seededRandom";
import { City } from "@/types/types";

interface CharacterMakerProps {
  starterCity: City;
}

export function CharacterMaker({ starterCity }: CharacterMakerProps) {
  const character = generateCharacter(starterCity.name);

  return (
    <div className="bg-slate-800 rounded-lg p-8 border border-slate-700 max-w-md">
      <h2 className="text-2xl font-bold mb-4">Character Maker</h2>

      <div className="flex justify-center mb-6">
        <Avatar name={starterCity.name} />
      </div>

      <pre className="bg-slate-700 p-4 rounded-lg text-xs overflow-auto max-h-64 text-gray-200">
        {JSON.stringify(character, null, 2)}
      </pre>
    </div>
  );
}
