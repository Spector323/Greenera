import React from 'react';
import '../styles/contact-page.css';

export default function ContactPage() {
    return (
        <div className="contact-page">
            <h1>Contact</h1>
            <div className="contact-cn">
                <div className="info-block phone">
                    <h2>Phone</h2>
                    <p>+7 (499) 350-66-04</p>
                </div>

                <div className="info-block socials">
                    <h2>Socials</h2>
                    <div className="social-icons">
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src="./assets/icons/ic-instagram.svg" alt="" />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <img src="./assets/icons/ic-whatsapp.svg" alt="" />
                        </a>
                    </div>
                </div>

                <div className="info-block address">
                    <h2>Address</h2>
                    <p>Dubininskaya Ulitsa, 96, Moscow, Russia, 115093</p>
                </div>

                <div className="info-block working-hours">
                    <h2>Working Hours</h2>
                    <p>24 hours a day</p>
                </div>
            </div>
            <div className="map-container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2907.974727830701!2d44.7750056!3d43.21001940000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40506f6b5960e3fb%3A0x7a11bb2416c0ebb4!2sIThub%20college!5e0!3m2!1sru!2sru!4v1750235023426!5m2!1sru!2sru"
                    width="100%"
                    height="500px"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps Embed"
                ></iframe>
            </div>
        </div>
    );
};

