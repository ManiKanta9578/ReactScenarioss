import React, { useState, useEffect } from 'react';
import styles from '../../styles/searchFilter.module.css';

const countries = [
    { "id": 1, "name": "United States", "code": "US" },
    { "id": 2, "name": "Canada", "code": "CA" },
    { "id": 3, "name": "United Kingdom", "code": "UK" },
    { "id": 4, "name": "Australia", "code": "AU" },
    { "id": 5, "name": "Germany", "code": "DE" },
    { "id": 6, "name": "France", "code": "FR" },
    { "id": 7, "name": "Japan", "code": "JP" },
    { "id": 8, "name": "India", "code": "IN" },
    { "id": 9, "name": "Brazil", "code": "BR" },
    { "id": 10, "name": "South Africa", "code": "ZA" }
];

const SearchFilter = () => {
    const [searchText, setSearchText] = useState('');
    const [filteredCountries, setFilteredCountries] = useState(countries);

    useEffect(() => {
        const filteredData = countries.filter((item) =>
            item.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredCountries(filteredData);
    }, [searchText]);

    return (
        <div className={styles.searchFilter}>
            <input
                type="text"
                placeholder="Search"
                className={styles.searchInput}
                onChange={(e) => setSearchText(e.target.value)}
            />
            <ul className={styles.countryList}>
                {filteredCountries.map((item) => (
                    <li key={item.id} className={styles.countryItem}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default SearchFilter;
