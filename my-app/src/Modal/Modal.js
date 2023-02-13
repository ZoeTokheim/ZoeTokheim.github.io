import React, { useState, useEffect } from 'react';
import './Modal.css';


const Modal = ({ entry, setEntry, handleEntrySubmit, showModal }) => {
  const [randomQuestion, setRandomQuestion] = useState('');

  useEffect(() => {
    const currentTime = new Date().getHours();
    let questions;

    if (currentTime >= 5 && currentTime < 12) {
      questions = [
        "Good morning. What are your plans for today?",
        "Hello. What have you been up to this morning?",
        "Hi there. How are you feeling?",
      ];
    } else if (currentTime >= 12 && currentTime < 17) {
      questions = [
        "Hello. What have you been up to lately?",
        "Hello there. What did you do this morning?",
        "Welcome. What are you looking forward to?",
        "How are you spending your afternoon?",
      ];
    } else if (currentTime >= 17 && currentTime < 21) {
      questions = [
        "Welcome. How have you spent your day?",
        "Hello and welcome. What's on your mind?",
        "Hi there. What's happened so far today?",
        "Hello. What are you up to this evening?",
      ];
    } else {
      questions = [
        "What are you doing up at this hour?",
        "Hello. Do you ever struggle to sleep?",
        "What's troubling you?",
      ];
    }

    setRandomQuestion(questions[Math.floor(Math.random() * questions.length)]);
  }, []);

  return (
    <div className={`modal-backdrop ${showModal ? 'show' : 'hide'}`}>
      <div className="modal">
        <h2>{randomQuestion}</h2>
        <form onSubmit={handleEntrySubmit}>
          <textarea
            rows={4}
            cols={50}
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
          />
          <button type="submit">ENTER</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
