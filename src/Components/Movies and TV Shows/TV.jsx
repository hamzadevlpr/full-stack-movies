import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from '../Pagination';
import { ClipLoader } from 'react-spinners';



function TV() {

    const [tvShow, setTvShow] = useState([]);
    const [loading, setLoading] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(20);

    useEffect(() => {
        fetchAlltvShows()
    }, []);

    const fetchAlltvShows = async () => {
        try {
            setLoading(true)
            const apiKey = "ca258fa0adb338022b74848eb9dade0a";
            const totalPages = 20;
            let alltvShows = [];

            for (let page = 1; page <= totalPages; page++) {
                const url = `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${page}&sort_by=popularity.desc&api_key=${apiKey}&page=${page}`;
                const response = await axios.get(url);
                alltvShows = [...alltvShows, ...response.data.results];
            }

            setTvShow(alltvShows);
        } catch (error) {
            console.error('Error fetching TV Shows:', error);
        } finally {
            setLoading(false)
        }
    };


    const lastPageIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPageIndex - postsPerPage;
    const currentPost = tvShow.slice(firstPostIndex, lastPageIndex);

    return (
        <>
            <section className="top-rated" style={{
                background: `url("/src/assets/top-rated-bg.jpg") no-repeat`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                paddingBlock: 'var(--section-padding)',
                height: '99vh'
            }}>
                <div className="container">
                    <h2 className="h2 section-title">Popular TV Shows</h2>
                    {loading ? (
                        <div className="clipLoader">
                            <ClipLoader color='#e9e148' loading={loading} size={80} />
                        </div>
                    ) : (

                        <ul className="movies-list">
                            {currentPost.map((element, index) => (
                                <div key={index}>
                                    <li>
                                        <div className="movie-card">
                                            <a>
                                                <figure className="card-banner">
                                                    <div className="badge">
                                                        <p>{element.original_language.toUpperCase() || 'N/A'}</p>
                                                    </div>
                                                    <img
                                                        src={`https://image.tmdb.org/t/p/w500/${element.poster_path}`}
                                                        alt={element.title}
                                                    />
                                                </figure>
                                            </a>
                                            <div className="title-wrapper">
                                                <a>
                                                    <h3 className="card-title">{element.title}</h3>
                                                </a>
                                                {element.release_date && (
                                                    <time dateTime={2022}>{element.release_date.slice(0, 4)}</time>
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
                                        </div>
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
