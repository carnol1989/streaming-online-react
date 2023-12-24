import React, {useContext, useMemo, useState} from 'react'
import {useParams, useNavigate, Navigate} from 'react-router-dom'
import {getFilmById} from "../../selectors/getFilmById";

const FilmDetail = () => {

    const navigate = useNavigate();

    const { filmId } = useParams()
    const itemFilm = useMemo(() => getFilmById(parseInt(filmId)), [filmId])

    const [bandBuy, setBandBuy] = useState(false);
    const [bandRent, setBandRent] = useState(false);
    const [bandError, setBandError] = useState(false);
    const itemsFilms = JSON.parse(localStorage.getItem('filmsList'));
    const buyFilm = () => {
        itemsFilms.map((item, index) => {
            if (item.id === itemFilm.id) {
                itemFilm.isBuy = true;
                localStorage.setItem('filmsList', JSON.stringify(itemsFilms));
                return;
            }
        });
        setBandBuy(true);
    }

    const rentFilm = () => {
        itemsFilms.map((item, index) => {
            if (item.id === itemFilm.id) {
                itemFilm.isRent = true;
                localStorage.setItem('filmsList', JSON.stringify(itemsFilms));
                return;
            }
        });
        setBandRent(true);
    }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img src={`../assets/films/${filmId}.jpg`} className="img-thumbnail" alt={itemFilm.name} />
            </div>
            <div className="col-8 animate__animated animate__fadeInLeft">
                <h3>{itemFilm.name}</h3>
                <iframe
                    width={`${itemFilm.iframe.width}`}
                    height={`${itemFilm.iframe.height}`}
                    src={`${itemFilm.iframe.src}`}
                    title={`${itemFilm.iframe.title}`}
                    frameBorder={`${itemFilm.iframe.frameBorder}`}
                    allow={`${itemFilm.iframe.allow}`}
                    allowFullScreen>
                </iframe>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>Synopsis:</b> {itemFilm.synopsis}
                    </li>
                    <li className="list-group-item">
                        <b>Director:</b> {itemFilm.director}
                    </li>
                    <li className="list-group-item">
                        <b>Cast:</b>
                        {itemFilm.cast.map((item) => {
                            return " " + item.name + ", ";
                        })}
                    </li>
                    <li className="list-group-item">
                        <b>Year Publication:</b> {itemFilm.year_publication}
                    </li>
                    <li className="list-group-item">
                        <b>Duration:</b> {itemFilm.duration}
                    </li>
                    <li className="list-group-item">
                        <b>Category:</b> {itemFilm.category}
                    </li>
                    <li className="list-group-item">
                        <b>Language:</b>
                        <ul className="list-group">
                            {itemFilm.languages.map((item) => {
                                return (
                                    <li className="list-group-item">
                                        {item.language}
                                    </li>
                                );
                            })}
                        </ul>
                    </li>
                    <li className="list-group-item">
                        <b>Critics:</b>
                        <ul className="list-group">
                            {itemFilm.critics.map((item) => {
                                return (
                                    <li className="list-group-item">
                                        <b>{item.user}: </b>{item.message} - <b>Score: </b>{item.score}
                                    </li>
                                );
                            })}
                        </ul>
                    </li>
                </ul>
                <button className="btn btn-outline-primary" onClick={buyFilm}>Buy</button>
                <button className="btn btn-outline-secondary" onClick={rentFilm}>Rent</button>
                <button className="btn btn-outline-info" onClick={() => navigate(-1)}>Return</button>
                <br />
                {bandBuy &&
                        <div className="alert alert-primary" role="alert">
                            Purchase made successfully!
                        </div>
                }
                {bandRent &&
                        <div className="alert alert-primary" role="alert">
                            Successful rental!
                        </div>
                }
                {bandError &&
                    <div className="alert alert-danger" role="alert">
                        An error occurred when purchasing or renting the movie!
                    </div>
                }
            </div>
        </div>
    )
}

export default FilmDetail;