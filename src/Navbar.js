import React, { Fragment } from 'react'; 

function Navbar(props) {
    return (
        <Fragment>
           <nav className="navbar"><i className={props.icon}></i> {props.title}</nav>
        </Fragment>
    )
}

Navbar.defaultProps = {
    title: 'Words of Wisdom',
    icon: 'fa-solid fa-'
}

export default Navbar;