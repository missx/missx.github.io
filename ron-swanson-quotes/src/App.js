import React, { Component } from 'react';

import TitleComponent from './components/TitleComponent/TitleComponent.js';
import ButtonComponent from './components/ButtonComponent/ButtonComponent.js';
import QuoteComponent from './components/QuoteComponent/QuoteComponent.js';

import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Get your Ron Swanson\'s Quote!',
      quote: '',
      isRon: true
    }
    this.getQuote = this.getQuote.bind(this);
    this.disableButton = false;
  }

  getQuote() {
    this.setState({
      disableButton: true
    });

    let randomNumber = Math.floor(Math.random() * 10) + 1;
    const leslieNumber = 7;
    
    if (randomNumber !== leslieNumber) {
      
      fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
      .then((response) => {
        return response.json();
      }).then((quote) => {
        this.setState({
          quote,
          disableButton: false,
          isRon: true
        });        
      });
    } else {
      const leslieQuote = 'You know my code, hoes before bros. Uteruses before duderuses. Ovaries before brovaries.';
      this.setState({
        quote: leslieQuote,
        disableButton: false,
        isRon: false
      });      
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TitleComponent title={this.state.title}/>
        </header>
        <div className="App-intro">
          <ButtonComponent onClickQuote={this.getQuote} disabled={this.state.disableButton}/>
          <QuoteComponent quote={this.state.quote} isRon={this.state.isRon}/>
        </div>
      </div>
    );
  }
}

export default App;
