import type { Character } from "../types/charactersApi"
import CharacterCard from "./CharacterCard.astro"

import { useState } from "react"


export default function Characters() {

    const [results, setResults] = useState([] as Character[])

    const loadMore = async () => {
        setResults([...results, ...await getCharactersPage(results.length / 20 + 1)])
    }

    return (
        <>
            <main className="flex flex-row flex-wrap">
                {
                    results.map((character: Character) => (
                        <CharacterCard
                            img={character.image}
                            name={character.name}
                            status={character.status}
                            id={character.id}
                        />
                    ))
                }
            </main>
  // Add a button to load more characters
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={loadMore}>Load More...</button
            >
        </>
    )
}
