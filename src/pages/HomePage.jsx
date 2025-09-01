import React from 'react';
import NavBar from '@/components/NavBar';

const HomePage = () => {
    return (
        <div>
            <div className="bg-[url('/pages/StefanKUnsplash.jpg')] bg-cover bg-center w-screen h-[70vh]">      
                <NavBar darkMode={true}/>     
            </div>
        </div>
        

    );
}

export default HomePage; 