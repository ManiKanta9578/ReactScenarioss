import React, { useState } from 'react'

const Index = () => {
    const [selectedOption, setSelectedOption] = useState({});
    const options = [
        { id: 1, name: 'Option 1' },
        { id: 2, name: 'Option 2' },
        { id: 3, name: 'Option 3' },
    ];

    const handleChange = (e) => {
        setSelectedOption(e.target.value);
    }

  return (
    <div>
        <select value={selectedOption} onChange={handleChange}>
            <option value="">Select an option</option>
            {options.map((option) => (
                <option key={option.id}>{option.name}</option>
            ))}
        </select>

        
    </div>
  )
}

export default Index