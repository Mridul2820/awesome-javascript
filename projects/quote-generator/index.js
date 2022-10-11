const authorsAndQuotes = {
    'A.P.J Abdul Kalam': ["You have to dream before your dreams can come true.",
        "Look at the sky. We are not alone. The whole universe is friendly to us and conspires only to give the best to those who dream and work.",
        "God, our Creator, has stored within our minds and personalities, great potential strength and ability. Prayer helps us tap and develop these powers.",
        "Let me define a leader. He must have vision and passion and not be afraid of any problem. Most importantly, he must work with integrity."]

    , 'Benjamin Franklin': ["Either write something worth reading or do something worth writing.",
        "The only way to do great work is to love what you do.",
        "If you can dream it, you can achieve it."]

    , 'Bill Gates': ["As we look ahead into the next century, leaders will be those who empower others.",
        "Pessimism leads to weakness, optimism to power."]

    , 'Albert Enstein': ["There comes a time when the mind takes a higher plane of knowledge but can never prove how it got there. ",
        "The only real valuable thing is intuition.",
        "The difference between stupidity and genius is that genius has its limits."]

    , 'Steve Jobs': ["Your time is limited, so don’t waste it living someone else’s life.", "Stay hungry. Stay foolish.", "Have the courage to follow your heart and intuition."]

    , 'Nelson Mandela': ["It always seems impossible until it’s done.", "Resentment is like drinking poison and then hoping it will kill your enemies.", "It always seems impossible until it’s done.",
        "Resentment is like drinking poison and then hoping it will kill your enemies."]

    , 'Walt Disney': ["All our dreams can come true, if we have the courage to pursue them.", "The way to get started is to quit talking and begin doing.",
        "The way to get started is to quit talking and begin doing."]
}



const contentLength = Object.keys(authorsAndQuotes).length - 1;
const authors = Object.keys(authorsAndQuotes);
const authorsLength = authors.length

function RandomNumGen(i = 0, j) {
    let x = i + (Math.random() * (j - i + 1));
    console.log(Math.floor(x));
    return Math.floor(x);
}

const quote = document.querySelector('#quote');
console.log(quote);
const author = document.querySelector('#author');
console.log(author);
const nextButton = document.querySelector('#next');

function changeContent() {
    let author_index = RandomNumGen(0, contentLength);
    console.log("Author index - " + author_index);

    let newAuthor = authors[author_index];
    console.log(newAuthor);
    author.innerText = newAuthor;

    var quotes = authorsAndQuotes[newAuthor];
    console.log(quotes);
    quotesLength = quotes.length;
    var quotes_index = RandomNumGen(0, quotesLength - 1);
    console.log(quotes_index)
    quote.innerText = quotes[quotes_index]

    return quotes[quotes_index];
}

nextButton.addEventListener('click', changeContent)