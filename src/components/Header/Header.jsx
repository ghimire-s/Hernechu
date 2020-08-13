import React from 'react'
import NavBar from './NavBar/NavBar';
import Logo from './Logo/Logo';
import './Header.css'

export default function Header() {
    return (
        <div className="headers">
            <Logo />
            <NavBar />
        </div>
    )
}
