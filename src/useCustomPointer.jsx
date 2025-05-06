import { useState, useEffect } from 'react';

export default function useCustomPointer(pointerElement) {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    useEffect(() => {
        const updatePosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        }
        document.addEventListener("mousemove", updatePosition)
        return () => document.removeEventListener("mousemove", updatePosition)
    }, [])

    return position
}