import React, { useRef, useEffect, useState } from 'react';
import styles from '../css/ScannedItems.module.css';

const ScannedItems = ({ list, onRemoveItem }) => {

    const checkAll = useRef();
    const [search, setSearch] = useState("");
    const [filteredList, setFilteredList] = useState(list);

    const alterAllCheckboxes = (value) => {
        for (let entry of list) {
            let element = document.getElementById(entry.id);
            element.checked = value;
        }
    }

    const handleCheck = () => {
        if (checkAll.current.checked) {
            alterAllCheckboxes(true)
        } else {
            alterAllCheckboxes(false);
        }
    }

    useEffect(() => {
        const ref = checkAll.current;


        ref.addEventListener('change', handleCheck)

        return () => {
            ref.removeEventListener('change', handleCheck)
        }
    }, [handleCheck]);

    useEffect(() => {
        filterList(list);
    }, [search, list]);

    const removeItem = id => {
        onRemoveItem(id);
    }

    const removeAll = () => {
        for (let entry of list) {
            let element = document.getElementById(entry.id);
            if (element.checked) {
                removeItem(entry.id);
                console.log('removed: ', entry.id);
            }
        }
    }

    const onSearchChange = (e) => {
        setSearch(e.target.value);
    }

    const filterList = list => {
        let myList = list.filter(p => {
            if (p.sku.toLowerCase().includes(search.toLowerCase())) return true;
            if (p.name.toLowerCase().includes(search.toLowerCase())) return true;
        });

        setFilteredList(myList);
    }



    return (
        <div className={styles.container}>
            <h3>Scanned Items</h3>
            <input type="search" placeholder="search" onChange={onSearchChange} />
            <p className={styles.minilabel}>Showing {list ? list.length : 0} items</p>
            <div className={styles.listContainer}>
                <div className={styles.tableHeader}>
                    <input ref={checkAll} type="checkbox" className={styles.checkbox} />
                    <p className={styles.divider}>|</p>
                    <p className={styles.label}>SKU</p>
                    <p className={styles.divider}>|</p>
                    <p className={styles.label}>Name</p>
                    <p onClick={removeAll} className={styles.removeIcon}>-</p>
                </div>
                {
                    list && filteredList.map((item, index) => {
                        return (
                            <div key={index} className={styles.tableItem}>
                                <input id={`${item.id}`} type="checkbox" className={styles.checkbox} />
                                <p className={styles.divider}>|</p>
                                <p className={styles.label}>{item.sku}</p>
                                <p className={styles.divider}>|</p>
                                <p className={styles.label}>{item.name}</p>
                                <p onClick={() => removeItem(item.id)} className={styles.removeIcon}>-</p>
                            </div>
                        )
                    })
                }
            </div>
            <button>
                Save
            </button>
        </div>
    );
}

export default ScannedItems;