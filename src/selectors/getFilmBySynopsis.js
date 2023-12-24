import {films} from '../data/films';

export const getFilmBySynopsis = (name = '') => {
    if (name === '') {
        return []
    }

    name = name.toLocaleLowerCase();

    return films.filter(film => film.synopsis.toLocaleLowerCase().includes(name))
}