import Link from 'next/link';

export default function Card({ pokemon, index }) {
    return (
        <div className="w-full mb-4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4">
            <Link href={`/pokemon/${index + 1}`}>
                <a className="pokeball-cursor">
                    <div className="flex flex-col content-center p-4 pb-12 mt-24 mr-6 ease-linear bg-white border shadow fancy-br border-grey hover:bg-gray-100 hover:shadow-lg">
                        <div className="-mt-24 filter-drop-shadow">
                            <img className="mx-auto animate-float" src={ pokemon.image } alt={ pokemon.name }/>
                        </div>
                        <div>
                            <h2 className="text-xl text-center text-gray-800 capitalize">{ pokemon.name }</h2>
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    )
}