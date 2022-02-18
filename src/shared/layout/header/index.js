import React from 'react';
import './style.scss';
import logo from 'assets/logo.svg';
import profileImg from 'assets/sample_profile.jpg';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <header>
                <div className='brand'>
                    <img src={logo} alt="name" />
                    <h1>Better Timetable</h1>
                </div>
                <div className='profile'>
                    <Link to="/auth">
                        <img src={profileImg} alt="name" />
                    </Link>
                </div>
            </header>
        </>
    )
}