import React, { useState } from 'react';
import MyContext from './MyContext';

const MyProvider = ({ children }) => {
  const [sharedData, setSharedData] = useState('Initial Data');

  return (
    <MyContext.Provider value={{ sharedData, setSharedData }}>
      {children}
    </MyContext.Provider>
  );
}

export default MyProvider;
