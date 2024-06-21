'use client'
import React, { useEffect, useRef, useState } from 'react'

const dataVideo = [
    "/video/TXDBRA4X.mp4",
    "/video/VB2KXQCW.mp4",
    "/video/ABH256DY.mp4",
    "/video/UYBGOQ4J.mp4",
    "/video/3LAURKWX.mp4"
 ]
 

const Video = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleEnded = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % dataVideo.length);
    };
    useEffect(() => {
        const videoElement = videoRef.current;
        if (videoElement) {
            videoElement.addEventListener('ended', handleEnded);
        }

        return () => {
            if (videoElement) {
                videoElement.removeEventListener('ended', handleEnded);
            }
        };
    }, []);

    useEffect(() => {
        const videoElement = videoRef.current;
        if (videoElement) {
            videoElement.load();
            videoElement.play();
        }
    }, [currentIndex]);

    return (
        <video
            ref={videoRef}
            src={dataVideo[currentIndex]}
            preload="auto"
            style={{ width: '100%', height: '100%' }}
            autoPlay
            muted
        />
    )
}

export default Video