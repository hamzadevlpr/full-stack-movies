import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from '../Pagination';
import { ClipLoader } from 'react-spinners';



function AllMovies() {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(20);

    useEffect(() => {
        fetchAllMovies();
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    const fetchAllMovies = async () => {
        try {
            const apiKey = "ca258fa0adb338022b74848eb9dade0a";
            const totalPages = 20;
            let allMovies = [];

            for (let page = 1; page <= totalPages; page++) {
                const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc&api_key=${apiKey}&page=${page}`;
                const response = await axios.get(url);
                allMovies = [...allMovies, ...response.data.results];
            }

            setMovies(allMovies);
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };
    const handleChange = (event, value) => {
        setPage(value);
    };

    const lastPageIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPageIndex - postsPerPage;
    const currentPost = movies.slice(firstPostIndex, lastPageIndex);

    return (
        <>

            {loading ? (
                <div className="clipLoader">
                    <ClipLoader color='#e9e148' loading={loading} size={80} />
                </div>
            ) : (

                <section className="top-rated" style={{
                    background: `url("/src/assets/top-rated-bg.jpg") no-repeat`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    paddingBlock: 'var(--section-padding)',
                    height: '99vh'
                }}>
                    <h2 className="h2 section-title">Popular Movies</h2>
                    <div className="container">

                        <ul className="movies-list">
                            {currentPost.map((moviesList, index) => (
                                <div key={index}>
                                    <li>
                                        <div className="movie-card">
                                            <a>
                                                <figure className="card-banner">
                                                    <div className="badge">
                                                        <p>{moviesList.original_language.toUpperCase() || 'N/A'}</p>
                                                    </div>
                                                    <img
                                                        src={`https://image.tmdb.org/t/p/w500/${moviesList.poster_path}`}
                                                        alt={moviesList.title}
                                                    />
                                                </figure>
                                            </a>
                                            <div className="title-wrapper">
                                                <a>
                                                    <h3 className="card-title">{moviesList.title}</h3>
                                                </a>
                                                {moviesList.release_date && (
                                                    <time dateTime={2022}>{moviesList.release_date.slice(0, 4)}</time>
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
                                                    <data>{moviesList.vote_average}</data>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </div>
                            ))}
                        </ul>
                    </div>
                    <Pagination
                        totalPosts={movies.length}
                        postsPerPage={postsPerPage}
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
                    />
                </section>
            )}
        </>
    );
}

export default AllMovies;
