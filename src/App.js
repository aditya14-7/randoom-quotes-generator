import React, { Component, Fragment } from 'react';
import axios from 'axios';

import './App.css';
import Navbar from './Navbar';

class App extends Component {
  state = {
    quote: '',
    author: ''
  };

  componentDidMount() {
    this.fetchQuotes();
  }

  fetchQuotes = () => {
    axios.get('https://type.fit/api/quotes')
      .then((response) => {
        const randomIndex = Math.round(Math.random() * response.data.length);
        // console.log(response.data[randomIndex].text);
        // console.log(response.data[randomIndex].author);
        this.setState({
          quote: response.data[randomIndex].text,
          author: response.data[randomIndex].author
        })

      })
  }



  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="app">
          <div className="card">
            <h1 className="quote">{this.state.quote}</h1>
            <p className="author">-{this.state.author}-</p>
            <button class="icon-btn add-btn" onClick={this.fetchQuotes}>
              <div class="add-icon"></div>
              <div class="btn-txt">New Quote</div>
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;