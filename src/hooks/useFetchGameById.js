// src/hooks/useFetchGameById.js

import { useState, useEffect } from 'react';
import { fetchGameById } from '../api/gamesService';

export const useFetchGameById = (id) => {
    const [game, setGame] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!id) {
            setIsLoading(false);
            return;
        }

        const loadGameDetails = async () => {
            try {
                const data = await fetchGameById(id);
                setGame(data);
            } catch (err) {
                setError(err);
            } finally {
                setIsLoading(false);
            }
        };

        loadGameDetails();
    }, [id]);

    return { game, isLoading, error };
};