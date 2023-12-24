import {films} from '../data/films';

export const getFilmByActor = (name = '') => {
    if (name === '') {
        return []
    }

    name = name.toLocaleLowerCase();

    return films.filter(film => film.cast.filter(actor => actor.name.toLocaleLowerCase().includes(name)))
}