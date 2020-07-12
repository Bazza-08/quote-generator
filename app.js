const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const button = document.querySelector('button');

const quotes = [
    '"The ability to find humor in the ups and downs of life can give us a new perspective and a new way of viewing our circumstances."',
    '"There is a difference between loving someone\'s sense of humor and being thankful for the times of laughter we enjoy with him or her."',
    '"Laugh and find humor in everyday."',
    '"Keep your sense of humor. As General Joe Stillwell said, \'The higher a monkey climbs, the more you see of his behind.\'"',
    '"Good humor brings smiles and giggles that brightens your day."'
];
const authors = [
    "Heidi Catherine Culbertson",
    "Krystal Kuehn",
    "Catherine Pulsifer",
    "Donald Rumsfeld",
    "Kate Summers"
];

function generateQuote() {
    var randomNum = Math.floor(Math.random() * quotes.length);
    quote.innerHTML= quotes[randomNum];
    author.innerHTML = authors[randomNum]; 
}

button.addEventListener('click', generateQuote);