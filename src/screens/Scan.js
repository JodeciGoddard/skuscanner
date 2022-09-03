import React, { useState } from 'react';
import styles from '../css/Scan.module.css';
import InputComponent from '../components/InputComponent';
import coke from '../images/product4.png';
import ScannedItems from '../components/ScannedItems';

const Scan = () => {

    const [product, setProduct] = useState(null);
    const [productList, setProductList] = useState([]);
    const [lastAdded, setLastAdded] = useState([]);

    const handleAdd = (barcode) => {
        let prod = getProduct(barcode);
        let itemList = [...productList, prod];
        let addedHistory = [...lastAdded, prod.id];
        setProduct(prod);
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
        <div className={styles.container}>
            <InputComponent
                onAddBarcode={handleAdd}
                onUndoAdd={handleUndoAdd}
                product={product}
            />
            <ScannedItems
                list={productList}
                onRemoveItem={removeItem}
            />
        </div>
    );
}

export default Scan;