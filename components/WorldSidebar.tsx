import { World } from "@/types/types";

interface WorldSidebarProps {
  world: World;
}

export function WorldSidebar({ world }: WorldSidebarProps) {
  return (
    <aside className="w-80 bg-slate-800 border-r border-slate-700 p-6 overflow-y-auto">
      <h2 className="text-2xl font-bold mb-6 text-blue-400">World Info</h2>

      {/* Cities */}
      <div className="mb-8">
        <h3 className="text-lg font-bold mb-3 text-green-400">Cities</h3>
        <ul className="space-y-2">
          {world.cities.map((city) => (
            <li key={city.id} className="text-sm bg-slate-700 p-3 rounded hover:bg-slate-600 cursor-pointer transition">
              <div className="font-semibold text-white">{city.name}</div>
              <div className="text-xs text-gray-400">{city.region}</div>
              <div className="text-xs text-gray-500">Pop: {city.population.toLocaleString()}</div>
            </li>
          ))}
        </ul>
      </div>

      {/* Factions */}
      <div>
        <h3 className="text-lg font-bold mb-3 text-purple-400">Factions</h3>
        <ul className="space-y-2">
          {world.factions.map((faction) => (
            <li key={faction.id} className="text-sm bg-slate-700 p-3 rounded hover:bg-slate-600 cursor-pointer transition">
              <div className="font-semibold text-white">{faction.name}</div>
              <div className="text-xs italic text-gray-400">&quot;{faction.motto}&quot;</div>
              <div className="text-xs text-gray-500 capitalize">{faction.alignment}</div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
