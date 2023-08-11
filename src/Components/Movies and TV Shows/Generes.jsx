import axios from 'axios';
import React, { useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <ion-icon name="time-outline" />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <ion-icon name="chevron-forward-outline" />
        </div>
    );
}
function Generes() {
    // Slick settings
    var settings = {
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
    }
    const [genere, setGenere] = useState([]);
    const apiKey = "ca258fa0adb338022b74848eb9dade0a"; // Replace with your TMDb API key
    const genreListUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`;

    axios.get(genreListUrl)
        .then(response => {
            const genres = response.data.genres;
            setGenere(genres)
        })
        .catch(error => {
            console.error("Error fetching genre data:", error);
        });


    return (
        <>

            <div>
                <h1 className="cat">Categories</h1>
                <Slider {...settings}>
                    {/* Add the "All" button as the first element */}
                    <div key="all">
                        <Link className="filter-btn genere-box">
                            <h4>All</h4>
                        </Link>
                    </div>
                    {
                        genere.map((element, index) => {
                            return (
                                <div key={index} >
                                    <Link className="filter-btn genere-box">
                                        <h4>{element.name}</h4>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </Slider>

            </div >
        </>
    )
}

export default Generes