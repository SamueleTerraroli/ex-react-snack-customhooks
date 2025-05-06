import { useState, useCallback } from 'react';

export default function useSwitch(initialState = false) {
    const [isOn, setIsOn] = useState(initialState)
    const toggle = useCallback(() => {
        setIsOn(prev => !prev);
    }, []);

    return [isOn, toggle];
}