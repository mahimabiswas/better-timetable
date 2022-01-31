import React from 'react';
import './style.scss';
import logo from '../../assets/logo.svg';
import profileImg from '../../assets/sample_profile.jpg';

export default function Header() {
    return (
        <>
            <header>
                <div className='brand'>
                    <img src={logo} alt="name" />
                    <h1>Better Timetable</h1>
                </div>
                <div className='profile'>
                    <img src={profileImg} alt="name" />
                </div>
            </header>
        </>
    )
}