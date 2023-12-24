import {films} from '../data/films';

export const getFilmByName = (name = '') => {
    if (name === '') {
        return []
    }

    name = name.toLocaleLowerCase();

    return films.filter(film => film.director.toLocaleLowerCase().includes(name))
}