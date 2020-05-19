import React from 'react';
import styles from './ContactList.module.css';
import {TransitionGroup} from 'react-transition-group'

const ContactList = ({children}) => {
    return (
            <TransitionGroup component={'ul'} className={styles.list}>
                {children}
            </TransitionGroup>
    );
};

export default ContactList;