import React, { useState } from 'react'
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
    const [message, setMeassage] = useState("");

    const handleParentMethod = (msg) => {
        setMeassage(msg);
    }

    return (
        <div>
            <h2>Parent Component</h2>
            <h3>Message</h3>
            {message}

            <ChildComponent handleParentMethod={handleParentMethod} />
        </div>
    )
}

export default ParentComponent