export const genres = [
    { _id: '1', name: 'Action' },
    { _id: '2', name: 'Adventure' },
    { _id: '3', name: 'Children & Family' },
    { _id: '4', name: 'Comedies' },
    { _id: '5', name: 'Dramas' },
    { _id: '6', name: 'Music' },
    { _id: '7', name: 'Mystery' },
    { _id: '8', name: 'Romance' },
    { _id: '9', name: 'Sci-Fi' },
    { _id: '10', name: 'Slice of Life' },
    { _id: '11', name: 'Sports' }
];

export function getGenres() {
    return genres.filter((g) => g);
}