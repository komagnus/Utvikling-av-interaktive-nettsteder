import client from './client.js';

const movieFields = `
    title,
    actor,
`;

export const getMovies = async () => {
    const data = await client.fetch(`*[_type == "movie"]{${movieFields}}`);
    return data;
}