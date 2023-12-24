import React from 'react'
import { Link } from 'react-router-dom'

const FilmCard = ({
                      id,
                      name,
                      url_trailer,
                      duration,
                      director,
                      year_publication
                  }) => {
    return (
        <div className="card ms-3" style={{ maxWidth: 540 }}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={`./assets/films/${id}.jpg`} className="card-img" alt={name} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">Director: {director}</p>
                        <p className="card-text">{duration}</p>
                        <p className="card-text">{year_publication}</p>
                        <Link to={`/films/${id}`}>
                            Más...
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilmCard