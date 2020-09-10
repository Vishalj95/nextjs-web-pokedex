import Layout from '../components/Layout';
import Card from '../components/Card';

export default function Home({ pokemons }) {
  return (
    <Layout title='NextJs Web Pokedex'>
        <div className="flex flex-wrap">
            {pokemons.map((pokemon, index) => (
                <Card key={pokemon.name} index={index} pokemon= {pokemon} />    
            ))}
        </div>
    </Layout>        
  )
}

export async function getStaticProps(context) {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
        const { results } = await response.json();
        const pokemons = results.map((result, index) => {
            const paddedId = ('00'+(index+1)).slice(-3);
            const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
            return { ...result, image }
        });
        return {
            props: { pokemons }
        }
    } catch(error) {
        console.log(error);
    }
}