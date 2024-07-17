import React from 'react'
import ContextComponent from '../../components/contextAPI/ContextComponent'
import MyProvider from '../../contextAPI/MyProvider'

const Index = () => {
    return (
        <>
            <h3>Context API</h3>
            <MyProvider>
                <ContextComponent />
            </MyProvider>
        </>
    )
}

export default Index