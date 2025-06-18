import "../styles/category-item.css";
import React, { useState, useEffect } from 'react';


export default function CategoriesItem() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('http://localhost:3333/categories/all');
                const data = await response.json();
                setCategories(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    return (
        <div className="category-item">
            <div className="category-header">
                <h1>Categories</h1>
                <a href="/categories">
                    <button className="">All categories</button>
                </a>
            </div>

            <div className="category-list">
                {categories.slice(0, 4).map((category) => (
                    <a
                        key={category.id}
                        href={`/category/${category.id}`}
                        className="category-item"
                    >
                        <img src={`http://localhost:3333${category.image}`} alt="" className="img-ct" />
                        <p className="title-ct">{category.title}</p>
                    </a>
                ))}
            </div>
        </div>
    );
}