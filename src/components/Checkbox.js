import React, { useState } from 'react';

import styles from '../css/Checkbox.module.css';

const Checkbox = ({ title, active, toggle }) => {


    return (
        <div className={styles.container} onClick={toggle}>
            <div className={styles.outter}>
                {active && <div className={styles.pointer}></div>}
            </div>
            <p>{title && title}</p>
        </div>
    );
}

export default Checkbox;