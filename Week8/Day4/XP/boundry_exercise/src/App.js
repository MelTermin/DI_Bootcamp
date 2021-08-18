import React from 'react';
import BuggyCounter from './BuggyCounter'
import Counter from './Counter'
import './App.css';

function App() {
  return (
    <div >
      <BuggyCounter>
      <p>Click on the numbers to increase the counters.</p>
      <p>The counter is programmed to throw error when it reaches 5. This simulates a JavaScript error in a component.</p>
      <Counter></Counter>
     
      </BuggyCounter>

    
    </div>
  );
}

export default App;
