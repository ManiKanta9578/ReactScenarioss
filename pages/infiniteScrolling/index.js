import React, { useEffect, useState } from "react";
import styles from "../../styles/infiniteScrolling.module.css";

const InfiniteScrolling = () => {
    const [products, setProducts] = useState([]);
    const [pageIndex, setPageIndex] = useState(0);
    const [loading, setLoading] = useState(false);

    const Thershoild = 20;

    const fetchProducts = async () => {
        setLoading(true);
        try {
            const response = await fetch(
                `https://dummyjson.com/products?limit=10&skip=${pageIndex}&select=title,price,thumbnail`
            );
            const data = await response.json();
            setProducts(prev => [...prev, ...data.products]);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
        setLoading(false);
    };

    function handleScroll(event) {
        if (loading) return;

        const scrollTop = event.target.scrollTop;
        const clientHeight = event.target.clientHeight;
        const scrollHeight = event.target.scrollHeight;

        const remainingScroll = scrollHeight - (scrollTop + clientHeight);

        if (remainingScroll < Thershoild) {
            setLoading(true);
            setTimeout(() => {
                setPageIndex(prev => prev + 10);
            }, 1000);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [pageIndex]);


    return (
        <div>
            <h3>Infinite Scrolling</h3>
            <div className={styles.container} onScroll={handleScroll}>
                {products.map(prod => (
                    <CardComponent
                        key={prod.id}
                        thumbnail={prod.thumbnail}
                        title={prod.title}
                        price={prod.price}
                    />
                ))}
            </div>
            {loading && <p>Loading more products...</p>}
        </div>
    );
};

export default InfiniteScrolling;

const CardComponent = ({ title, price, thumbnail }) => {
    return (
        <div className={styles.product}>
            <img src={thumbnail} alt={title} className={styles.image} />
            <span className={styles.title}>{title}</span>
            <span className={styles.price}>${price}</span>
        </div>
    );
};