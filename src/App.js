import React from 'react';
import './App.css';
import { useState } from 'react';

/**NY Times Lite Application
 * 
 * App -> TopNewsContainer
 */
function App() {

  return (
    <div className="App">
      <h1>NY Times Lite</h1>

      <TopNewsContainer />
    </div>
  );
}

export default App;
