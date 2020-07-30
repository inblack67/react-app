import React, { Fragment } from 'react';
import Navbar from './components/Navbar';
import ReactFlameGraph from './components/ReactFlameGraph'

function App() {
  return (
    <Fragment>
      <Navbar />
      <div className="container mx-auto">
        <ReactFlameGraph />
      </div>
    </Fragment>
  );
}

export default App;
