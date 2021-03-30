import client from './client.js';

const movieFields = `
    title,
    'actor': actor->name
`;

export const getMovies = async () => {
    const data = await client.fetch(`*[_type == "movie"]{${movieFields}}`);
    return data;
}