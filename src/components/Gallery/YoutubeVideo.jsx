import React, { useEffect, useState } from 'react';

const YouTubeVideo = ({ videoId }) => {
    const [thumbnail, setThumbnail] = useState(null);

    useEffect(() => {
        const getThumbnail = async () => {
            try {
                const response = await fetch(
                    `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=YOUR_API_KEY`
                );
                const data = await response.json();
                const thumbnailUrl = data.items[0]?.snippet?.thumbnails?.default?.url;
                if (thumbnailUrl) {
                    setThumbnail(thumbnailUrl);
                } else {
                    throw new Error('Unable to fetch YouTube video thumbnail.');
                }
            } catch (error) {
                console.error('Error fetching YouTube video thumbnail:', error);
            }
        };

        getThumbnail();
    }, [videoId]);

    return (
        <div>
            {thumbnail ? (
                <img src={thumbnail} alt="Video Thumbnail" />
            ) : (
                <p>Error loading video thumbnail.</p>
            )}
        </div>
    );
};

export default YouTubeVideo;
