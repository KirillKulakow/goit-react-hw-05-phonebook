import React, {useState} from 'react';
import styles from './Form.module.css';
import { v4 as uuidv4 } from 'uuid';

const Form = ({addToContacts}) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const nameChange = (e) => {
        setName(e.target.value)
    };
    const numberChange = (e) => {
        setNumber(e.target.value)
    };
    const add = (e) => {
        e.preventDefault();
        addToContacts({id: uuidv4(), name: name, number: number})
        setName('');
        setNumber('');
    };

    return (
        <div className={styles.container}>
            <form>
                <label htmlFor='name' className={styles.label}>Name</label>
                <input id='name' type='text' className={styles.input} value={name} onChange={nameChange}/>
                <label htmlFor='number' className={styles.label}>Number</label>
                <input id='number' type='tel' className={styles.input} value={number} onChange={numberChange}/>
                <button className={styles.button} onClick={add} disabled={!name || !number}>Add contact</button>
            </form>
        </div>
    );
};

export default Form;