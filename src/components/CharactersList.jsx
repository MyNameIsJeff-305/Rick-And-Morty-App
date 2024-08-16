import { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard.jsx";
import { getCharactersPage } from "../lib/character";

export default function CharactersList() {
    const [page, setPage] = useState(1);
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true); // Loading state
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true); // Set loading to true before fetching data
            try {
                const data = await getCharactersPage(page); // Wait for the Promise to resolve
                setCharacters(data); // Set the resolved data into state
            } catch (error) {
                setErrors({ fetch: "Failed to fetch data" });
            } finally {
                setLoading(false); // Set loading to false after fetching data
            }
        };

        fetchData();
    }, [page]); // Fetch data whenever the page number changes

    const changePage = (e) => {
        const newPage = parseInt(e);
        if (newPage > 0 && newPage <= (characters.info?.pages || 1)) {
            setPage(newPage);
        } else {
            setErrors({ page: "Invalid page number" });
        }
    };

    return (
        <main className="flex flex-col">
            <div className="flex justify-between items-center mx-40">
                <h1 className="text-4xl font-bold text-white my-10">Characters</h1>
                <div>
                    <button
                        className="bg-gray-800 text-white font-bold py-2 px-4 rounded-full"
                        onClick={() => changePage(page - 1)}
                        disabled={page === 1}
                    >
                        Prev.
                    </button>
                    <input
                        className="w-12 ml-5 text-right"
                        type="number"
                        value={page}
                        onChange={(e) => changePage(e.target.value)}
                    />
                    <span className="mr-5">
                        /{characters.info?.pages || 1}
                    </span>
                    <button
                        className="bg-gray-800 text-white font-bold py-2 px-4 rounded-full"
                        onClick={() => changePage(page + 1)}
                        disabled={page === (characters.info?.pages || 1)}
                    >
                        Next
                    </button>
                </div>
            </div>

            <div className="flex flex-column flex-wrap px-7 justify-center mx-10 gap-5">
                {loading ? (
                    // Show loading spinner or placeholder when data is being fetched
                    <div className="text-white text-xl h-full flex flex-col justify-center items-center"><svg viewBox="0 0 200 200" height="50" width="50"><circle fill="#6B696D" stroke="#6B696D" stroke-width="15" r="15" cx="40" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate></circle><circle fill="#6B696D" stroke="#6B696D" stroke-width="15" r="15" cx="100" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate></circle><circle fill="#6B696D" stroke="#6B696D" stroke-width="15" r="15" cx="160" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate></circle></svg>Loading...</div>
                ) : (
                    // Show character cards after data has been loaded
                    characters.results?.map((character) => (
                        <CharacterCard
                            key={character.id}
                            img={character.image}
                            name={character.name}
                            status={character.status}
                            id={character.id}
                        />
                    ))
                )}
            </div>

            {errors.page && <div className="text-red-500">{errors.page}</div>}
            {errors.fetch && <div className="text-red-500">{errors.fetch}</div>}
        </main>
    );
}
