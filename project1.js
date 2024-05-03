const quoteContainer = document.querySelector('#quote-container');
const quoteText = document.querySelector('#quote');
const authorText = document.querySelector('#author');
const twitterBtn = document.querySelector('#twitter');
const newQuoteBtn = document.querySelector('#new-quote');
const loader = document.querySelector('#loader');

let apiQuotes = []; //global variable , we used let here because later we are changing value from an empty array to quotes

const loading = ()=>{
    loader.hidden = false;
    quoteContainer.hidden = true;
}
const complete = ()=>{
    quoteContainer.hidden = false;
    loader.hidden = true;
}

const newQuote = () =>{
    loading();
    //pick random quote
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    //console.log(quotes);
    //authorText.textContent = quote.author;
    if(!quote.author){
        authorText.textContent = 'Unknown author';
    }else{
        authorText.textContent = quote.author;
    }
    //lenth of quote if longer
    if(quote.text.length >100){
        quoteText.classList.add('long-quote');
    }else{
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent = quote.text;
    complete();
}


const getQutes = async() => {
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try{
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    //console.log(apiQuotes);
    newQuote();
    }catch (error){
        alert('error found');
    }
}
//tweet code here
const twewtQuote = ()=>{
    const tweetUrl = "";
    window.open(tweetUrl, '_blank');
}
///tweet end here

//new quote on click
newQuoteBtn.addEventListener('click', newQuote);
//twitterBtn.addEventListener('click', twewtQuote);

//on load
getQutes();