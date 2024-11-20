let usedQuotes = [];

function changeQuote() {
    const quotes = [
        "Be yourself; everyone else is already taken.",
        "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        "So many books, so little time."
    ];

    if (usedQuotes.length === quotes.length) {
        usedQuotes = [];
    }

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (usedQuotes.includes(randomIndex));

    usedQuotes.push(randomIndex);
    document.getElementById('quote').textContent = quotes[randomIndex];
}

document.getElementById('changeQuote').addEventListener('click', changeQuote);






