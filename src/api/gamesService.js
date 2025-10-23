
export const fetchGames = async (category) => {
    console.log(category)
    // const API_URL = 'https://www.freetogame.com/api/games';
    // const API_URL = '/api/games';
    const API_URL = `/api/games?category=shooter`;

    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(`An error occurred: ${response.statusText}`);
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error("Failed to fetch games:", error);
        throw error;
    }
};




export const fetchGameById = async (id) => {

    const API_URL = `/api/game?id=${id}`;

    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(`Failed to fetch game with id ${id}: ${response.statusText}`);
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error("Failed to fetch game details:", error);
        throw error;
    }
};