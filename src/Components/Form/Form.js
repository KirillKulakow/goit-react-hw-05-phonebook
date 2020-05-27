import React, {useState} from 'react';
import styles from './Form.module.css';
import { v4 as uuidv4 } from 'uuid';

const Form = ({addToContacts}) => {
    const [firstName, setFirstName] = useState('');
    const [numberPhone, setNumberPhone] = useState('');

    const nameChange = (e) => {
        setFirstName(e.target.value)
    };
    const numberChange = (e) => {
        setNumberPhone(e.target.value)
    };
    const addContacts = (e) => {
        e.preventDefault();
        addToContacts({id: uuidv4(), name: firstName, number: numberPhone})
        setFirstName('');
        setNumberPhone('');
    };

    return (
        <div className={styles.container}>
            <form>
                <label className={styles.label}>Name
                    <input type='text' className={styles.input} value={firstName} onChange={nameChange}/>
                </label>
                <label className={styles.label}>Number
                    <input type='tel' className={styles.input} value={numberPhone} onChange={numberChange}/>
                </label>
                <button className={styles.button} onClick={addContacts} disabled={!firstName || !numberPhone}>Add contact</button>
            </form>
        </div>
    );
};

export default Form;