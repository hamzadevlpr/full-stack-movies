import React, { useEffect, useState } from 'react'
import heroBgImage from '/src/assets/hero-bg.jpg'
import no from '/src/assets/images.png'
import mv from '/src/assets/movie-4.png'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';
function TVDetail() {


    const { id } = useParams();
    const [tvShows, setTvShows] = useState({});
    const [loading, setLoading] = useState(true);
    const [posterPath, setPosterPath] = useState(true);
    const [cast, setCast] = useState([]);
    useEffect(() => {
        setLoading(true)
        async function fetchMovieDetails() {
            try {
                const apiKey = "ca258fa0adb338022b74848eb9dade0a";
                const url = `https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=en-US`;
                const response = await axios.get(url);
                setTvShows(response.data);

                const posterUrl = `https://api.themoviedb.org/3/tv/${id}/images?api_key=${apiKey}`;
                const posterResponse = await axios.get(posterUrl);
                // console.log(posterResponse.data)
                setPosterPath(posterResponse.data.posters[0].file_path);


                const castUrl = `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${apiKey}&language=en-US`;
                const castResponse = await axios.get(castUrl);
                const firstSevenCast = castResponse.data.cast.slice(0, 7);
                setCast(firstSevenCast);
            } catch (error) {
                console.error('Error fetching movie details:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchMovieDetails();
    }, [id]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
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
                                    height: '100%',
                                    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(https://image.tmdb.org/t/p/original${posterPath})`,
                                    backgroundSize: 'auto',
                                    backgroundPosition: 'center',

                                }}
                                >
                                    <div className="container upper">
                                        <figure className="movie-detail-banner">
                                            <img src={`https://image.tmdb.org/t/p/original${tvShows.poster_path}`} alt='Free Guy' />
                                            <Link className="play-btn">
                                                <ion-icon name="play-circle-outline" />
                                            </Link>
                                        </figure>
                                        <div className="movie-detail-content">
                                            <p className="season-badge" >Seasons : {tvShows.number_of_seasons}</p>
                                            <h1 className="h2 detail-title">
                                                {tvShows.name}
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
                                                        tvShows.genres && tvShows.genres.map(genre => (
                                                            <a key={genre.id} href="#">{genre.name},</a>
                                                        ))
                                                    )}
                                                </div>
                                                <div className="date-time">
                                                    <div>
                                                        <ion-icon name="calendar-outline" />
                                                        <time dateTime={2022}>
                                                            {tvShows.first_air_date.slice(0, 4)}
                                                        </time>
                                                    </div>
                                                    <div>
                                                        <ion-icon name="time-outline" />
                                                        <time dateTime="PT115M">{tvShows.episode_run_time} min</time>
                                                    </div>
                                                    <div>
                                                        <ion-icon name="language-outline" />
                                                        <span className='ganre-wrapper'>
                                                            {tvShows.spoken_languages ? (
                                                                tvShows.spoken_languages.map(lang => (
                                                                    <a key={lang.id} href="#">{lang.name}</a>
                                                                ))
                                                            ) : (
                                                                'NAN'
                                                            )}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="storyline">
                                                {tvShows.overview}
                                            </p>
                                            <div className="details-actions tv-details-actions">
                                                <Link className="share">
                                                    <ion-icon name="share-social" />
                                                    <span>Share</span>
                                                </Link>
                                                <div className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
                                                    <div className="title-wrapper streaming" onClick={dropdownToggle}>
                                                        <ion-icon name="cloud-upload-outline" />
                                                        <p className="text">Streaming <br /> Channels</p>
                                                        <ion-icon name="chevron-down-outline" className='down' />
                                                    </div>
                                                    {isDropdownOpen && (
                                                        <div className="dropdown-content">
                                                            {loading ? (
                                                                jji
                                                            ) : (
                                                                tvShows.networks ? (
                                                                    tvShows.networks.map((net) => (
                                                                        <a className="ssss">
                                                                            <img src={`https://image.tmdb.org/t/p/original${net.logo_path}`} alt="" />
                                                                        </a>
                                                                    ))
                                                                ) : (
                                                                    'NAN'
                                                                )
                                                            )}
                                                        </div>
                                                    )}
                                                </div>

                                                <Link className="btn btn-primary">
                                                    <ion-icon name="play" />
                                                    <span>Watch Now</span>
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
                                <div className="wrapper">
                                    <h1 className="h2 detail-title">
                                        Cast
                                    </h1>
                                    {/* <div className="cast-wrapper">
                                        {
                                            cast.map((element, index) => {
                                                return (
                                                    <>
                                                        <div className="casts" key={index}>
                                                            <div>
                                                                <img src={element.profile_path ? `https://image.tmdb.org/t/p/w500/${element.profile_path}` : { no }} className="image--cover" />
                                                            </div>
                                                            <div>
                                                                <h6 style={{ color: 'white' }}>{element.name}</h6>
                                                                <p style={{ color: 'white', fontSize: '10px' }}>{element.original_name}</p>
                                                            </div>
                                                        </div>
                                                    </>
                                                )
                                            })
                                        }
                                    </div> */}
                                </div>
                                {/* //casts ends */}
                            </>

                    }
                </article>
            </main >


        </>
    )
}

export default TVDetail