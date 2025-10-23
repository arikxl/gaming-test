// src/pages/GameDetailsPage.jsx

import { useParams, Link } from 'react-router-dom';
import { useFetchGameById } from '../hooks/useFetchGameById';

const GameDetailsPage = () => {
  const { gameId } = useParams();
  const { game, isLoading, error } = useFetchGameById(gameId);

  if (isLoading) {
    return <div>Loading game details...</div>;
  }

  if (error || !game) {
    return <div>Error loading game details. Please try again later.</div>;
  }



  return (
    <section >

      <div className='flex'>
        <Link to="/" >
          ⬅️ Back to all games
        </Link>
        <h2>{game.title}</h2>
        <Link to={game.game_url} target='_blank' >
          <button>Play Now</button>
        </Link>
      </div>

      <div className='game-flex'>
        <div className='game-left'>

          <img className='game-img'
            src={game.thumbnail}
            alt={game.title}
          />
          <div className='screenshots'>
            {game.screenshots.map((i) => (
              <img key={i.id} alt={game.title} src={i.image} />
            ))}
          </div>
        </div>

        <div className='game-right'>

          <h3>{game.description}</h3>

          <p><strong>Genre:</strong> {game.genre}</p>
          <p><strong>Platform:</strong> {game.platform}</p>
          <p><strong>Publisher:</strong> {game.publisher}</p>
          <p><strong>Release Date:</strong> {new Date(game.release_date).toLocaleDateString()}</p>

          <br />
          <br />
          <br />


          {
            game.minimum_system_requirements && (
              <>
                <h3>Minimum system requirements:</h3>
                <p><strong>OS:</strong> {game.minimum_system_requirements?.os}</p>
                <p><strong>Processor:</strong> {game.minimum_system_requirements?.processor}</p>
                <p><strong>Memory:</strong> {game.minimum_system_requirements?.memory}</p>
                <p><strong>Graphics:</strong> {game.minimum_system_requirements?.graphics}</p>
                <p><strong>Storage:</strong> {game.minimum_system_requirements?.storage}</p>
              </>

            )
          }


        </div>

      </div>



    </section>
  );
};

export default GameDetailsPage;