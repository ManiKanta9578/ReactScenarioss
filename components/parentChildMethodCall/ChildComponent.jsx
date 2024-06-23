import React from 'react'

const ChildComponent = ({handleParentMethod}) => {

    const handleClick = () => {
        handleParentMethod("Hello from child");
    }

  return (
    <div>
        <h3>Child Component</h3>
        <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default ChildComponent