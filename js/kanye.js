function loadQuote(){
    fetch('https://api.kanye.rest')
    .then(res => res.json())
    .then(data =>displayQuote(data) )
;}


function displayQuote(quotes){
    const getQuote = document.getElementById('quote')
    getQuote.innerText= quotes.quote;
}