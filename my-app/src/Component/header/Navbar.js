import React from 'react'
import './navbar.css'

function Navbar() {
    return (
        <header className='header'>
            <a href="" className='logo'>Ashish<span>Choudhary</span></a>  
<i className='bx bx-menu'id='menu-icon' >XX</i>

            <nav className='navbar'>
                <a href="#" className='action'>home</a>
                <a href="#" >Education</a>
                <a href="#" >Services</a>
                <a href="#" >Projact</a>
                <a href="#" >Contact</a>
            </nav> </header>
    )
}

export default Navbar