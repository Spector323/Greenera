import "../styles/order-page.css";
import React, { useState } from 'react';

export default function OrderPage() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3333/sale/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, phone, email })
            });
            
            if (!response.ok) {
                throw new Error('Error submitting form');
            }
            console.log(response);
            
            setName('');
            setPhone('');
            setEmail('');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="order-page">
            <h1>5% off on the first order</h1>
            <div className="page-bl">
                    <img src="./assets/fotes/head-2.png" alt="" />
                    <form onSubmit={handleSubmit} className="bl-text">
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <input
                            type="tel"
                            placeholder="Phone number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit">Get a discount</button>
                    </form>
            </div>
        </div>
    );
}