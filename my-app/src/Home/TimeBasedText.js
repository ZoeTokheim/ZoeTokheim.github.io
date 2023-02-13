import React, { useState, useEffect } from 'react';
import './TimeBasedText.css';
/* eslint-disable */

const indent = <React.Fragment>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</React.Fragment>;

const timeRangeText = [
  {
    // LATE NIGHT
    range: [0, 6],
    texts: [
      <React.Fragment>
        Alone he sits, under roof above two<br />
        {indent}{indent}{indent}{indent}{indent} children in school; he snores, not tonight<br />
        {indent}{indent}unlocked window downstairs! He stands up, sweating like you wouldn’t believe<br />
        {indent}{indent}{indent}it when he told CPS <i>they are fed they are kind they are safe they are mine</i> {indent}only<br />
        partly though -- that was a lie -- Dora took them for holidays and Sundays but not Sunday<br />
        {indent}holidays.
      </React.Fragment>,
      <React.Fragment>
        Ohio'd deem her place a brothel but she sleeps alone. <br /> <br />
        {indent} She washed her sheets three weeks ago {indent}{indent}{indent} Come to think of it, that was the same day she'd been
        laid off from her job at her uncle's friend's brother's sporting goods store because she didn't want to {indent}{indent} him but he
        wouldn't tell it that way, obviously. <br /> <br /><br /> <br />
        Her phone screen pulls her away: she has an assignment due in five hours. If she falls
        asleep now, she can sleep for four hours until her alarm goes off.
      </React.Fragment>,
      <React.Fragment>
        {indent}{indent} busted <br />
        {indent}{indent}{indent}{indent}{indent}{indent}  alarm <br />
        Pat called his wife for the first time in a decade. <br />
        {indent}{indent}{indent}She answered on the third ring.
      </React.Fragment>,
      <React.Fragment>
        Quiet, Jeff and Marcy and their dog and their unborn, surrounded <br />
        {indent}by <br />
        {indent}{indent}dust in his nose {indent} a {indent} sneeze {indent} while she chokes
        {indent} <br />
        up  {indent} {indent} last night's
        cold soup at that place downtown her brother-in-law -- the one he hasn't spoken to since their wedding -- recommended.
      </React.Fragment>,

    ]
  },

  //MORNING
  {
    range: [6, 12],
    texts: [
      <React.Fragment>
        When things get this busy, plans <br />
        {indent}{indent}{indent}{indent}{indent}{indent}fall <br />
        {indent}{indent}{indent}{indent}{indent}{indent}{indent}{indent}passed away. <br />
        {indent}{indent} fractured skull and the surgery was unsuccessful. Donna screamed the way <br />
        she always did in situations like this, voice milky and sour and indifferent to everything but
        what she heard just now <br />
        {indent}Suddenly he's hugging her and it's only now that he has a moment to rest and see <br />
        how old she's grown {indent}{indent}{indent} he must look {indent}{indent} like that too, to her.  <br />
        <br /> <br /> to see your son's body and ignore
        <br /> {indent}{indent}{indent}&nbsp;&nbsp; to ignore <br />
        to see there is no one else there but those dressed in white.
      </React.Fragment>,
      <React.Fragment>
        Today in class her professor crossed out half the lines in her essay and asked for more content.
      </React.Fragment>,
      <React.Fragment>
        The cereal tastes <i>sour</i> now. It's Ernesto's son, the son who was born six years and three days prior at this exact time (down to the minute). Like yogurt with lemon with lime with–<br />
        <br /><br />It won’t flush. This child isn’t typically up now, typically this child sleeps until nine (their half-day preschool starts later). <br />
        {indent}{indent}<i>Put the toilet paper back.</i><br />
        {indent}{indent}{indent}Barefoot and sticky feet exit mostly and then all the way.
        Ernesto puts his son’s backpack on the chair to his left. The bus will be here in two<br />
        <br /><br />{indent}{indent}The bus didn’t come because of &nbsp;&nbsp; sufficient public school funding,<br />
        {indent}{indent}&nbsp;&nbsp;&nbsp;replacements for Simone,no<i>cause for alarm</i>.<br />
        <br /><br />The son runs late, Two miles. Maybe three.<br />
      </React.Fragment>,
      <React.Fragment>
        {indent}Jeff doesn’t give a shit what other Marcy thinks <br />
        {indent}{indent} he {indent}{indent}{indent}{indent} will <br />
        {indent}{indent}{indent}{indent} be  <br />
        other {indent} Marcy's addicted to porn anyway, probably -- you can tell by the
        way she holds her breasts as she jogs downstairs {indent} about time Jim <br />
        {indent}{indent}{indent}{indent}{indent}{indent}{indent}{indent} grows up.
      </React.Fragment>,
    ]
  },
  //AFTERNOON
  {
    range: [12, 18],
    texts: [
      <React.Fragment>
        The &nbsp; train takes 6 stops (14 minutes) -- a minute early, but that just meant it was 13 minutes late
        last time.<br /><br /><br />

        Milk. <br />
        Sugar. <br />
        Store’s out of lemons again. Two checks off his list, one X. This time of year never <br />
        {indent}saw &nbsp;&nbsp;&nbsp; much
        <br /><br />

        {indent}a late birthday dinner, but maybe Dora's better suited for this? Whether
        birthdays were holidays was a brief point of contention during the divorce (the kids said yes, although
        Ernesto would disagree, and Dora probably would've too if she wasn't so committed to baking
        that chocolate, too-sweet birthday cake twice a year). So birthdays were holidays now,unofficially and
        not according to their {indent}{indent}. If their lawyers knew {indent}{indent}{indent}{indent} <br /><br />

        {indent}{indent}{indent}{indent} his son liked lemon more anyway.
        Two unread texts from Ernesto's boss grow anxious in his pocket and it
        starts raining an hour later.

      </React.Fragment>,
      <React.Fragment>
        {indent} <i>relationship?</i> {indent}{indent}<i>other people?</i> He said no. Not with their
        kids.<br />
        {indent}{indent}the kids his brother wanted and other Marcy <br />
        {indent}{indent}{indent}{indent} didn't she?<br />
        with him it's always whatever the wife says. And if I know my brother, Jeff continues, <br />
        {indent}{indent} Me? I'm fine. Marcy's great, looks like everything's going well so far. <br />
        {indent} Eighteen weeks. {indent} I know, baby'll be here quick. <br />
        Don't worry, I'm not going anywhere. <br /><br /><br />{indent}{indent}how many sales'd you close last quarter? <br />
        {indent} Impressive. <br />
        <br /> <br /> {indent}{indent}{indent} happy hour -- we can get there in if we leave now. <br />
        Jeff and Laura drink <br />
        {indent}{indent}{indent}{indent} looks good tonight with that top {indent} <br />
        <br /> {indent}taste it? {indent}{indent} until you're certain<br /><br />
        it glides down your throat smooth, huh? {indent} <i>exposed</i>
        <br /> <br /> {indent}{indent}&nbsp;&nbsp;{indent}  arteries (they laugh), sticky. Yesterday
      </React.Fragment>,
      <React.Fragment>
        {indent} an avalanche, {indent}{indent} forseen and not {indent}avoided, <br />
        the reason they never divorced {indent}{indent}{indent} the same perfume and the sweater  <br />
        her own mother gave her <br />
        {indent}{indent}{indent}{indent}{indent}Donna <i>felt alone?</i>
      </React.Fragment>,
      <React.Fragment>
        Jack called Alicia after class and she told him she was busy but instead she went to grab coffee with
        Mikaela but Alicia doesn't drink coffee and neither does Mikaela so they just got pastries and iced
        tea and she could've <i>sworn</i> it was the same tea she'd had at Arjun's last week when she thought
        he'd invited her over to smoke and hook up and he thought she'd come over to watch an episode of that k-drama
        they were talking about before philosophy class and thank god Bea'd answered when she called her that night in tears
        because she'd really thought she'd had a shot this time around. <br /> <br />

        The afternoon's going well for her, at least so far. The tea's shit though, and the scone's stale.
        The conversation will be better once it's over.

        <br />

        {indent}{indent} Alicia says she has a headache. Mikaela said the same
        last week, though, so Alicia doesn't feel too bad about it.

      </React.Fragment>,]
  },
  //EVENING
  {
    range: [18, 24],
    texts: [
      <React.Fragment>
        It's late when Jeff gets home (Marcy's already asleep). He showers quietly.
        Stomach taunts. Thinks of calling his brother. Doesn't. Throat bitters. Texts other Marcy <br /><br />
        {indent}{indent} <i>what's best for your kids, Marcy</i><br />
        {indent}{indent}{indent}{indent}{indent}{indent}{indent}{indent}{indent} <i>here to talk whenever</i><br />
        {indent}{indent}{indent}{indent}{indent}<i>bed now, but tell Jim I'll call</i> <br /><br />
        Jeff holds his mouth under the faucet until he can swallow.<br />
        {indent} Laura says she had fun tonight, that Marcy should join next time. Yeah, Jim had fun too. Marcy's <br />
        {indent} pregnant, right. Yeah. Ha. Not a bar then. Gotcha.
        <br /> <br />
        There's a space next to Marcy, who maybe isn't asleep after all but it's nice of her to pretend.
      </React.Fragment>,
      <React.Fragment>
        Pat rests soundly, alone. For now his mind is quiet.
      </React.Fragment>,
      <React.Fragment>
        {indent}{indent}excited for a <i>night in</i>, you know?<br /><br /><br />
        values don't line up with her actions then what is a value <br />
        {indent}{indent}{indent}but an opinion?<br />
        She can't remember if the paper had to be five or six pages and Mikaela's
        not responding to her messages.
      </React.Fragment>,
      <React.Fragment>
        Scraping vanilla off plastic bowls, Ernesto {indent} hums and turns on the sink. <br />
        {indent}{indent} both children asleep, <i>a moment to rest</i>,
        {indent}{indent}{indent}{indent} he says, moving his arms and legs.
      </React.Fragment>,]
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
