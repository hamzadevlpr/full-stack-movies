import React from 'react'
import heroBgImage from '/src/assets/hero-bg.jpg'

function Main() {
    const heroStyles = {
        background: `url(${heroBgImage}) no-repeat`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '750px',
        height: '100vh',
        maxHeight: '1000px',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        // paddingBlock: sectionPadding,
    };
    return (
        <>

            {/*  - #HERO */}
            <section className="hero" style={heroStyles}>
                <div className="container">
                    <div className="hero-content">
                        <p className="hero-subtitle">Filmlane</p>
                        <h1 className="h1 hero-title">
                            Unlimited <strong>Movie</strong>, TVs Shows, & More.
                        </h1>
                        <div className="meta-wrapper">
                            <div className="badge-wrapper">
                                <div className="badge badge-fill">PG 18</div>
                                <div className="badge badge-outline">HD</div>
                            </div>
                            <div className="ganre-wrapper">
                                <a href="#">Romance,</a>

                                <a href="#">Drama</a>
                            </div>
                            <div className="date-time">
                                <div>
                                    <ion-icon name="calendar-outline"></ion-icon>

                                    <time datetime="2022">2022</time>
                                </div>
                                <div>
                                    <ion-icon name="time-outline" />
                                    <time dateTime="PT128M">128 min</time>
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-primary">
                            <ion-icon name="play" />
                            <span>Watch now</span>
                        </button>
                    </div>
                </div>
            </section>




        </>
    )
}

export default Main