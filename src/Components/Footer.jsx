import React from 'react'
import './Footer.css';

function Footer() {

    var date = new Date();
    var year = date.getFullYear();
    return (
        <footer className='footer col-12'>
            <p>Made by Sebin Francis</p>
            <p>&copy; {year}</p>
        </footer>
    )
}

export default Footer
