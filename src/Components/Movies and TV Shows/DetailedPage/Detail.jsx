import React, { useEffect, useState } from 'react'
import imdb from '/src/assets/imdb.png'
import no from '/src/assets/images.png'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';

function Detail() {


    const { id } = useParams();
    // console.log(id)
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);
    const [posterPath, setPosterPath] = useState(true);
    const [cast, setCast] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState();
    useEffect(() => {
        setLoading(true)
        async function fetchMovieDetails() {
            try {
                const apiKey = "ca258fa0adb338022b74848eb9dade0a";
                const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;
                const response = await axios.get(url);
                setPosterPath(response.data.poster_path);
                setMovie(response.data);


                const castUrl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`;
                const castResponse = await axios.get(castUrl);
                const firstSevenCast = castResponse.data.cast.slice(0, 7);
                setCast(firstSevenCast);

                const videoUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=en-US`;

                axios.get(videoUrl)
                    .then(response => {
                        const results = response.data.results;
                        if (results.length > 0) {
                            const firstVideoKey = results[0].key;
                            const youtubeUrl = `https://www.youtube.com/embed/${firstVideoKey}`;
                            setTrailerUrl(youtubeUrl);
                        } else {
                            console.log("No trailer video available.");
                        }
                    })
                    .catch(error => {
                        console.error("Error fetching video data:", error);
                    });


                console.log(cast)
            } catch (error) {
                console.error('Error fetching movie details:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchMovieDetails();
    }, [id]);
    return (
        <>
            <main>
                <article>
                    {
                        loading ?
                            <div className="clipLoader">
                                <ClipLoader color='#e9e148' loading={loading} size={80} />
                            </div> :
                            <>
                                <section className='movie-detail' style={{
                                    minHeight: '100%',
                                    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(https://image.tmdb.org/t/p/original${posterPath})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                                >
                                    <div className="container upper">
                                        <figure className="movie-detail-banner">
                                            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                                            <div className="movie-banner-botton">
                                                <div className="box">
                                                    <Link className="share">
                                                        <ion-icon name="checkmark-outline" />
                                                        <span>First</span>
                                                    </Link>
                                                </div>
                                                <div className="box">
                                                    <Link className="share">
                                                        <ion-icon name="bookmark-outline" />
                                                        <span>Love</span>
                                                    </Link>
                                                </div>
                                                <div className="box">
                                                    <Link className="share">
                                                        <ion-icon name="heart-outline" />
                                                        <span>Like</span>
                                                    </Link>
                                                </div>
                                                <div className="box">
                                                    <Link className="share">
                                                        <ion-icon name="heart-dislike-outline"></ion-icon>
                                                        <span>Dislike</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </figure>

                                        <div className="movie-detail-content">
                                            <p className="detail-subtitle">New Movie</p>
                                            <h1 className="h2 detail-title">
                                                {movie.title}
                                            </h1>
                                            <div className="meta-wrapper">
                                                <div className="badge-wrapper">
                                                    <div className="badge badge-fill">PG 13</div>
                                                    <div className="badge badge-outline">HD</div>
                                                </div>
                                                <div className="ganre-wrapper">
                                                    {loading ? (
                                                        <p>Loading genres...</p>
                                                    ) : (
                                                        movie.genres && movie.genres.map(genre => (
                                                            <a key={genre.id} href="#">{genre.name},</a>
                                                        ))
                                                    )}
                                                </div>
                                                <div className="date-time">
                                                    <div>
                                                        <ion-icon name="calendar-outline" />
                                                        <time dateTime={movie.release_date ? movie.release_date : ''}>
                                                            {loading ? (
                                                                <p>Loading release date...</p>
                                                            ) : (
                                                                movie.release_date ? movie.release_date.slice(0, 4) : ''
                                                            )}
                                                        </time>
                                                    </div>
                                                    <div>
                                                        <ion-icon name="time-outline" />
                                                        <time dateTime="PT115M">115 min</time>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="storyline">
                                                {loading ? (
                                                    <p>Loading overview...</p>
                                                ) : (
                                                    movie.overview ? movie.overview.slice(0, 200) : ''
                                                )}
                                            </p>
                                            <div className="details-actions">
                                                <Link className="share">
                                                    <ion-icon name="share-social" />
                                                    <span>Share</span>
                                                </Link>
                                                <Link className="btn btn-primary">
                                                    <ion-icon name="play" />
                                                    <span>Watch Now</span>
                                                </Link>
                                                <Link className="share imdb-rating">
                                                    <img src={imdb} width={35} alt="" />
                                                    <span>{movie.vote_average.toFixed(1)} / 10</span>
                                                </Link>
                                            </div>
                                            <a
                                                href="/src/assets/movie-4.png"
                                                download=""
                                                className="download-btn"
                                            >
                                                <span>Download</span>
                                                <ion-icon name="download-outline" />
                                            </a>
                                        </div>
                                    </div>
                                </section>

                                {/* //casts starts */}
                                <div class="wrapper">
                                    <h1 className="h2 detail-title">
                                        Cast
                                    </h1>
                                    <div className="cast-wrapper">
                                        {
                                            cast.map((element, index) => {
                                                return (
                                                    <>
                                                        <div className="casts" key={index}>
                                                            <div>
                                                                <img src={element.profile_path ? `https://image.tmdb.org/t/p/w500/${element.profile_path}` : { no }} class="image--cover" />
                                                            </div>
                                                            <div>
                                                                <h6 style={{ color: 'white' }}>{element.character}</h6>
                                                                <p style={{ color: 'white', fontSize: '10px' }}>{element.original_name}</p>
                                                            </div>
                                                        </div>
                                                    </>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                {/* //casts ends */}
                            </>

                    }
                    {trailerUrl ? (
                        <iframe
                            title="Movie Trailer"
                            width="640"
                            height="360"
                            src={trailerUrl}
                            allowFullScreen
                        ></iframe>
                    ) : (
                        <p>No trailer available.</p>
                    )}
                </article>
            </main >


        </>
    )
}

export default Detail