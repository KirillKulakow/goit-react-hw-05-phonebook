import React, {useState, useEffect} from 'react';
import {CSSTransition} from 'react-transition-group';
import './App.css';
import './AnimationStyles/Error.css';
import './AnimationStyles/Contact.css';
import './AnimationStyles/Filter.css';
import NavBar from './Components/NavBar/NavBar';
import Form from './Components/Form/Form';
import FilterContacts from './Components/FilterContacts/FilterContacts';
import ContactList from './Containers/ContactList/ContactList';
import Contact from './Components/Contact/Contact';
import Error from './Components/Error/Error';

function App() {
  const [contacts, setContacts] = useState([{id: 1, name: 'Rosie Empson', number: '333-65-19'}, {id: 2, name: 'Kira Nelson', number: '652-72-58'}, {id: 3, name: 'Calli Roser', number: '333-65-21'}, {id: 4, name: 'Josh Rembic', number: '373-65-20'}]);
  const [error, setError] = useState(false);
  const [filterQuery, setFilterQuery] = useState('');

  const addToContacts = (obj) => {
    if(contacts.some(el => el.name === obj.name) || contacts.some(el => el.number === obj.number)){
      setError(true);
      return
    };
      setContacts([...contacts, obj])
  };

  const deleteFromContacts = (id) => {
    let newList = contacts.filter(contact => contact.id !== id);
    setContacts(newList);
  };

  const filteredContacts = (query) => {
    return contacts.filter(element => (element.name.toLowerCase()).includes(query.toLowerCase()));
  };

  useEffect(() => {
    if(error){
      const timer = setTimeout(() => {
        setError(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  },[error]);

  return (
      <>
      <NavBar/>
      <Form addToContacts={addToContacts}/>
      <CSSTransition in={contacts.length > 1} timeout={250} classNames='filter_animation' unmountOnExit>
      <FilterContacts setFilterQuery={setFilterQuery} filterQuery={filterQuery}/>
      </CSSTransition>
      {!!contacts && <ContactList>
        {(!!filterQuery ? filteredContacts(filterQuery) : contacts).map((item) => (
          <CSSTransition key={item.id} timeout={250} classNames='contact_animation'>
            <Contact {...item} deleteFromContacts={deleteFromContacts}/>
          </CSSTransition>
        ))}
      </ContactList>}
      <CSSTransition in={error} timeout={250} classNames='error_animation' mountOnEnter unmountOnExit>
        <Error/>
      </CSSTransition>
      </>
  );
}

export default App;
