import { useMemo, useState } from 'react'
import { useFetchGames } from '../hooks/useFetchGames';
import GenresCaruosale from '../components/GenresCaruosale';
import GameList from '../components/GameList';

const HomePage = () => {

  const [category, setCategory] = useState('');
  const { games, isLoading, error } = useFetchGames();
  const [limit, setLimit] = useState(4);


  const filteredGames = useMemo(() => {
    if (!category || category === '') {
      return games;
    }
    return games.filter((game) => game.genre === category);
  }, [category, games]);

  if (isLoading) {
    return <div>Loading games...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2 className='headline'>Free-to-Play {category} Games</h2>

      <GenresCaruosale games={games} setCategory={setCategory} setLimit={setLimit } />

      <GameList games={filteredGames} limit={limit} />

      <section>
        <button onClick={()=>setLimit(Infinity)} hidden={limit > 10}>
          Show all games
        </button>
      </section>


    </div>
  )
}

export default HomePage