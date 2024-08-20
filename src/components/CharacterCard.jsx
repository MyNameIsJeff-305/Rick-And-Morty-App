import { Status } from '../types/charactersApi';

export default function CharacterCard({ img, name, status, id }) {

    const statusColor = () => {
        if (status === Status.Alive) {
            return "text-xs font-semibold mr-2 px-2.5 py-0.5 rounded bg-green-400 text-green-900";
        } else if (status === Status.Dead) {
            return "text-xs font-semibold mr-2 px-2.5 py-0.5 rounded bg-red-400 text-red-900";
        } else {
            return "text-xs font-semibold mr-2 px-2.5 py-0.5 rounded bg-gray-400 text-gray-900";
        }
    };

    return (
        <a
            href={`/characters/${id}`}
            className="border shadow-md bg-gray-800 border-gray-700 hover:scale-105 hover:bg-gray-700 hover:border-gray-500 transition transform duration-200 flex flex-col justify-between rounded-lg overflow-hidden"
        >
            <picture className="flex justify-center items-center bg-gray-900 h-56 sm:h-64 md:h-72 lg:h-80">
                <img
                    onError={(e) => e.target.src = '/images/img-placeholder.jpeg'}
                    className="object-cover w-full h-full"
                    src={img}
                    alt={`Image of ${name}`}
                />
            </picture>

            <header className="p-4 flex flex-col items-start justify-start space-y-2">
                <h2 className="text-lg md:text-xl font-bold text-white truncate">
                    {name}
                </h2>
                <span className={statusColor()}>
                    {status}
                </span>
            </header>
        </a>
    );
}
