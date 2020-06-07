export interface IFilm {
    id: string;
    title: string;
    rating: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    description: string;
    duration: number;
    premiere: number;
    image: string;
    genres: string[];
}
