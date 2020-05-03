import React, { Component } from 'react';
import Result from './Result';
import Game from './Game';
import RulesBtn from './RulesBtn';
import GameResult from './GameResult';
import Rules from './Rules';
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
        <RulesBtn showRules={this.showRules} />
        {this.state.rulesVisibility ? <Rules showRules={this.showRules} /> : null}
      </div>
    );
  }
}

export default App;
