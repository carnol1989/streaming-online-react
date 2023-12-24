import { films } from '../data/films'
import { useEffect, useState } from "react";

export const useFilms = () => {

    const [filmsList, setFilms] = useState([]);

    useEffect(() => {
        setFilms(films);
        localStorage.setItem('filmsList', JSON.stringify(films));
    }, [filmsList]);

    return filmsList;
}