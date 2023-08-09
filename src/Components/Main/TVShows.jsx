import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

function TVShows() {
    const [tvShows, setTvShows] = useState([])

    const fetchTopRatedTV = async () => {
        try {
            const apiKey = "ca258fa0adb338022b74848eb9dade0a";
            const url = `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc&api_key=${apiKey}`;
            const response = await axios.get(url);
            const topRatedTV = response.data.results.slice(0, 4);
            setTvShows(topRatedTV)
            console.log(topRatedTV)
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };
    useEffect(() => {
        fetchTopRatedTV();
    }, [])
    return (
        <>
            {/*  - #UPCOMING*/}
            <section className="upcoming" style={{
                background: `url("/src/assets/upcoming-bg.png") no-repeat`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                paddingBlock: 'var(--section-padding)',
            }}>
                <div className="container">
                    <div className="flex-wrapper">
                        <div className="title-wrapper">
                            <p className="section-subtitle">Best TV Show</p>
                            <h2 className="h2 section-title">Upcoming Shows</h2>
                        </div>
                    </div>
                    <ul className="movies-list has-scrollbar">
                        {
                            tvShows.map((element, index) => {
                                return (
                                    <li key={index}>
                                        <div className="movie-card">
                                            <a href="./movie-details.html">
                                                <figure className="card-banner">
                                                    <img
                                                        src={`https://image.tmdb.org/t/p/w500/${element.poster_path}`}
                                                        alt={element.name}
                                                    />
                                                </figure>
                                            </a>
                                            <div className="title-wrapper">
                                                <a href="./movie-details.html">
                                                    <h3 className="card-title">{element.name}</h3>
                                                </a>
                                                <time dateTime={2022}>{element.first_air_date.slice(0, 4)}</time>
                                            </div>
                                            <div className="card-meta">
                                                <div className="badge badge-outline">{element.original_language.toUpperCase()}</div>
                                                <div className="duration">
                                                    <ion-icon name="time-outline" />
                                                    <time dateTime="PT137M">137 min</time>
                                                </div>
                                                <div className="rating">
                                                    <ion-icon name="star" />
                                                    <data>{element.vote_average.toFixed(1)}</data>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </section>
        </>
    )
}

export default TVShows