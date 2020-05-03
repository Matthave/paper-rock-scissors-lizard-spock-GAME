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
    if (this.state.currentScore === 0 && result === -1) {
      this.setState({
        resultVisibilty: false,
        currentChosen: '',
      })
    } else {
      this.setState({
        resultVisibilty: false,
        currentChosen: '',
        currentScore: this.state.currentScore + result
      })
    }
  }

  showRules = () => {
    this.setState({
      rulesVisibility: !this.state.rulesVisibility
    })
  }

  render() {
    const { currentScore, resultVisibilty, currentChosen, rulesVisibility } = this.state;
    return (
      <div className="App">
        <Result currentScore={currentScore} />
        {resultVisibilty ? <GameResult
          chosen={currentChosen}
          playAgain={this.playAgain}
        /> : <Game click={this.clickOption} />}
        <RulesBtn showRules={this.showRules} />
        {rulesVisibility ? <Rules showRules={this.showRules} /> : null}
      </div>
    );
  }
}

export default App;
