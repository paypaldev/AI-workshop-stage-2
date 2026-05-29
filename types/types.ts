
export enum CityType {
    CAPITAL = "capital",
    PORT = "port",
    DESERT = "desert",
    MOUNTAIN = "mountain",
    FOREST = "forest",
    COASTAL = "coastal",
    UNDERGROUND = "underground",
    FLOATING = "floating",
}

export enum FactionAlignment {
    GOOD = "good",
    EVIL = "evil",
    NEUTRAL = "neutral",
    CHAOTIC = "chaotic",
    LAWFUL = "lawful",
}

export interface City {
    id: string;
    name: string;
    region: string;
    type: CityType;
    population: number;
    description?: string;
}

export interface Faction {
    id: string;
    name: string;
    alignment: FactionAlignment;
    motto: string;
    colors: string[];
    description?: string;
}

export interface World {
    id: string;
    name: string;
    genre: string;
    tone: string;
    description?: string;
    cities: City[];
    factions: Faction[];
}

export interface GenerationOptions {
    worldCount?: number;
    citiesPerWorldRange?: [number, number];
    factionsPerWorld?: number;
    llmEnabled?: boolean;
    llmRetryAttempts?: number;
    llmRetryDelayMs?: number;
}
