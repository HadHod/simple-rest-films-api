const dummyjson  = require('dummy-json');

import { IFilm } from '../models/IFilm';

let films: IFilm[] = [];

const template = `
{
    "films": [
      {{#repeat 100}}
      {
        "id": {{@index}},
        "title": "{{company}}",
        "rating": "{{int 1 10}}",
        "description": "{{lorem 150}}",
        "duration": "{{int 60 200}}",
        "premiere": "{{int 1950 2020}}",
        "image": "img{{@index}}.png",
        "genres": [
          {{#repeat 5}}
          "{{genre}}"
          {{/repeat}}
        ]
      }
      {{/repeat}}
    ]
}
`;

const helpers = {
    genre: () => {
        const genres = [
            'Action',
            'Adventure',
            'Animation',
            'Biography',
            'Comedy',
            'Crime',
            'Documentary',
            'Drama',
            'Family',
            'Fantasy',
            'Film Noir',
            'History',
            'Horror',
            'Music',
            'Musical',
            'Mystery',
            'Romance',
            'Sci-Fi',
            'Short Film',
            'Sport',
            'Superhero',
            'Thriller',
            'War',
            'Western'
        ];
        return genres[Math.floor(Math.random() * genres.length)];
    }
};

export const generateDB = () => {
    films = JSON.parse(dummyjson.parse(template, { helpers })).films;
};

export const getFilms = () => films;

export default films;
