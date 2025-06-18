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
                    src="https://yandex.ru/maps/-/CHW97C6k"
                    width="100%"
                    height="450px"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps Embed"
                ></iframe>
            </div>
        </div>
    );
};

