import client from './client.js';

const movieFields = `
    title,
    actor,
    name,
`;

export const getMovies = async () => {
    const data = await client.fetch(`*[_type == "movie"]{${movieFields}}`);
    return data;
}