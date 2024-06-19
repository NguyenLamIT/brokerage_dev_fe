'use client'
import React, { useEffect, useState } from 'react'


const TextSolution = ({ dataSolutions }: any) => {
    const [textSolution, setTextSolution] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIsVisible(false);
            setTimeout(() => {
                setTextSolution((prevIndex) => (prevIndex + 1) % dataSolutions.length);
                setIsVisible(true);
            }, 1000);
        }, 4000);


        return () => {
            clearInterval(intervalId);
        };
    }, []);
    return (
        <div
            className={`text-white text-[4rem] ease-in-out transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'
                }`}
        >{dataSolutions[textSolution].name}</div>
    )
}

export default TextSolution