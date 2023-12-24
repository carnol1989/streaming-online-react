import {films} from '../data/films';

export const getFilmByYearPublication = (name = '') => {
    if (name === '') {
        return []
    }

    name = name.toLocaleLowerCase();

    return films.filter(film => film.category.toLocaleLowerCase().includes(name))
}