import '../styles/site.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Game from './Game';
import CircleType from 'circletype';

const words = [
    "number", "people", "little", "through", "sentence", "differ", "before", "follow", "change", "picture", "animal", "mother", "father", "should", "country", "answer", "school", "between", "thought", "together", "children", "example", "always", "letter", "second", "science", "friend", "mountain", "enough", "though", "family", "direct", "measure", "product", "numeral", "question", "happen", "complete", "problem", "better", "during", "hundred", "remember", "ground", "interest", "listen", "travel", "morning", "simple", "several", "toward", "against", "pattern", "center", "person", "appear", "govern", "notice", "certain", "machine", "figure", "correct", "beauty", "contain", "develop", "minute", "strong", "special", "behind", "produce", "street", "multiply", "nothing", "course", "object", "decide", "surface", "island", "system", "record", "common", "possible", "wonder", "thousand", "equate", "brought", "distant", "language", "present", "engine", "position", "material", "settle", "weight", "general", "matter", "circle", "include", "divide", "syllable", "perhaps", "sudden", "square", "reason", "length", "represent", "subject", "region", "energy", "probable", "brother", "believe", "fraction", "forest", "window", "summer", "exercise", "winter", "written", "instrument", "bright", "weather", "million", "finish", "flower", "clothe", "strange", "village", "whether", "paragraph", "describe", "either", "result", "century", "consider", "phrase", "silent", "temperature", "finger", "industry", "excite", "natural", "middle", "moment", "spring", "observe", "straight", "consonant", "nation", "dictionary", "method", "section", "surprise", "design", "experiment", "bottom", "single", "twenty", "crease", "melody", "office", "receive", "symbol", "trouble", "except", "suggest", "garden", "choose", "collect", "control", "decimal", "gentle", "captain", "practice", "separate", "difficult", "doctor", "please", "protect", "locate", "character", "insect", "caught", "period", "indicate", "history", "effect", "electric", "expect", "modern", "element", "student", "corner", "supply", "imagine", "provide", "capital", "danger", "soldier", "process", "operate", "necessary", "create", "neighbor", "rather", "compare", "string", "depend", "famous", "dollar", "stream", "triangle", "planet", "colony", "search", "yellow", "desert", "current", "continue", "success", "company", "subtract", "particular", "opposite", "shoulder", "spread", "arrange", "invent", "cotton", "determine", "chance", "gather", "stretch", "property", "column", "molecule", "select", "repeat", "require", "prepare", "plural", "continent", "oxygen", "pretty", "season", "solution", "magnet", "silver", "branch", "suffix", "especially", "afraid", "sister", "discuss", "forward", "similar", "experience", "bought", "evening", "condition", "valley", "double", "arrive", "master", "parent", "division", "substance", "connect", "original", "station", "charge", "proper", "segment", "instant", "market", "degree", "populate", "support", "speech", "nature", "motion", "liquid", "quotient"
];

ReactDOM.render(
    <Game
        words={words}
    />,
    document.getElementById('container')
);

new CircleType(document.getElementById('circle-type'));
