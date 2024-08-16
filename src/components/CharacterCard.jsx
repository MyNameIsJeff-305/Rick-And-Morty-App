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
            href={`/character/${id}`}
            className="aspect-w-1 aspect-h-1 border shadow-md bg-gray-800 border-gray-700 hover:scale-105 hover:bg-gray-700 hover:border-gray-500 transition flex flex-col justify-between"
            style={{ borderRadius: '12px' }}
        >
            <picture className="flex justify-center p-0 items-center">
                <img
                    onError={(e) => e.target.src = '/images/img-placeholder.jpeg'}
                    className="items-center"
                    src={img}
                    alt={`Image of ${name}`}
                    style={{ borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }}
                />
            </picture>

            <header className="w-full p-4 flex-grow flex flex-col items-start justify-start truncate" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                <h2 className="mb-2 text-xl font-bold tracking-tight text-white truncate">
                    {name}
                </h2>
                <span className={statusColor()}>
                    {status}
                </span>
            </header>
        </a>
    );
}
