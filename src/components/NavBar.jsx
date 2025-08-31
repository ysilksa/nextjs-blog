import React from 'react';

const NavBar = () => {
    return (
        <div className="flex flex-row gap-16 p-2"> 
            <h1>DessertVerse</h1>
            <nav className="flex flex-row gap-16 items-center">
                <a href='/home'>Home</a>
                <a href='/posts'>Posts</a>
                <a href='/login'>Login</a>
            </nav>
        </div>
        
    );
}

export default NavBar; 