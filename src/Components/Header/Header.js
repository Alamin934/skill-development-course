import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="bg-secondary p-4 text-white text-center">
            <div className="container">
                <h2>Skill Development Course</h2>
                <h6 className="my-2">Learn and Develope your Skill from your favourite Instructor</h6>
                <h2>Total Budget: <span className="fw-bold">1200000M</span></h2>
            </div>
        </div>
    );
};

export default Header;