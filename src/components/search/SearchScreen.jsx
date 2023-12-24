import React from 'react'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string';

import useForm from '../../hooks/useForm'
import { getFilmByName } from '../../selectors/getFilmByName'
import FilmCard from '../films/FilmCard'

const SearchScreen = ({ history }) => {
    const location = useLocation()
    const { q = '' } = queryString.parse(location.search)
    const [formValues, handleInput] = useForm({
        searchText: q
    })
    const { searchText } = formValues
    const FilmsFiltered = getFilmByName(searchText)

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`)
    }

    return (
        <div>
            <h2>Search Screen</h2>
            <hr />
            <div className="row">
                <div className="col-5">
                    <form onSubmit={handleSubmit}>
                        <input type="text"
                               placeholder="Find your film"
                               name="searchText"
                               value=""
                               className="form-control"
                               value={searchText}
                               onChange={handleInput} />
                        <button type="submit" className="btn m-t btn-block btn-outline-primary">
                            Search
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    {FilmsFiltered.map(film => (<FilmCard key={film.id} {...film} />))}
                </div>
            </div>
        </div>
    )
}

export default SearchScreen