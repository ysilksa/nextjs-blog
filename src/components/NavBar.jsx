import React from 'react';
import { IconButton, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const NavBar = ({ header }) => {
    return (
        <div className={`flex flex-row justify-between p-8 ${header ? 'bg-[#BFBFB0]' : 'bg-transparent' }`}>
            <div className={`flex flex-row gap-16 p-2 text-white`}> 
                <h1>DessertVerse</h1>
                <nav className="flex flex-row gap-16 items-center font-(family-name:--font-inria-sans)">
                    <a href='/home'>Home</a>
                    <a href='/posts'>Posts</a>
                    <a href='/login'>Login</a>
                </nav>
            </div>

            {/* Search from material UI  */}
            <div>
                <TextField 
                    label="Search"
                    variant="outlined"
                    slotProps={{
                        input: {
                            endAdornment:<IconButton><SearchIcon/></IconButton>,
                        },
                    }}
                    sx={{
                        backgroundColor: '#FFFEEA', 
                        borderRadius: "40px",
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'transparent',
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'transparent',
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'transparent',
                        },
                        '.MuiInputBase-input': {
                            color: "#171717",
                            fontFamily: 'var(--font-inter)'
                        },
                    }}
                />
            </div>
        </div>
        
        
    );
}

export default NavBar; 