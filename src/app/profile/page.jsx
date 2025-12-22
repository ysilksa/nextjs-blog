"use client"
import React from 'react';
import NavBar from '@/components/NavBar';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';

const ProfilePage = () => {
    return (
        <div className='flex flex-col'>
            <NavBar header={true}/>

            {/* section for changing account information  */}
            <section className="flex flex-col p-[128px] gap-[16px]">
                <h1>Account settings</h1>

                {/* Change username  */}
                <div className="flex flex-col">
                    <h2>Change username</h2>
                    <p>This is how you will show up on posts and comments.</p>
                    <TextField/>
                    <Button
                        type="submit"
                        sx = {{
                            width: "100%", 
                            backgroundColor: "#828181",
                            color: "#FFFFFC",
                            padding: "16px",
                            marginTop: "16px",
                            fontFamily: "var(--font-inria-sans)"
                        }}
                        variant="contained"
                    >
                        <h2>Update</h2>
                    </Button>
                </div>

                {/* Change password */}
                <div className="flex flex-col">
                    <h2>Change password</h2>
                    <p>Update your password to keep your account secure.</p>
                    <TextField/>
                    <Button
                        type = "submit"
                        sx = {{
                            width: "100%",
                            backgroundColor: "#828181",
                            color: "#FFFFFC",
                            padding: "16px",
                            marginTop: "16px",
                            fontFamily: "var(--font-inria-sans)"
                        }}
                        variant="contained"
                    >
                        <h2>Update</h2>
                    </Button>
                </div>


            </section>

        </div>
    );
}

export default ProfilePage;