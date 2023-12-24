import React, {useEffect, useState} from 'react'
import FilmList from '../films/FilmList'
import {useFilms} from "../../hooks/useFilms";
import LoaderFilms from "../loader/LoaderFilms";
import MessageWarning from "../messages/MessageWarning";

const FilmScreen = () => {

    const listFilms = useFilms();

    if (listFilms.length === 0) {
        return (
            <React.Fragment>
                <LoaderFilms />
            </React.Fragment>
        );
    }

    return(
        <div>
            FilmScreen
            <FilmList films={listFilms} />
        </div>
    )
}

export default FilmScreen