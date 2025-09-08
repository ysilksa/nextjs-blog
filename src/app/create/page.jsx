import React from 'react';
import NavBar from '@/components/NavBar';
import LoginFormInput from '@/components/LoginFormInput';
import { Button } from '@mui/material';

const CreateAccountPage = () => {
    return (
        <div className="flex flex-col h-[100vh] overflow-hidden text-[#171717] ">
            <NavBar header={true}/>
            
            {/* login input over the image */}
            <section className="relative h-[100%] overflow-hidden">
                <img src='/pages/StefanKUnsplash.jpg' className="absolute z-0 object-cover"/>
                <div className="flex flex-col gap-[16px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-[#FFFEEA] w-[720px] h-[576px] p-[40px] rounded-[8px]">
                    <h1>Let's bake great things together.</h1>
                    <h2 className="text-[#828181]">Login or signup to continue</h2>
                    <LoginFormInput label="Email"/>
                    <LoginFormInput label="Password"/>
                    <Button 
                        sx = {{
                            backgroundColor: "#828181",
                            color: "#FFFFFC",
                            padding: "20px",
                            marginTop: "16px",
                            fontFamily: "var(--font-inria-sans)"
                        }}
                        variant="contained"
                    >
                        Create account
                    </Button>
                    <section className="flex gap-[16px] self-center">
                        <h2 className="text-[#828181]">Have an account?</h2>
                        <a href="/login" className="text-[1.5rem] text-[#171717] font-(family-name:--font-inria-sans)">Login</a>
                    </section>
                </div>
            </section>
            
        </div>
    )
}

export default CreateAccountPage; 