import React, { useState, useEffect } from 'react';
import './Modal.css';


const Modal = ({ entry, setEntry,
  name,
  tempName, setTempName,
  handleEntrySubmit, showModal }) => {

  const [randomQuestion, setRandomQuestion] = useState('');
  const currentTime = new Date().getHours();
  useEffect(() => {
    let questions;
    const currentTime = new Date().getHours();

    if (currentTime >= 5 && currentTime < 12) {
      questions = [
        "What are your plans for today?",
        "What have you been up to this morning?",
        "How are you feeling?",
      ];
    } else if (currentTime >= 12 && currentTime < 17) {
      questions = [
        "What have you been up to lately?",
        "What did you do this morning?",
        "What are you looking forward to?",
        "How are you spending your afternoon?",
      ];
    } else if (currentTime >= 17 && currentTime < 24) {
      questions = [
        "How have you spent your day?",
        "What's on your mind?",
        "How has your day been?",
        "What are you up to this evening?",
      ];
    } else {
      questions = [
        "What are you doing up at this hour?",
        "Do you ever struggle to sleep?",
        "What's troubling you?",
      ];
    }

    setRandomQuestion(questions[Math.floor(Math.random() * questions.length)]);
  }, []);


  return (
    <div className={`modal-backdrop ${showModal ? 'show' : 'hide'}`}>
      <div className="modal">
        {(name.length === 0) ?
          <form onSubmit={handleEntrySubmit}>
            <h2>Hello. What is your name?</h2>
            <input
              value={tempName}
              onChange={(e) => setTempName(e.target.value)}
            />
            <h2>{randomQuestion}</h2>
            <textarea
              rows={4}
              cols={50}
              value={entry[0]}
              onChange={(e) => setEntry([e.target.value, currentTime])}
            />
            <button type="submit">ENTER</button>
          </form> :
          <form onSubmit={handleEntrySubmit}>
            <h2>Hello, {name}. {randomQuestion}</h2>
            <textarea
              rows={4}
              cols={50}
              value={entry[0]}
              onChange={(e) => setEntry([e.target.value, currentTime])}
            />
            <button type="submit">ENTER</button>
          </form>
        }
      </div>
    </div>
  );
};

export default Modal;
