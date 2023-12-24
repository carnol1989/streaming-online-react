import {films} from '../data/films';

export const getFilmByLanguage = (name = '') => {
    if (name === '') {
        return []
    }

    name = name.toLocaleLowerCase();

    return films.filter(film => film.languages.filter(lang => lang.language.toLocaleLowerCase().includes(name)))
}