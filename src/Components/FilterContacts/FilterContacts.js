import React from 'react';
import styles from './FilterContacts.module.css';

const FilterContacts = ({filterQuery, setFilterQuery}) => {

    const queryChange = (e) => {
        setFilterQuery(e.target.value);
    };

    return (
        <div className={styles.container}>
            <label htmlFor='filter' className={styles.label}>Find contacts by name</label>
            <input id='filter' type='text' className={styles.input} value={filterQuery} onChange={queryChange}/>
        </div>
    );
};

export default FilterContacts;