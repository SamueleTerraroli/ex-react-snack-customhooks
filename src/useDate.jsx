import { useState, useEffect } from 'react'

export default function useDate() {
    const [currentDate, setCurrentDate] = useState(new Date())
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(new Date())
        }, 1000)
    }, [])

    return currentDate
}