import React, { useEffect, useState } from 'react';

function Index({ someProp }) {
  const [someState, setSomeState] = useState(0);

  useEffect(() => {
    // Method to be called on every re-render
    console.log('Component re-rendered');

    // Example: Setting up an interval
    const intervalId = setInterval(() => {
      console.log('Interval running');
    }, 1000);

    // Cleanup function
    return () => {
      console.log('Cleaning up');
      clearInterval(intervalId); // Clearing the interval
    };
  });

  return (
    <div>
      <p>Some Prop: {someProp}</p>
      <p>Some State: {someState}</p>
      <button onClick={() => setSomeState(someState + 1)}>Increment State</button>
    </div>
  );
}

export default Index;
