import React from 'react';
import styles from './Contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Contact = ({id, name, number, deleteFromContacts}) => {

    const deleteContact = () => {
        deleteFromContacts(id);
    };

    return (
        <li className={styles.contact}>
            <span className={styles.name}>{name}</span>
            <span className={styles.number}>{number}</span>
            <button className={styles.delete} onClick={deleteContact}><FontAwesomeIcon icon={faTimes}/></button>
        </li>
    );
};

export default Contact;