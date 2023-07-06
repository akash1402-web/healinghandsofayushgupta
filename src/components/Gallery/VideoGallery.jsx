import React from 'react';
import YouTubeVideo from './YoutubeVideo';


const VideoGallery = () => {
    const videoLinks = [
        'https://www.youtube.com/watch?v=4dd8GbBQy8c',
        'https://www.youtube.com/watch?v=VIDEO_ID_2',
        'https://www.youtube.com/watch?v=VIDEO_ID_3',
        'https://www.youtube.com/watch?v=VIDEO_ID_4',
        'https://www.youtube.com/watch?v=VIDEO_ID_5',
        'https://www.youtube.com/watch?v=VIDEO_ID_6'
    ];

    const getVideoId = (link) => {
        const match = link.match(/(?:\?v=|\/embed\/|\.be\/|\/v\/|\/vi\/|\/user\/\S+\/videos\/|\/e\/|\/embed\/|\/v\/|\/watch\?v=|\/\?v=)([^#\&\?\/\s]{11})/);
        return match && match[1] ? match[1] : '';
    };

    return (
        <div className="video-gallery">
            {videoLinks.map((link, index) => (
                <div className="video-item" key={index}>
                    <YouTubeVideo videoId={getVideoId(link)} />
                </div>
            ))}
        </div>
    );
};

export default VideoGallery;
