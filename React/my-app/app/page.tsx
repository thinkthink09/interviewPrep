'use client'

import * as React from 'react';

const { useState } = React;

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        Hello World
        <p>{count}</p>
      </div>
      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    </>
  );
}
