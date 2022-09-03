import React from 'react';
import styles from '../css/MobileScannedItems.module.css';

const MobileScannedItems = ({ list, onRemoveItem }) => {

    const removeItem = id => {
        onRemoveItem(id);
    }

    return (
        <div className={styles.container}>
            <h3>Scanned Items</h3>
            <p className={styles.minilabel}>Showing {list ? list.length : 0} items</p>
            <div className={styles.listContainer}>
                {
                    list && list.map((item, index) => {
                        return (
                            <div key={index} className={styles.listItem}>
                                <div className={styles.imageContainer}>
                                    <img src={item.image} alt="prod image" />
                                </div>
                                <div className={styles.description}>
                                    <p><span>Sku:</span> {item.sku}</p>
                                    <p><span>Name:</span> {item.name}</p>
                                    <p><span>Desc:</span> {item.desc}</p>
                                </div>
                                <p onClick={() => removeItem(item.id)} className={styles.removeIcon}>-</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default MobileScannedItems;