import React from 'react'
import GameBigCircle from './GameBigCircle'

class GameResult extends React.Component {

  state = {
    outcomeVisibility: false,
    outcome: '',
    currentResult: 0
  }

  componentDidMount() {
    const oppose = ['scissorsBig', 'paperBig', 'rockBig', 'lizardBig', 'spockBig'];
    const index = Math.floor(Math.random() * oppose.length);

    setTimeout(() => {
      const houseResult = document.querySelector('.gameResult__house');
      houseResult.classList.remove('gameResult__house');
      houseResult.classList.add(oppose[index]);

      this.outcome(oppose, index)
    }, 1000)
  }

  outcome = (oppose, index) => {

    if (oppose[index] === this.props.chosen) {
      this.setState({
        outcomeVisibility: true,
        outcome: "It's a tie!"
      })
    }

    if (oppose[index] === 'scissorsBig' && this.props.chosen === 'rockBig') {
      this.setState({
        outcomeVisibility: true,
        outcome: "You Win",
        currentResult: 1
      })
    }

    if (oppose[index] === 'scissorsBig' && this.props.chosen === 'paperBig') {
      this.setState({
        outcomeVisibility: true,
        outcome: "You Lose",
        currentResult: -1
      })
    }

    if (oppose[index] === 'scissorsBig' && this.props.chosen === 'lizardBig') {
      this.setState({
        outcomeVisibility: true,
        outcome: "You Lose",
        currentResult: -1
      })
    }

    if (oppose[index] === 'scissorsBig' && this.props.chosen === 'spockBig') {
      this.setState({
        outcomeVisibility: true,
        outcome: "You Win",
        currentResult: 1
      })
    }


    if (oppose[index] === 'rockBig' && this.props.chosen === 'scissorsBig') {
      this.setState({
        outcomeVisibility: true,
        outcome: "You Lose",
        currentResult: -1
      })
    }

    if (oppose[index] === 'rockBig' && this.props.chosen === 'paperBig') {
      this.setState({
        outcomeVisibility: true,
        outcome: "You Win",
        currentResult: 1
      })
    }

    if (oppose[index] === 'rockBig' && this.props.chosen === 'lizardBig') {
      this.setState({
        outcomeVisibility: true,
        outcome: "You Lose",
        currentResult: -1
      })
    }

    if (oppose[index] === 'rockBig' && this.props.chosen === 'spockBig') {
      this.setState({
        outcomeVisibility: true,
        outcome: "You Win",
        currentResult: 1
      })
    }

    if (oppose[index] === 'paperBig' && this.props.chosen === 'scissorsBig') {
      this.setState({
        outcomeVisibility: true,
        outcome: "You Win",
        currentResult: 1
      })
    }

    if (oppose[index] === 'paperBig' && this.props.chosen === 'rockBig') {
      this.setState({
        outcomeVisibility: true,
        outcome: "You Lose",
        currentResult: -1
      })
    }

    if (oppose[index] === 'paperBig' && this.props.chosen === 'lizardBig') {
      this.setState({
        outcomeVisibility: true,
        outcome: "You Win",
        currentResult: 1
      })
    }

    if (oppose[index] === 'paperBig' && this.props.chosen === 'spockBig') {
      this.setState({
        outcomeVisibility: true,
        outcome: "You Lose",
        currentResult: -1
      })
    }

    if (oppose[index] === 'lizardBig' && this.props.chosen === 'scissorsBig') {
      this.setState({
        outcomeVisibility: true,
        outcome: "You Win",
        currentResult: 1
      })
    }

    if (oppose[index] === 'lizardBig' && this.props.chosen === 'paperBig') {
      this.setState({
        outcomeVisibility: true,
        outcome: "You Lose",
        currentResult: -1
      })
    }

    if (oppose[index] === 'lizardBig' && this.props.chosen === 'rockBig') {
      this.setState({
        outcomeVisibility: true,
        outcome: "You Win",
        currentResult: 1
      })
    }

    if (oppose[index] === 'lizardBig' && this.props.chosen === 'spockBig') {
      this.setState({
        outcomeVisibility: true,
        outcome: "You Lose",
        currentResult: -1
      })
    }

    if (oppose[index] === 'spockBig' && this.props.chosen === 'scissorsBig') {
      this.setState({
        outcomeVisibility: true,
        outcome: "You Lose",
        currentResult: -1
      })
    }

    if (oppose[index] === 'spockBig' && this.props.chosen === 'paperBig') {
      this.setState({
        outcomeVisibility: true,
        outcome: "You Win",
        currentResult: 1
      })
    }

    if (oppose[index] === 'spockBig' && this.props.chosen === 'rockBig') {
      this.setState({
        outcomeVisibility: true,
        outcome: "You Lose",
        currentResult: -1
      })
    }

    if (oppose[index] === 'spockBig' && this.props.chosen === 'lizardBig') {
      this.setState({
        outcomeVisibility: true,
        outcome: "You win",
        currentResult: 1
      })
    }

  }

  render() {
    return (
      <section className='gameResult'>
        <div className="gameResult__chosen">
          <GameBigCircle classBigCircle={this.props.chosen} />
          <div className="gameResult__house"></div>
          <div className="gameResult__outcome">
            {this.state.outcomeVisibility ?
              <>
                <h2 className='gameResult__win'>{this.state.outcome}</h2>
                <button className="gameResult__again" onClick={() => this.props.playAgain(this.state.currentResult)}>Play Again</button>
              </>
              : null}
          </div>
        </div>
      </section>
    )
  }
}

export default GameResult
