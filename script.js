document.addEventListener('DOMContentLoaded', getQuote);

const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const newQuoteBtn = document.getElementById('new-quote-btn');

newQuoteBtn.addEventListener('click', getQuote);

async function getQuote() {
    try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        quoteText.textContent = data.content;
        quoteAuthor.textContent = `- ${data.author}`;
    } catch (error) {
        console.error('Error fetching quote:', error.message);
        quoteText.textContent = 'Failed to fetch a quote.';
        quoteAuthor.textContent = '';
    }
}
