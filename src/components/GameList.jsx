import React from 'react'
import GameItem from './GameItem'
import { Link } from 'react-router-dom'

const GameList = ({ games, limit }) => {


    

    return (
        <section>


            <div className='game-list'>
                {games.map((game, idx) => (
                    idx < limit && (
                        <Link className='game-card'  to={`/game/${game.id}`} >
                            <GameItem key={game.id} game={game} />
                        </Link>
                    )
                ))}
            </div>
        </section>)
}

export default GameList