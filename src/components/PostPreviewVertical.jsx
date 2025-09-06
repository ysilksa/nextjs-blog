import React from 'react';
import { ArrowForward } from '@mui/icons-material';
import { IconButton } from '@mui/material';

const PostPreviewVertical = ({ imageLink, date, title, description }) => {
    return (
        <div className="flex flex-col w-[300px]">
            <img src={imageLink} className="w-[400px] h-[480px] object-cover"/>
            <p>{date}</p>
            <div className="flex justify-between">
                <h2>{title}</h2>
                <IconButton 
                    sx ={{color: '#171717'}}
                ><ArrowForward/></IconButton>
            </div>
            <p>{description}</p>
        </div>
    );
}

export default PostPreviewVertical; 