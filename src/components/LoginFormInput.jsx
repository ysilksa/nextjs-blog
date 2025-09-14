import React from 'react';
import { TextField } from '@mui/material';

const LoginFormInput = ({ label, state, value }) => {
    return (
        <div>
            <h2>{label}</h2>
            <TextField
                sx={{ 
                    width: '100%',
                    backgroundColor: '#E5E5D3',
                    '.MuiInputBase-input': {
                            color: "#171717",
                            fontFamily: 'var(--font-inter)'
                        },
                }}
                value={value}
                onChange={state}
            />
            
        </div>
        
    );
}

export default LoginFormInput;