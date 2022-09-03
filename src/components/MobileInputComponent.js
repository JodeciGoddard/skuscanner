import React, { useState } from 'react';
import styles from '../css/MobileInputComponent.module.css';
import { AiFillCamera } from 'react-icons/ai';
import BarcodeScannerComponent from '@steima/react-qr-barcode-scanner';

const MobileInputComponent = ({ onAddBarcode, onUndoAdd }) => {

    const [barcode, setBarcode] = useState("");
    const [scanner, setScanner] = useState(false);
    const [error, setError] = useState('...');

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

    const toggleScanner = () => {
        setScanner(!scanner);
        setError("...");
    }

    const scannerUpdate = (err, result) => {
        if (result) {
            if (result.text.trim() !== "") onAddBarcode(result.text);
            toggleScanner();
        } else {

        }

        if (err) {
            // setError(err.name)
            setError("..scanning");
        }
    }

    return (
        <div className={styles.container}>
            <form action="" onSubmit={submit}>
                <label htmlFor="barcode">Scan / Type barcode</label>
                <input name="barcode" type="text" value={barcode} onChange={update} />
                {
                    scanner && <BarcodeScannerComponent
                        onUpdate={scannerUpdate}
                        onError={err => setError(err.name)}
                        stopStream={!scanner}

                    />
                }
                <p>{error}</p>
                <div className={styles.extras}>
                    <button onClick={undo}>
                        Undo
                    </button>
                    <button onClick={submit}>
                        Add
                    </button>
                    <AiFillCamera onClick={toggleScanner} />
                </div>
            </form>
        </div>
    );
}

export default MobileInputComponent;