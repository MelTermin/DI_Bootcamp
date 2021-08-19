import QuotesAndAuthor from './Components/QuotesAndAuthor'
import quotes from './Components/QuotesDb'
import React from 'react';
import './App.css';

class App extends React.Component  {
  constructor(){
    super();
    this.state = {
      quote:quotes[0].quote,
      author:quotes[0].author
    }
console.log(this.state)
console.log(quotes.length)
  }
  randomQuote() {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    return quotes[randomNumber];
    
  }
  shuffleQuotes(array){
    return array.sort(()=>Math.random()-0.5)
  }

  handleClick = () => {
    const generateRandomQuote = this.randomQuote();
    this.setState({
      quote: generateRandomQuote.quote,
      author: generateRandomQuote.author
    });
    this.shuffleQuotes(quotes)
  };

  randomColor() {
    const color = `rgb(
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)})`;
    return color;
  }



  render() {
  return (
    <div >
     <QuotesAndAuthor quote= {this.state.quote} author= {this.state.author} displayColor={this.randomColor}
    handleClick={this.handleClick} ></QuotesAndAuthor>
    </div>
  );
}
}

export default App;
