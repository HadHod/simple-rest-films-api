import { IFilm } from '../models/IFilm';
import { GENRE } from '../enums/Genre';

const films: IFilm[] = [
    {
        id: '0',
        name: 'Star Wars: Episode IX - The Rise of Skywalker',
        premiere: 2019,
        rating: 7,
        director: 'J.J. Abrams',
        cast: ['Carrie Fisher', 'Mark Hamill', 'Adam Driver'],
        genres: [GENRE.ACTION, GENRE.ADVENTURE, GENRE.FANTASY, GENRE.SCI_FI]
    },
    {
        id: '1',
        name: 'Parasite',
        premiere: 2019,
        rating: 9,
        director: 'Bong Joon Ho',
        cast: ['Kang-ho Song', 'Sun-kyun Lee', 'Yeo-jeong Jo'],
        genres: [GENRE.COMEDY, GENRE.DRAMA, GENRE.THRILLER]
    }
];

export default films;
