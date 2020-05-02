import React, { Component } from 'react';
import Result from './Result';
import Game from './Game';
import Rules from './Rules';
import GameResult from './GameResult';
import '../css/style.css';

class App extends Component {
  state = {
    rulesVisibility: false,
    resultVisibilty: false,
    currentChosen: '',
    currentScore: 0
  }
  clickOption = (choosen) => {
    this.setState({
      currentChosen: choosen
    })
    this.setState({
      resultVisibilty: true
    })
  }

  playAgain = (result) => {
    this.setState({
      resultVisibilty: false,
      currentChosen: '',
      currentScore: this.state.currentScore + result
    })
  }

  showRules = () => {
    this.setState({
      rulesVisibility: !this.state.rulesVisibility
    })
  }

  render() {
    return (
      <div className="App">
        <Result currentScore={this.state.currentScore} />
        {this.state.resultVisibilty ? <GameResult
          chosen={this.state.currentChosen}
          playAgain={this.playAgain}
        /> : <Game click={this.clickOption} />}
        <Rules showRules={this.showRules} />
      </div>
    );
  }
}

export default App;
