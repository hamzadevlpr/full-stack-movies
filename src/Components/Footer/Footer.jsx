import React from 'react'
import logo from '/src/assets/logo.svg'
import { Link } from 'react-router-dom';

function Footer() {
    const navItems = ['Home', 'Movies', 'Web Series', 'TV Shows', 'Pricing'];
    const quicklink = ['Faq', 'Help center', 'Terms of use', 'Privacy'];
    const SocialIcons = ['facebook', 'twitter', 'pinterest', 'linkedin'];

    let year = new Date().getFullYear();
    return (
        <>

            <footer className="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="footer-brand-wrapper">
                            <a href="./index.html" className="logo">
                                <img src={logo} alt="Filmlane logo" />
                            </a>
                            <ul className="footer-list">
                                {navItems.map((navList, index) => (
                                    <li key={index}>
                                        <Link to={navList.toLowerCase()} href="./index.html" className="navbar-link">
                                            {navList}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="divider" />
                        <div className="quicklink-wrapper">
                            <ul className="quicklink-list">
                                {quicklink.map((quicklink, index) => (
                                    <li key={index}>
                                        <Link to={quicklink.toLowerCase()} href="./index.html" className="quicklink-link">
                                            {quicklink}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <ul className="social-list">

                                {SocialIcons.map((icons, index) => (
                                    <div key={index}>
                                        <li>
                                            <a href="#" className="social-link">
                                                <ion-icon name={`logo-${icons}`} />
                                            </a>
                                        </li>
                                    </div>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <p className="copyright">
                            © {year} <a href="https://github.com/hamzadvlpr1" target='_blank'> @ hamzadvlpr1</a>. All Rights Reserved
                        </p>
                        <img
                            src="src/assets/footer-bottom-img.png"
                            alt="Online banking companies logo"
                            className="footer-bottom-img"
                        />
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer