import React, { useEffect, useState } from 'react'
import UseDebounce from '../../components/debouncing/useDebounce';

const Index = () => {
    const [inputValue, setInputValue] = useState('');

    //using custom hook
    const debouncedInputValue = UseDebounce(inputValue, 300);

    useEffect(() => {
        if(debouncedInputValue){
            console.log(`Debounced input value: ${debouncedInputValue}`);
        }
    },[debouncedInputValue])

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }


  return (
    <div>
        <h3>Debouncing</h3>
        <input type='text' value={inputValue} onChange={handleChange} placeholder='Search'/>
        <p>{debouncedInputValue}</p>
    </div>
  )
}

export default Index