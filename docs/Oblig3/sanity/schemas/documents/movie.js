const movie = {
    title: 'Movie',
    name: 'movie',
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
        },
        {
            title: 'Actor',
            name: 'actor',
            type: 'reference',
            to: [{type: 'skuespiller'}],
        }
    ]
}
export default movie
