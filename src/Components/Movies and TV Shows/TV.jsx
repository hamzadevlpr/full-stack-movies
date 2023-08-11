import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from '../Pagination';
import { ClipLoader } from 'react-spinners';
import { NavLink } from 'react-router-dom';



function TV() {

    const [tvShow, setTvShow] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchAlltvShows()
    }, []);

    const fetchAlltvShows = async () => {
        try {
            setLoading(true)
            const apiKey = "ca258fa0adb338022b74848eb9dade0a";

            const url = `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&sort_by=popularity.desc&api_key=${apiKey}`;
            const response = await axios.get(url);
            // console.log(response)
            setTvShow(response.data.results);
        } catch (error) {
            console.error('Error fetching TV Shows:', error);
        } finally {
            setLoading(false)
        }
    };

    return (
        <>
            <section className="top-rated" style={{
                background: `url("/src/assets/top-rated-bg.jpg") no-repeat`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                paddingBlock: 'var(--section-padding)',
                height: '100%'
            }}>
                <div className="container">
                    <h2 className="h2 section-title">Popular TV Shows</h2>
                    {loading ? (
                        <div className="clipLoader">
                            <ClipLoader color='#e9e148' loading={loading} size={80} />
                        </div>
                    ) : (

                        <ul className="movies-list">
                            {tvShow.map((element, index) => (
                                <div key={index}>
                                    <li>
                                        <NavLink to={`/tvshow/${element.id}`} className="movie-card">
                                            <a>
                                                <figure className="card-banner">
                                                    <div className="badge">
                                                        <p>{element.original_language.toUpperCase() || 'N/A'}</p>
                                                    </div>
                                                    <img
                                                        src={`https://image.tmdb.org/t/p/w500/${element.poster_path}`}
                                                        alt={element.name}
                                                    />
                                                </figure>
                                            </a>
                                            <div className="title-wrapper">
                                                <a>
                                                    <h3 className="card-title">{element.name}</h3>
                                                </a>
                                                {element.first_air_date && (
                                                    <time dateTime={2022}>{element.first_air_date.slice(0, 4)}</time>
                                                )}
                                            </div>
                                            <div className="card-meta">
                                                <div className="badge badge-outline">4K</div>
                                                <div className="duration">
                                                    <ion-icon name="time-outline" />
                                                    <time dateTime="PT122M">122 min</time>
                                                </div>
                                                <div className="rating">
                                                    <ion-icon name="star" />
                                                    <data>{element.vote_average}</data>
                                                </div>
                                            </div>
                                        </NavLink>
                                    </li>
                                </div>
                            ))}
                        </ul>

                    )}
                </div>

            </section>
        </>
    );
}

export default TV;
