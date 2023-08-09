import React from 'react'
import { NavLink } from 'react-router-dom';
import cta from '/src/assets/cta-bg.jpg';

function CTA() {
    const backgroundStyle = {
        backgroundImage: `url(${cta})`
    };
    return (
        <>
            {/* - #CTA */}
            <section className="cta" style={backgroundStyle}>

                <div className="container">
                    <div className="title-wrapper">
                        <h2 className="cta-title">Trial start first 30 days.</h2>
                        <p className="cta-text">
                            Enter your email to create or restart your membership.
                        </p>
                    </div>
                    <form action="" className="cta-form">
                        <input
                            type="email"
                            name="email"
                            required=""
                            placeholder="Enter your email"
                            className="email-field"
                        />
                        <NavLink type="submit" className="cta-form-btn">
                            Get started
                        </NavLink>
                    </form>
                </div>
            </section>
        </>
    )
}

export default CTA