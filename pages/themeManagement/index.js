import React from 'react'
import ThemeManagement from '../../components/themeManagement/ThemeManagement';
import ThemeProvider from '../../contextAPI/ThemeProvider';

const Index = () => {
    return (
        <>
            <ThemeProvider>
                <ThemeManagement />
            </ThemeProvider>
        </>
    )
}

export default Index;