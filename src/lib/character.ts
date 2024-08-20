import type { Character } from "../types/charactersApi";

export const getCharactersPage = async (page: number) => {
    const res = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
    const data = await res.json();
    return data as Character[];
}

export const getCharacter = async (id: number) => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const data = await res.json();
    return data as Character;
}

export const filterCharacters = async (filters: string) => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/?${filters}`);
    const data = await res.json();
    return data as Character[];
}