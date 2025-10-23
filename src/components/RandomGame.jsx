import  {  useMemo } from 'react'
import { useFetchGames } from '../hooks/useFetchGames';
import { useNavigate } from 'react-router-dom';

const RandomGame = () => {

    const navigate = useNavigate();
    const { games, isLoading, error } = useFetchGames();

    const ids = useMemo(() => {
        if (!games.length) return [];
        return games.map(game => game.id);
    }, [games]);




    
    const randomGame = () => {
        
        const randomNumber = Math.round(Math.random() * ids.length);
        console.log(randomNumber)
        navigate(`/game/${ids[randomNumber]}`);
    }

    // console.log(ids)
    if (isLoading) {
        return <div>Loading games...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }




    return (
        <p onClick={randomGame} style={{cursor:'pointer'}}>
            🎲Random Game🎮
        </p>
    )
}

export default RandomGame