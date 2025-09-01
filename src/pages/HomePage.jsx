import React from 'react';
import NavBar from '@/components/NavBar';
import PostPreview from '@/components/PostPreview';


const HomePage = () => {
    return (
        <div>
            <div className="bg-[url('/pages/StefanKUnsplash.jpg')] bg-cover bg-center w-screen h-[70vh]">      
                <NavBar darkMode={true}/>     
            </div>

            <div className="flex flex-col mt-16 mb-16 ml-64 mr-64 gap-8">
                <section className="flex flex-col">
                    <p className="text-left">Browse the latest posts!</p>
                    <h1 className="text-left">Latest Reviews</h1>
                </section>


                {/* replace with ImageGallery later */}
                <section className="flex flex-row gap-16">
                    <PostPreview
                        imageLink='/pages/ChristineTanUnsplash.jpg'
                        date="2025 Aug 24"
                        title="New Eclairs"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...."
                    />

                    <PostPreview
                        imageLink='/pages/ChristineTanUnsplash.jpg'
                        date="2025 Aug 24"
                        title="New Eclairs"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...."
                    />

                    <PostPreview
                        imageLink='/pages/ChristineTanUnsplash.jpg'
                        date="2025 Aug 24"
                        title="New Eclairs"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...."
                    />

                    <PostPreview
                        imageLink='/pages/ChristineTanUnsplash.jpg'
                        date="2025 Aug 24"
                        title="New Eclairs"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...."
                    />
                </section>

                {/* replace with ImageGallery later */}
                <section className="flex flex-row gap-16">
                    <PostPreview
                        imageLink='/pages/ChristineTanUnsplash.jpg'
                        date="2025 Aug 24"
                        title="New Eclairs"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...."
                    />

                    <PostPreview
                        imageLink='/pages/ChristineTanUnsplash.jpg'
                        date="2025 Aug 24"
                        title="New Eclairs"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...."
                    />

                    <PostPreview
                        imageLink='/pages/ChristineTanUnsplash.jpg'
                        date="2025 Aug 24"
                        title="New Eclairs"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...."
                    />

                    <PostPreview
                        imageLink='/pages/ChristineTanUnsplash.jpg'
                        date="2025 Aug 24"
                        title="New Eclairs"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...."
                    />
                </section>
            </div>
            
            
        </div>
        

    );
}

export default HomePage; 