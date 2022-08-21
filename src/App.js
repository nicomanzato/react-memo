import React, { useState } from 'react';
import './style.css';

import { Image } from './components/image/image';
import { Counter } from './components/counter/counter';

export default function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <Counter value={counter} increment={() => setCounter(counter + 1)} />
      <Image /> 
    </div>
  );
}
