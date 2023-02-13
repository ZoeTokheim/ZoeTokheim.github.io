import Clock from "./Home/Clock";
import TimeBasedText from "./Home/TimeBasedText"
import './App.css';
import React, { useState } from 'react';
import Modal from './Modal/Modal';



function App() {
  const [showModal, setShowModal] = useState(true);
  const [entries, setEntries] = useState(
    JSON.parse(localStorage.getItem('entries')) || []
  );
  const [entry, setEntry] = useState('');

  const handleEntrySubmit = (e) => {
    if (entry) {
      e.preventDefault();
      setEntries([...entries, entry]);
      localStorage.setItem('entries', JSON.stringify([...entries, entry]));
      setEntry('');
      setShowModal(false);  
    }
  };

  return (
    <div className="App">
      <div>
        <Modal
          entry={entry}
          setEntry={setEntry}
          handleEntrySubmit={handleEntrySubmit}
          showModal={showModal}
        />
        {/* {entries.length > 0 ? (
          <ul>
            {entries.map((entry, index) => (
              <li key={index}>Hello, {entry}!</li>
            ))}
          </ul>
        ) : (
          <h1>Hello, World!</h1>
        )} */}
      </div>

      <header className="App-header">
        <Clock/>
        <hr />
        <TimeBasedText></TimeBasedText>
      </header>
    </div>
  );
}

export default App;
