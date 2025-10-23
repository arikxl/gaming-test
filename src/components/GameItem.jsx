import { Link } from "react-router-dom"

const GameItem = ({ game }) => {


    return (

            <figure >
                <p>
                    {game.title}
                </p>

                <img src={game.thumbnail} />
                <p>

                    {
                        game.short_description
                    }
                </p>
            </figure>
    )
}

export default GameItem