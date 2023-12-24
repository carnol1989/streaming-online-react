import {films} from '../data/films';

export const getFilmById = (id) => {
    return films.find(film => film.id === id)
}