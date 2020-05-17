import { GENRE } from '../enums/Genre';

export interface IFilm {
    id: string;
    name: string;
    premiere: number;
    rating: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    director: string;
    cast: string[];
    genres: GENRE[];
}
