import React, { useContext } from 'react'
import MyContext from '../../contextAPI/MyContext';

const ContextComponent = () => {

    const { sharedData, setSharedData } = useContext(MyContext);

    return (
        <>
            <div>{sharedData}</div>
            <button onClick={() => setSharedData('Updated data')}>Update Data</button>
        </>
    )
}

export default ContextComponent