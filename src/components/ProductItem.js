import React from 'react';
import styles from '../css/ProductItem.module.css';

const ProductItem = ({ product, show }) => {

    if (!product || !show) return <></>;

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src={product.image} alt="" />
            </div>
            <div className={styles.desc}>
                <p><span>Sku:</span> {product.sku}</p>
                <p><span>Name:</span> {product.name}</p>
                <p><span>Desc:</span> {product.desc}</p>
            </div>
        </div>
    );
}

export default ProductItem;