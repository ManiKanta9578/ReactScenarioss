import React from 'react'

const throttling = (fn, delay) => {
  let lastCall = 0;

  return function (...args) {
    const now = new Date().getTime();

    if (now - lastCall >= delay) {
      fn(...args);
      lastCall = now;
    }
  };
}

const throttleScrollHandler = throttling(() => {
  console.log("Loading More content....");
}, 1000);

const index = () => {
  return (
    <div onScroll={throttleScrollHandler}>index</div>
  )
}

export default index