import React, { useState, useEffect } from 'react';
import logo from '/src/assets/logo.svg';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {

    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isHeaderActive, setIsHeaderActive] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 10) {
                setIsHeaderActive(true);
            } else {
                setIsHeaderActive(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={isHeaderActive ? "active header" : "header"} data-header>
            <div className="container">
                {isMenuOpen && <div className="overlay" data-overlay></div>}

                <Link className="logo">
                    <img src={logo} alt="Filmlane logo" />
                </Link>

                <div className="header-actions">
                    <NavLink className="search-btn">
                        <ion-icon name="search-outline"></ion-icon>
                    </NavLink>
                    <NavLink to={'/signup'} className="btn btn-primary">Sign in</NavLink>
                </div>

                <NavLink className="menu-open-btn" onClick={handleMenuToggle} data-menu-open-btn>
                    <ion-icon name="reorder-two"></ion-icon>
                </NavLink>

                <nav className={`navbar ${isMenuOpen ? 'active' : ''}`} data-navbar>
                    <div className="navbar-top">
                        <a className="logo">
                            <img src={logo} alt="Filmlane logo" />
                        </a>
                        <NavLink className="menu-close-btn" onClick={handleMenuToggle} data-menu-close-btn>
                            <ion-icon name="close-outline"></ion-icon>
                        </NavLink>
                    </div>
                    <ul className="navbar-list">
                        <li>
                            <Link to={'/homepage'} className="navbar-link">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to={'/movies'} className="navbar-link">
                                Movies
                            </Link>
                        </li>
                        <li>
                            <Link to={'/tvShows'} className="navbar-link">
                                TV Shows
                            </Link>
                        </li>
                        <li>
                            <Link to={'/webSeries'} className="navbar-link">
                                Web Series
                            </Link>
                        </li>
                    </ul>
                    <ul className="navbar-social-list">
                        <li>
                            <a href="#" className="navbar-social-link">
                                <ion-icon name="logo-twitter"></ion-icon>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="navbar-social-link">
                                <ion-icon name="logo-facebook"></ion-icon>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="navbar-social-link">
                                <ion-icon name="logo-pinterest"></ion-icon>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="navbar-social-link">
                                <ion-icon name="logo-instagram"></ion-icon>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="navbar-social-link">
                                <ion-icon name="logo-youtube"></ion-icon>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
