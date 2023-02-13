import React, { useState, useEffect } from 'react';
import './TimeBasedText.css';
/* eslint-disable */

const indent = <React.Fragment>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</React.Fragment>;

const timeRangeText = [
  {
    // MORNING
    range: [0, 22],
    texts: [
      <React.Fragment>
        Alone he sits, under roof above two<br />
        {indent}{indent}{indent}{indent}{indent} children in school; he snores, not tonight<br />
        {indent}{indent}unlocked window downstairs! He stands up, sweating like you wouldn’t believe<br />
        {indent}{indent}{indent}it when he told CPS <i>they are fed they are kind they are safe they are mine</i> only<br />
        partly though – that was a lie – Dora took them for holidays and Sundays but not Sunday<br />
        {indent}holidays.
      </React.Fragment>,
      <React.Fragment>
        Ohio'd deem her place a brothel but she sleeps alone.
      </React.Fragment>,
      <React.Fragment>
        {indent}{indent} busted <br />
        {indent}{indent}{indent}{indent}{indent}{indent}  alarm <br />
        Pat called his ex-wife for the first time in a decade. <br />
        {indent}{indent}{indent}She answered on the third ring.
      </React.Fragment>,
      <React.Fragment>
        Quiet, Jeff and Marcy and their dog and their unborn, surrounded <br />
        {indent}by <br/>
        {indent}{indent}dust in his nose {indent} a {indent} sneeze {indent} while she chokes 
        {indent} <br />
         up  {indent} {indent} last night's 
        cold soup at that restaurant her brother-in-law -- the one he hasn't spoken to since their wedding -- recommended.
      </React.Fragment>,

    ]
  },
  {
    range: [5, 12],
    texts: [
      <React.Fragment>
        The cereal tastes sour now, says Dora’s son, the son who was born six years and three days prior at this exact time (down to the minute). Like yogurt with lemon with lime with–<br />
        <br /><br />It won’t flush. This child isn’t typically up now, typically this child sleeps until nine (their half-day preschool starts later). <br />
        {indent}{indent}Put the toilet paper back.<br />
        {indent}{indent}{indent}Barefoot and sticky feet exit mostly and then all the way.
        Dora puts her son’s backpack on the chair to his left. The bus will be here in two<br />
        <br /><br />{indent}{indent}The bus didn’t come because of &nbsp;&nbsp; sufficient public school funding,<br />
        {indent}{indent}&nbsp;&nbsp;&nbsp;replacements for Simone,nocause for alarm.<br />
        <br /><br />The son runs late, 2 miles. Maybe 3.<br />
      </React.Fragment>,
    ]
  },
  {
    range: [12, 20],
    texts: [
      <React.Fragment>
        Train takes 6 stops (14 minutes) – a minute early, but that just meant it was 13 minutes late
        last time.<br /><br /><br />

        Milk. <br />
        Sugar. <br />
        Store’s out of lemons again. Two checks off his list, one X. This time of year never <br />
        {indent}saw &nbsp;&nbsp;&nbsp; much

      </React.Fragment>, "sample sample sample", "ahsusdhfds!", "sample sample sample", "ahsusdhfds!", "sample sample sample", "ahsusdhfds!", "sample sample sample", "ahsusdhfds!"]
  },
  {
    range: [17, 24],
    texts: [
      <React.Fragment>
        Alone he sits, under roof above two<br />
        {indent}{indent}{indent}{indent}{indent} children in school; he snores, not tonight.<br />
        {indent}{indent}unlocked window downstairs! He stands up, sweating like you wouldn’t believe<br />
        {indent}{indent}{indent}it when he told CPS <i>they are fed they are kind they are safe they are mine</i> only<br />
        partly though – that was a lie – Dora took them for holidays and Sundays but not Sunday<br />
        {indent}holidays.
      </React.Fragment>,
      <React.Fragment>
        Alone he sits, under roof above two<br />
        {indent}{indent}{indent}{indent}{indent} children in school; he snores, not tonight.<br />
        {indent}{indent}unlocked window downstairs! He stands up, sweating like you wouldn’t believe<br />
        {indent}{indent}{indent}it when he told CPS <i>they are fed they are kind they are safe they are mine</i> only<br />
        partly though – that was a lie – Dora took them for holidays and Sundays but not Sunday<br />
        {indent}holidays.
      </React.Fragment>,
      "Enjoy the night!"]
  }
];

const TimeBasedText = () => {
  const [currentTexts, setCurrentTexts] = useState([]);

  useEffect(() => {
    const currentTime = new Date().getHours();
    const selectedTexts = timeRangeText.find(({ range }) => currentTime >= range[0] && currentTime < range[1]).texts;
    setCurrentTexts(selectedTexts);
  }, []);

  return (
    <div className="time-based-text">
      {currentTexts.map((text, index) => (
        <li key={index}>{text}</li>
      ))}
    </div>
  );
};

export default TimeBasedText;
