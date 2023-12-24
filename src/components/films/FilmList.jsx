import React, { useMemo, useState } from 'react';

import FilmCard from '../films/FilmCard'

function FilmList({ films }) {

    const listFilms = films;

    const [txtSearch, setTxtSearch] = useState('');

    let resultListFilms = useMemo(() => {
        if (txtSearch === '') {
            return listFilms;
        } else {
            return listFilms.filter(film => film.name.toLocaleLowerCase().includes(txtSearch.toLocaleLowerCase()));
        }
    }, [txtSearch]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <input type="text"
                           placeholder="Buscar Film"
                           className="form-control"
                           onChange={(e) => setTxtSearch(e.target.value)}
                           value={txtSearch} />
                </div>
            </div>
            <br />
            <div className="row mb-2">
                {resultListFilms.map((item) => {
                    return (
                        <div key={item.id} className="col-md-6">
                            <FilmCard key={item.id} {...item} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default FilmList;
