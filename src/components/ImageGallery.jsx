import React from 'react';
import PostPreview from './PostPreview';

const ImageGallery = ({ image1, image2, image3 }) => {
    return (
        <div className="flex flex-row gap-16">
            <PostPreview
                imageLink={image1.imageLink}
                date={image1.date}
                title={image1.title}
                description={image1.description} // the description needs to be cut later 
            />
            <PostPreview
                imageLink={image2.imageLink}
                date={image2.date}
                title={image2.title}
                description={image2.description}
            />
            <PostPreview
                imageLink={image3.imageLink}
                date={image3.date}
                title={image3.title}
                description={image3.description}
            />
        </div>
    )
}

export default ImageGallery; 