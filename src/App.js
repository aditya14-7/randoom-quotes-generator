import React from 'react';
import axios from 'axios';

import './App.css';

class App extends React.Component {
  state = { quote: '' };

  componentDidMount() {
    this.fetchQuotes();
  }

  fetchQuotes = () => {
    axios.get('https://type.fit/api/quotes')
      .then((response) => {
        const randomIndex = Math.round(Math.random() * response.data.length);
        // console.log(response.data[randomIndex].text);
        this.setState({
          quote: response.data[randomIndex].text
        })

      })
  }



  render() {
    return (
      //  <h1>{this.state.quote}</h1>
      <div className="app">
        <div className="card">
          <h1 className="heading">{this.state.quote}</h1>
          <button className="button" onClick={this.fetchQuotes}>
            <span>New Quote</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;