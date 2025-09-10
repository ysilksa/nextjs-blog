import React from 'react';
import NavBar from '@/components/NavBar';
import { Button, IconButton, TextField } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const CreatePostPage = () => {
    return (
        <div>
            <NavBar header={true}/>

            <div className="flex flex-col h-[150vh] mx-auto gap-[16px] items-center">
                <div className="w-full max-w-[960px] flex flex-col gap-4 text-left">
                    <h1>Create post</h1>

                    {/* Uploading media section  */}
                    <section className="flex flex-col gap-[16px]">
                        <h2>Upload media</h2>
                        <p>Please upload one image.</p>
                        {/* Upload image input  */}
                        <div className="h-full max-h-[280px] w-full max-w-[960px] p-[104px] gap-[8px] flex flex-col items-center justify-center border border-[#BFBFB0] rounded-[8px]">
                            <IconButton><CloudUploadIcon/></IconButton>
                            <p className="text-[1.5rem]">Click to upload</p>
                            <p className="text-[1rem]">Valid formats include JPG & PNG</p>
                        </div>
                    </section>

                    {/* Post details section  */}
                    <section className="flex flex-col gap-[16px] h-auto">
                        <h2>Post details</h2>
                        <p>Add some info on the place you visited!</p>

                        {/* Form for the title and description  */}
                        <form className="flex flex-col p-[32px] gap-[16px] h-full max-h-[912px] w-full max-w-[960px] border border-[#BFBFB0] rounded-[8px]">
                            {/* TextField for post name  */}
                            <div>
                                <p className="text-[1.5rem]">Title</p>
                                <p className="text-[1rem]">Max 250 char.</p>
                                <TextField
                                    sx = {{
                                        variant:"outlined",
                                        width: "100%",
                                        "& .MuiOutlinedInput-input": {
                                            backgroundColor: "#FFFEEA"
                                        }

                                    }}
                                />
                            </div>
                            

                            {/* TextField for post description/content */}
                            <div>
                                <p className="text-[1.5rem]">Post Content</p>
                                <p className="text-[1rem]">Max 20,000 char.</p>
                                <TextField
                                    variant = "outlined"
                                    sx = {{
                                        width: "100%",
                                        height: "512px",
                                        "& .MuiOutlinedInput-input": {
                                            height: "512px", 
                                            backgroundColor: "#FFFEEA"
                                        }
                                    }}
                                />
                            </div>
                            
                        </form>
                    </section>
                </div>
                

            </div>
        </div>
        
    );
}

export default CreatePostPage;