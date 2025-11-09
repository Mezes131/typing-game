const quotes = [
    'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
    'There is nothing more deceptive than an obvious fact.',
    'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
    'I never make exceptions. An exception disproves the rule.',
    'What one man can invent another can discover.',
    'Nothing clears up a case so much as stating it to another person.',
    'Education never ends, Watson. It is a series of lessons, with the greatest for the last.',
    'to be or not to be, that is the question',
    'All that glitters is not gold.',
    'The only thing we have to fear is fear itself.',
    'I think, therefore I am.',
]

let words = [];
let wordIndex = 0;
let startTime = Date.now();

//page elements
const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');

document.getElementById('start-button').addEventListener('click', () => {
    //get a random quote
    const quoteIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[quoteIndex];
    //put the quote into an array of words
    words = quote.split(' ');
    //reset the word index for tracking
    wordIndex = 0;
    //UI updates
    //create an array of span elements so we can set a class
    const spanWords = words.map(function(word) { return `<span>${word} </span>`});  
    //convert into a string and set as innerHTML on quote display
    quoteElement.innerHTML = spanWords.join('');
    //highlight the first word
    quoteElement.childNodes[0].className = 'highlight';
    //clear any prior messages
    messageElement.innerText = '';

    //setup the textbox
    //clear the textbox
    typedValueElement.value = '';
    //set focus
    typedValueElement.focus();

    //set the event handler
    
    //start the timer
    startTime = Date.now();
});
typedValueElement.addEventListener('input', () => {
    //get the current word
    const currentWord = words[wordIndex];
    //get the current value
    const typedValue = typedValueElement.value;
    if (typedValue === currentWord && wordIndex === words.length - 1) {
        //end of sentence
        //display success
        const elapsedTime = new Date().getTime() - startTime;
        const message = `Congratulations! You finished in ${elapsedTime / 1000} seconds.`;
        messageElement.innerText = message;
    } else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
        //end of word
        //clear the typedValueElement for the new word  
        typedValueElement.value = '';
        //move to the next word
        wordIndex++;
        //reset the class name for all words
        for (const wordElement of quoteElement.childNodes) {
            wordElement.className = '';
        }
        //highlight the new word
        quoteElement.childNodes[wordIndex].className = 'highlight';
    } else if (currentWord.startsWith(typedValue)) {
        //currently correct
        typedValueElement.className = '';
    } else {
        //error state
        typedValueElement.className = 'error';
    }
});