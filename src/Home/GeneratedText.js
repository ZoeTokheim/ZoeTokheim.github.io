import React, { useState, useEffect } from 'react';


const splitPhrase = (phrase) => {
    const filterWords = ['I', 'me', "I've", 'my', 'mine', "I'm", "It's", "doing"];
    return phrase
        .split(' ')
        .filter((word) => !filterWords.includes(word))
        .join(' ');
};

const flattenPhrases = (phrases) =>
    phrases.reduce((acc, cur) => acc.concat(cur), []);

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const addSpaces = (phrases) => {
    return phrases.map((phrase) => {
        const spaces = Math.floor(Math.random() * 5);
        return `${phrase}${' '.repeat(spaces)}`;
    });
};

const GeneratedText = ({ phrases, name, filterRange }) => {
    const [filteredPhrases, setFilteredPhrases] = useState([]);

    useEffect(() => {
        const filtered = phrases
            .filter(([phrase, number]) => number >= filterRange[0] && number <= filterRange[1])
            .map(([phrase, number]) => splitPhrase(phrase));
        setFilteredPhrases([...filtered, name]);
    }, [phrases, name, filterRange]);

    const shuffledPhrases = shuffleArray(flattenPhrases(filteredPhrases));
    const spacedPhrases = addSpaces(shuffledPhrases);

    let separator = '';
    for (let i = 0; i < spacedPhrases.length; i++) {
        let randomLength = Math.floor(Math.random() * 10) + 1;
        separator += ' \xa0 \xa0 '.repeat(randomLength);
        spacedPhrases[i] = spacedPhrases[i] + separator;
    }

    let joinedPhrases = spacedPhrases.length < 15 ? spacedPhrases.join('') : (spacedPhrases.slice(1,14)).join('');

    return <React.Fragment>{shuffledPhrases.length >= 1 ? joinedPhrases : "\xa0 \xa0 reading"}</React.Fragment>;
};


export default GeneratedText;
