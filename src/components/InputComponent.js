import React, { useState } from 'react';
import styles from '../css/InputComponent.module.css';
import Checkbox from './Checkbox';
import ProductItem from './ProductItem';

const InputComponent = ({ onAddBarcode, onUndoAdd, product }) => {

    const [barcode, setBarcode] = useState("");
    const [autoAdd, setAutoAdd] = useState(true);
    const [preview, setPreview] = useState(true);

    const update = (event) => {
        setBarcode(event.target.value);
    }

    const submit = (event) => {
        event.preventDefault();
        if (barcode.trim() === "") return;
        onAddBarcode(barcode);
        setBarcode("");
    }

    const undo = event => {
        event.preventDefault();
        onUndoAdd();
    }

    return (
        <div className={styles.container}>
            <form action="" onSubmit={submit}>
                <label htmlFor="barcode">Scan / Type barcode</label>
                <input name="barcode" type="text" value={barcode} onChange={update} />
                <div className={styles.extras}>
                    <Checkbox
                        title="Auto Add"
                        active={autoAdd}
                        toggle={() => setAutoAdd(!autoAdd)}
                    />
                    <Checkbox
                        title="Preview"
                        active={preview}
                        toggle={() => setPreview(!preview)}
                    />
                    <button onClick={undo}>
                        Undo
                    </button>
                    <button onClick={submit}>
                        Add
                    </button>
                </div>
            </form>
            <div className={styles.preview}>
                <h3>Product Preview</h3>
                <ProductItem
                    product={product}
                    show={preview}
                />
            </div>
        </div>
    );
}

export default InputComponent;