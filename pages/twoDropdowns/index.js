import React, { useState } from 'react';
import styles from '../../styles/twoDropdown.module.css';


const countries = [
    {
        id: 1,
        name: "India",
        code: "INR",
        states: ['Andhra Pradesh', 'Telangana', 'Maharashtra']
    },
    {
        id: 2,
        name: "United Kingdom",
        code: "UK",
        states: ['UK1', 'UK2', 'UK3']
    },
    {
        id: 3,
        name: "United States of America",
        code: "USA",
        states: ['USA1', 'USA2', 'USA3']
    },
];

const Index = () => {
    const [countryDropdown, setCountryDropdown] = useState(countries[1].code);
    const [states, setStates] = useState(countries[1].states);
    const [selectedState, setSelectedState] = useState(states[0]);
    
    const handleChange = (e) => {
        let selectedValue = e.target.value;
        setCountryDropdown(selectedValue);

        const updatedStates = countries.find((ele) => ele.code === selectedValue);
        setStates(updatedStates?.states || []);
        setSelectedState(updatedStates?.states[0] || ''); // Set the first state or empty string
    };

    const handleChangeState = (e) => {
        setSelectedState(e.target.value);
        console.log(e.target.value);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Country and State Selector</h1>
            <select className={styles.select} value={countryDropdown} onChange={handleChange}>
                {countries.map((country) => (
                    <option key={country.id} value={country.code}>
                        {country.name}
                    </option>
                ))}
            </select>
            <select className={styles.select} value={selectedState} onChange={handleChangeState}>
                {states.map((state, index) => (
                    <option key={index} value={state}>
                        {state}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Index;
