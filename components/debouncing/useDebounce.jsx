import React, { useEffect, useState } from 'react'

const UseDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(timeoutId);
        }
    }, [value, delay]);

    return debouncedValue;
}

export default UseDebounce;