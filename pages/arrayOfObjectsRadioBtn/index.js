import { useState } from "react";

const options = [
    { id: 1, name: 'option 1' },
    { id: 2, name: 'option 2' },
    { id: 3, name: 'option 3' },
]

const Index = () => {
    const [selectedValue, setSelectedValue] = useState('2');

    const handleChange = (e) => {
        setSelectedValue(e.target.value);
    }

    return (
        <>
            {options.map((option) => (
                <div key={option.id}>
                    <input
                        type="radio"
                        value={option.id}
                        checked={selectedValue === option.id.toString()}
                        onChange={handleChange}
                    />
                    <label> {option.name} </label>
                </div>
            ))}
            <label>Selected Option : </label>
            <input type="text" value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)}/>
        </>
    )
}

export default Index;