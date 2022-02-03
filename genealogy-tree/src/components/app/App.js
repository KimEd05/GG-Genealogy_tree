import React from 'react';
import './App.css';
import Node from '../node/Node';
import data from '../../Daxcsa.json';

function App() {

  const dataAcceded = data.data.attributes[0];

  return (
    <div className="App">
      <header className="App-header">
      <Node data={dataAcceded} level={0}/>
      </header>
    </div>
  );
}

export default App;
