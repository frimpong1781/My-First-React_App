import React from 'react';

function App() {
  return (
    <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: 'pink', width: '100vw', height: '100vh' }}>

        <div style={{height: '20vh', width: '20vw', border: '1px solid grey'}}>
            <h4>box 1</h4>
        </div>

        <div style={{height: '20vh', width: '20vw', border: '1px solid grey'}}>
            <h4>box 2</h4>
        </div>

        <div style={{height: '20vh', width: '20vw', border: '1px solid grey'}}>
            <h4>box 3</h4>
        </div>

    </div>

  );
}

export default App;
