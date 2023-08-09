import React from 'react'
import TVShows from './TVShows'
import Upcomming from './Upcomming'
import Services from './Services'
import CTA from './CTA'
import TopRated from './TopRated'
import Hero from './Hero'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ClipLoader } from 'react-spinners';


function Main() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const goTopBtn = document.querySelector("[data-go-top]");

        const handleScroll = () => {
            if (window.scrollY >= 500) {
                goTopBtn.classList.add("active");
            } else {
                goTopBtn.classList.remove("active");
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        // Simulating loading state using setInterval
        const interval = setInterval(() => {
            setLoading(false);
        }, 1000);

        // Clean up the interval when the component unmounts
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <>
            {/* <Navbar /> */}
            {loading ? (
                <div className="clipLoader">
                    <ClipLoader color='#e9e148' loading={loading} size={80} />
                </div>
            ) : (
                <main>
                    <article>

                        <Hero />

                        <Upcomming />

                        <Services />

                        <TopRated />

                        <TVShows />


                        <CTA />

                    </article>
                </main>
            )}
            <Footer />


            <a href="#top" className="go-top" data-go-top>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style={{ padding: '15px' }}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
                </svg>
            </a>


        </>
    )
}

export default Main;
