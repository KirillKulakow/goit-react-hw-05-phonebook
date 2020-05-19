import React from 'react';
import styles from './Error.module.css';

const Error = () => {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Error</h3>
            <p className={styles.info}>This contact is already add.</p>
        </div>
    );
};

export default Error;