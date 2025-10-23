import React, { useMemo } from 'react'

const GenresCaruosale = ({ games, setCategory, setLimit }) => {

    const genres = useMemo(() => {
        if (!games.length) return [];
        const allGenres = games.map(game => game.genre);
        return [...new Set(allGenres)];
    }, [games]);

    const chooseCategory = (category) => {
        setLimit(Infinity);
        setCategory(category)
    }



    return (
        <section className='carousel'>
            <div className='group'>

                {genres.map((genre, idx) => (
                    <div key={idx} className='genre-card' onClick={() => chooseCategory(genre)}>{genre}</div>
                ))}

            </div>
            <div className='group' aria-hidden>

                {genres.map((genre, idx) => (
                    <div key={idx} className='genre-card' onClick={() => chooseCategory(genre)}>{genre}</div>
                ))}

            </div>


        </section>
    )
}

export default GenresCaruosale