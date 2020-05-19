import React, {useState, useEffect} from 'react';
import styles from './FilterArea.module.css';

const FilterArea = ({filteredContacts}) => {
    const [query, setQuery] = useState('');

    const queryChange = (e) => {
        setQuery(e.target.value);
    };

    useEffect(() => {
        filteredContacts(query);
    },[query])

    return (
        <div className={styles.container}>
            <label htmlFor='filter' className={styles.label}>Find contacts by name</label>
            <input id='filter' type='text' className={styles.input} value={query} onChange={queryChange}/>
        </div>
    );
};

export default FilterArea;