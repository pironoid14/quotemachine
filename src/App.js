import React, {useState, useEffect} from 'react';
import './App.css';

 let  quoteDBUrl = "https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"

function App() {
  const[quote,setQuote] =useState(0)
  const[author, setAuthor]=useState(0)
  const[randomNumber,setRandomNumber]=useState(0)
  const[quotesArray, setQuotesArray]=useState(null)

  const fetchQuotes = async (url) => {
    const response = await fetch(url)
    const parsedJSON = await response.json()
    setQuotesArray(parsedJSON.quotes) 
    console.log(parsedJSON)
   }  
  useEffect(() =>{
   fetchQuotes(quoteDBUrl)
  }, )

  const getRandomQuote = () => {
    let randomInteger = Math.floor(quotesArray.length * Math.random())
    setRandomNumber(randomInteger)
    setQuote(quotesArray[randomInteger].quote)
    setAuthor(quotesArray[randomInteger].author)

  }

  return (
    <div className="App">
      <header className="App-header">
        <div id = "quote-box">
       <h1>Random Number:{randomNumber}</h1>
        
        <p id="text">{quote}</p>
        <p id = "author">-{author}</p>
        <button id="new-quote" onClick={()=>getRandomQuote()}>
          Generate a Random Quote
        </button>
        <a id="tweet-quote"href= 
        {encodeURI(`http://www.twitter.com/intent/tweet?text=${quote}-${author}`)}>Tweet-Quote</a>
        </div>
      </header>
    </div>
  );
}

export default App;
