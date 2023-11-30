import React from 'react';
import './App.css';
import CollectionForm from './CollectionForm'; // Import the CollectionForm component
import logo from './cardshq.png'; // Import the logo

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="CardsHQ Logo" className="App-logo" /> {/* Display the logo */}
      </header>
      <CollectionForm /> {/* Include the CollectionForm component */}
    </div>
  );
}

export default App;
