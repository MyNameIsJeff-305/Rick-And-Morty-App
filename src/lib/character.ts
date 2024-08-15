import type { RickAndMortyCharacters } from "../types/charactersApi";

export const getCharacters = async () => {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    const data = await res.json();
    return data as RickAndMortyCharacters;
}

export const getCharacter = async (id: number) => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const data = await res.json();
    return data;
}

export const filterCharacters = async (filters: string) => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/?${filters}`);
    const data = await res.json();
    return data as RickAndMortyCharacters;
}