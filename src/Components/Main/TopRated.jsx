
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function TopRated() {
    const [movies, setMovies] = useState([])

    const fetchTopRatedMovies = async () => {
        try {
            const apiKey = "ca258fa0adb338022b74848eb9dade0a";
            const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc&api_key=${apiKey}`;
            const response = await axios.get(url);
            const topRatedMovies = response.data.results.slice(0, 8);
            setMovies(topRatedMovies)
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };
    useEffect(() => {
        fetchTopRatedMovies();
    }, [])
    return (
        <>
            {/* - #TOP RATED */}
            <section className="top-rated" style={{
                background: `url("/src/assets/top-rated-bg.jpg") no-repeat`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                paddingBlock: 'var(--section-padding)',
            }}>
                <div className="container">
                    <p className="section-subtitle">Online Streaming</p>
                    <h2 className="h2 section-title">Top Rated Movies</h2>
                    <ul className="filter-list">
                        <li>
                            <button className="filter-btn">Movies</button>
                        </li>
                        <li>
                            <button className="filter-btn">TV Shows</button>
                        </li>
                        <li>
                            <button className="filter-btn">Documentary</button>
                        </li>
                        <li>
                            <button className="filter-btn">Sports</button>
                        </li>
                    </ul>
                    <ul className="movies-list">
                        {
                            movies.map((element, index) => {
                                return (
                                    <>
                                        <li>
                                            <NavLink className="movie-card">
                                                <a href="./movie-details.html">
                                                    <figure className="card-banner">
                                                        <img
                                                            src={`https://image.tmdb.org/t/p/w500/${element.poster_path}`}
                                                            alt={element.title}
                                                        />
                                                    </figure>
                                                </a>
                                                <div className="title-wrapper">
                                                    <a href="./movie-details.html">
                                                        <h3 className="card-title">{element.title}</h3>
                                                    </a>
                                                    <time dateTime={element.release_date.slice(0, 4)}>{element.release_date.slice(0, 4)}</time>
                                                </div>
                                                <div className="card-meta">
                                                    <div className="badge badge-outline">{element.original_language.toUpperCase()}</div>
                                                    <div className="duration">
                                                        <ion-icon name="time-outline" />
                                                        <time dateTime="PT122M">122 min</time>
                                                    </div>
                                                    <div className="rating">
                                                        <ion-icon name="star" />
                                                        <data>{element.vote_average.toFixed(1)}</data>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </li>
                                    </>
                                )
                            })
                        }
                    </ul>
                </div>
            </section>
        </>
    )
}

export default TopRated