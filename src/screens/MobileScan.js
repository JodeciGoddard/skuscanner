import React, { useState } from 'react';
import MobileInputComponent from '../components/MobileInputComponent';
import MobileScannedItems from '../components/MobileScannedItems';
import styles from '../css/MobileScan.module.css';
import coke from '../images/product4.png';
import { IoIosSave } from 'react-icons/io';

const MobileScan = () => {
    const [productList, setProductList] = useState([]);
    const [lastAdded, setLastAdded] = useState([]);

    const handleAdd = (barcode) => {
        let prod = getProduct(barcode);
        let itemList = [...productList, prod];
        let addedHistory = [...lastAdded, prod.id];
        setProductList(itemList);
        setLastAdded(addedHistory);
        console.log('Barcode added');
    }

    const handleUndoAdd = () => {
        if (lastAdded.length <= 0) return;
        let addedHistory = [...lastAdded];
        let lastUsedId = addedHistory.pop();
        let changedList = productList.filter(p => p.id !== lastUsedId);

        setLastAdded(addedHistory);
        setProductList(changedList);
        console.log('Barcode undone');
    }

    const getProduct = (barcode) => {
        let randomId = Math.floor(Math.random() * 100000)
        let item = {
            id: randomId,
            image: coke,
            name: 'Coca-Cola',
            desc: 'Coca-Cola, or Coke, is a carbonated soft drink manufactured by the Coca-Cola Company. Originally marketed as a temperance drink and intended as a patent.',
            sku: barcode,
        }

        return item;
    }

    const removeItem = (id) => {
        setProductList(prev => {
            return prev.filter(p => p.id !== id)
        });
    }

    return (
        <div className={styles.container} >
            <MobileInputComponent
                onAddBarcode={handleAdd}
                onUndoAdd={handleUndoAdd}
            />
            <MobileScannedItems
                list={productList}
                onRemoveItem={removeItem}
            />
            <div className={styles.floatingButton}>
                <IoIosSave />
            </div>
        </div>
    );
}

export default MobileScan;