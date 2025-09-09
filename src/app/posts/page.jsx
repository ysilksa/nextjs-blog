"use client"
import React, { useState } from 'react';
import NavBar from '@/components/NavBar';
import PostPreviewVertical from '@/components/PostPreviewVertical';
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const PostsPage = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const filters = ["popular", "newest", "oldest"];

    return (
        <div>
            <NavBar header={true}/>

            {/* button for adding posts */}
            <IconButton
                component="a"
                href="/posts/create"
                sx = {{
                    position: 'fixed', 
                    bottom: 50, 
                    right: 32, 
                    width: 64, 
                    height: 64, 
                    zIndex: 1000,
                    color: '#FDFDFD',
                    backgroundColor: '#828181',
                    '&:hover': {
                        color: '#FDFDFD',
                        backgroundColor: '#BFBFB0'
                    }
                }}    
            >
                <AddIcon/>
            </IconButton>

            {/* header and filter */}
            <section className="flex flex-col items-center gap-8 p-16">
                <h1>One good dessert is all you need.</h1>
                <div className="relative flex flex-row gap-48">
                    <div
                        className={`absolute -top-1 left-0 h-[130%] w-[25%] bg-[#BFBFB0] rounded-[40px] transition-all duration-300 z=0`}
                        style={{
                        left: `${activeIndex * 274 - 36}px` 
                         }}
                    />
                    {filters.map((filter, index) => (
                        <button
                            key={filter}
                            onClick ={() => setActiveIndex(index)}
                            className="font-(family-name:--font-inter) text-[24px] hover:cursor-pointer z-1"
                        >
                            {filter.charAt(0).toUpperCase() + filter.slice(1)}
                        </button>
                    ))}
                </div>
            </section>

            {/* posts on page, will use api later */}
            <section className="flex flex-wrap flex-row m-16 gap-40 justify-center">
                    <PostPreviewVertical
                        imageLink='/pages/ChristineTanUnsplash.jpg'
                        date="2025 Aug 24"
                        title="New Eclairs"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...."
                    />
                    <PostPreviewVertical
                        imageLink='/pages/ChristineTanUnsplash.jpg'
                        date="2025 Aug 24"
                        title="New Eclairs"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...."
                    />
                    <PostPreviewVertical
                        imageLink='/pages/ChristineTanUnsplash.jpg'
                        date="2025 Aug 24"
                        title="New Eclairs"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...."
                    />
                    <PostPreviewVertical
                        imageLink='/pages/ChristineTanUnsplash.jpg'
                        date="2025 Aug 24"
                        title="New Eclairs"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...."
                    />
            </section>

            <section className="flex flex-wrap flex-row m-16 gap-40 justify-center">
                    <PostPreviewVertical
                        imageLink='/pages/ChristineTanUnsplash.jpg'
                        date="2025 Aug 24"
                        title="New Eclairs"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...."
                    />
                    <PostPreviewVertical
                        imageLink='/pages/ChristineTanUnsplash.jpg'
                        date="2025 Aug 24"
                        title="New Eclairs"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...."
                    />
                    <PostPreviewVertical
                        imageLink='/pages/ChristineTanUnsplash.jpg'
                        date="2025 Aug 24"
                        title="New Eclairs"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...."
                    />
                    <PostPreviewVertical
                        imageLink='/pages/ChristineTanUnsplash.jpg'
                        date="2025 Aug 24"
                        title="New Eclairs"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...."
                    />
            </section>
            
        </div>   
    );
}


export default PostsPage; 