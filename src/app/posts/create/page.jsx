"use client"
import { React, useState } from 'react';
import { useRouter } from 'next/navigation';
import NavBar from '@/components/NavBar';
import { Button, IconButton, TextField } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Uploady from '@rpldy/uploady';
import UploadButton from "@/rpldy/upload-button";

const CreatePostPage = () => {
    // use state for the post title and description 
    const [postTitle, setPostTitle] = useState("");
    const [postContent, setPostContent] = useState("");

    const handleSetPostTitle = (event) => {
        setPostTitle(event.target.value);
    }

    const handleSetPostContent = (event) => {
        setPostContent(event.target.value);
    }

    // handle file uploading 
    //
    // TO DO !! 
    //

    // handle button submission 
    // TO DO !!
    //
    const router = useRouter();
    const handleSubmit = (e) => {
        // prevent default
        e.preventDefault();

        // check that post title and post content are filled 
        if (!postTitle || !postContent) {
            alert("One or more fields is not filled!")
            return
        }

        //
        // TO DO: handle image submission 
        //

        //
        // TO DO: send info to backend 
        //

        // temporary console log
        console.log("The form is submitted.");

        // reset title and post content
        setPostTitle("");
        setPostContent("");

        // reload to posts page
        // 
        // TO DO: create loading animation 
        // 
        router.push("/posts");
    }

    return (
        <div>
            <NavBar header={true}/>

            <div className="flex flex-col h-full max-h-[200vh] mx-auto gap-[16px] items-center">
                <div className="w-full max-w-[960px] p-[16px] flex flex-col gap-4 text-left">
                    <h1>Create post</h1>

                    {/* Uploading media section  */}
                    <section className="flex flex-col gap-[16px]">
                        <h2>Upload media</h2>
                        <p>Please upload one image.</p>
                        {/* Upload image input  */}
                        <div className="h-full max-h-[280px] w-full max-w-[960px] p-[104px] gap-[8px] flex flex-col items-center justify-center border border-[#BFBFB0] rounded-[8px]">
                            <IconButton><CloudUploadIcon/></IconButton>
                            <p className="text-[1.5rem]">Click to upload</p>
                            <p className="text-[1rem]">All image formats accepted</p>
                        </div>
                    </section>

                    {/* Post details section  */}
                    <section className="flex flex-col gap-[16px] h-full">
                        <h2>Post details</h2>
                        <p>Add some info on the place you visited!</p>

                        {/* Form for the title and description  */}
                        <form className="flex flex-col gap-[16px]" onSubmit={handleSubmit}>
                            <div className="flex flex-col p-[32px] gap-[16px] h-[816px] w-full max-w-[960px] border border-[#BFBFB0] rounded-[8px]">
                                {/* TextField for post name  */}
                                <div>
                                    <p className="text-[1.5rem]">Title</p>
                                    <p className="text-[1rem]">Max 250 char.</p>
                                    <TextField
                                        
                                        sx = {{
                                            variant:"outlined",
                                            width: "100%",
                                            "& .MuiOutlinedInput-input": {
                                                backgroundColor: "#FFFEEA",
                                            }

                                        }}
                                        value={postTitle}
                                        onChange={handleSetPostTitle}
                                    />
                                </div>
                                

                                {/* TextField for post description/content */}
                                <div>
                                    <p className="text-[1.5rem]">Post Content</p>
                                    <p className="text-[1rem]">Max 20,000 char.</p>
                                    <TextField
                                        multiline
                                        minRows={23}
                                        maxRows={23}
                                        variant = "outlined"
                                        sx = {{
                                            width: "100%",
                                            maxHeight: "512px",
                                            "& .MuiOutlinedInput-root": {
                                              alignItems: "flex-start", // Aligns input to top
                                               backgroundColor: "#FFFEEA",
                                            },
                                            "& .MuiOutlinedInput-input": {                                                
                                                textAlign: 'left',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start'
                                            }
                                        }}
                                        value={postContent}
                                        onChange={handleSetPostContent}
                                    />
                                </div>
                            </div>
                            
                            
                            {/* Submit button  */}
                            <Button
                                type = "submit"
                                sx = {{
                                    color: "#FDFDFD",
                                    backgroundColor: "#828181"
                                }}
                            >
                                <h2>Post</h2>
                            </Button>
                        </form>
                    </section>
                </div>
            </div>
        </div>
        
    );
}

export default CreatePostPage;