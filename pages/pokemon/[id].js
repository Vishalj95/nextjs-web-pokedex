import Layout from '../../components/Layout';
import Link from 'next/link';

export default function Pokemon({ pokemon }) {
    return (
        <Layout title='Pkemaon name'>
            <div className="flex flex-col items-center justify-center">
                <h1 className="mb-5 text-3xl text-center text-gray-800 capitalize">{ pokemon.name }</h1>
                <div className="mb-6">
                    <img src={ pokemon.image } alt={ pokemon.name }/>
                </div>
                <div className="flex flex-col items-center px-6 py-4 mb-3 text-center bg-white rounded-lg lg:px-24 md:px-18">
                    <div className="flex pb-3">
                        <div className="p-1 px-3 mr-2 border-r-2 border-gray-200">
                            <p className="mb-1 text-xl font-medium text-gray-800">
                                {pokemon.types[0].type.name}
                            </p>
                            <p className="font-mono text-sm text-gray-600">Type</p>
                        </div>
                        <div className="p-1 px-3 mr-2 border-r-2 border-gray-200">
                            <p className="mb-1 text-xl font-medium text-gray-800">
                                {pokemon.weight} <small className="text-sm font-normal text-gray-500">kg</small>
                            </p>
                            <p className="font-mono text-sm text-gray-600">Weight</p>
                        </div>
                        <div className="p-1 px-3 mr-2">
                            <p className="mb-1 text-xl font-medium text-gray-800">
                                {pokemon.height} <small className="text-sm font-normal text-gray-500">m</small>
                            </p>
                            <p className="font-mono text-sm text-gray-600">Height</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center pt-3 pb-3">
                        {pokemon.stats.map((stat) => (
                            <div key={stat.stat.name} className="p-2 px-3 mb-3 mr-2 bg-gray-200 rounded-lg">
                                <p className="mb-1 text-xl font-medium text-gray-800">
                                    {stat.base_stat}
                                </p>
                                <p className="font-mono text-sm text-gray-600">{stat.stat.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-2 text-left">
                    <Link href="/">
                        <a className="px-3 py-2 text-white bg-teal-600 rounded-md hover:bg-teal-800"> &lt; Back To Home</a>
                    </Link>
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps({ query }) {
    const id = query.id;
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokemon = await res.json();
        const paddedId = ('00' + id).slice(-3);
        pokemon.image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
        return {
            props: { pokemon },
        };
    } catch (err) {
        console.error(err);
    }
}