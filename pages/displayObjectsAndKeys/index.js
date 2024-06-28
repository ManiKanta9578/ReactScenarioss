import React from 'react'

const sampleData = {
    name: 'Manikanta',
    age: 30,
    occupation: 'Job',
    location: 'Mumbai'
};

const Index = () => {
    return (
        <div>
            <h3>Display keys and values of objects in a loop in react?</h3>
            {Object.keys(sampleData).map((key) => {
                return (
                    <div key={key}> {key}: {sampleData[key]} </div>
                )
            })}
        </div>
    )
}

export default Index;