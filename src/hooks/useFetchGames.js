
import { useState, useEffect } from 'react';
import { fetchGames } from '../api/gamesService';

export const useFetchGames = () => {
    const [games, setGames] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadGames = async () => {
            try {
                const data = await fetchGames();

                setGames(data)

            } catch (err) {
                setError(err);
            } finally {
                setIsLoading(false);
            }
        };

        loadGames();
    }, []);

    // ההוק מחזיר את המידע והמצבים שלו
    return { games, isLoading, error };
};