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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.430381086286!2d37.64274331575195!3d55.76048888037899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54af8c9e8c559%3A0x7c2bd098ec2c560f!2z0JzQvtGB0LrQuNCw0YHQutC40Y8gNjkswqwg0KHQtdC70YzRgtGB0LrQuNCwINCy0LDRhtC10YLQstCw0Y8gMTU1MDkz!5e0!3m2!1sen!2sru!4v1694658000000!5m2!1sen!2sru"
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

