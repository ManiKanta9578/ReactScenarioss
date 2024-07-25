import React, { useMemo } from 'react';

const withDataFetching = (WrappedComponent) => {
  return function WithDataFetching({ data }) {
    // Memoize the processedData calculation, with a check for undefined data
    const processedData = useMemo(() => {
      return data ? processData(data) : [];
    }, [data]);

    return <WrappedComponent processedData={processedData} />;
  };
};

const DisplayData = ({ processedData }) => {
  if (!processedData || processedData.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div>
      {processedData.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};

const processData = (data) => {
  // Expensive computation
  // Imagine some heavy processing here
  return data.map(item => ({ id: item.id, name: item.name.toUpperCase() }));
};

const EnhancedDisplayData = withDataFetching(DisplayData);

// Example usage
const App = () => {
  const sampleData = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' }
  ];

  return (
    <div>
      <h1>Data Display</h1>
      <EnhancedDisplayData data={sampleData} />
    </div>
  );
};

export default App;