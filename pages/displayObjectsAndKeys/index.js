import React from 'react';

const sampleData = {
    name: 'Manikanta',
    age: 30,
    occupation: 'Job',
    location: 'Mumbai'
};


const Index = () => {
    return (
        <div style={styles.container}>
            <h3 style={styles.heading}>Display keys and values of objects in a loop in React</h3>
            {Object.keys(sampleData).map((key) => {
                return (
                    <div key={key} style={styles.item}>
                        <span style={styles.key}>{key}:</span>
                        <span style={styles.value}>{sampleData[key]}</span>
                    </div>
                );
            })}
        </div>
    );
};

const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        maxWidth: '600px',
        margin: '0 auto',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    },
    heading: {
        color: '#333',
        textAlign: 'center',
        marginBottom: '20px'
    },
    item: {
        backgroundColor: '#fff',
        padding: '10px',
        margin: '10px 0',
        borderRadius: '4px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    key: {
        fontWeight: 'bold',
        color: '#555'
    },
    value: {
        color: '#777'
    }
};

export default Index;
