import React, {useState, useEffect}from 'react';
import './NavBar.css';
import '../../AnimationStyles/Navbar.css';
import {CSSTransition} from 'react-transition-group';

const NavBar = () => {
    const [inProp, setInProp] = useState(false);

    useEffect(() => {
        setInProp(true);
    },[])

    return (
        <nav className='nav'>
            <CSSTransition in={inProp} timeout={500} classNames='logo-animate' mountOnEnter>
                <a href='/' className='logo'>Phonebook</a>
            </CSSTransition>
        </nav>
    );
};

export default NavBar;