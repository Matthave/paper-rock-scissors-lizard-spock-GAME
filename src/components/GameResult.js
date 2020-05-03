import React from 'react'
import GameBigCircle from './GameBigCircle'

class GameResult extends React.Component {

  state = {
    widthGrow: false,
    outcomeVisibility: false,
    outcome: '',
    currentResult: 0,
    won: null
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
    this.setState({
      widthGrow: true
    })

    setTimeout(() => {
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
          currentResult: 1,
          won: 'win'
        })
      }

      if (oppose[index] === 'scissorsBig' && this.props.chosen === 'paperBig') {
        this.setState({
          outcomeVisibility: true,
          outcome: "You Lose",
          currentResult: -1,
          won: 'lose'
        })
      }

      if (oppose[index] === 'scissorsBig' && this.props.chosen === 'lizardBig') {
        this.setState({
          outcomeVisibility: true,
          outcome: "You Lose",
          currentResult: -1,
          won: 'lose'
        })
      }

      if (oppose[index] === 'scissorsBig' && this.props.chosen === 'spockBig') {
        this.setState({
          outcomeVisibility: true,
          outcome: "You Win",
          currentResult: 1,
          won: 'win'
        })
      }


      if (oppose[index] === 'rockBig' && this.props.chosen === 'scissorsBig') {
        this.setState({
          outcomeVisibility: true,
          outcome: "You Lose",
          currentResult: -1,
          won: 'lose'
        })
      }

      if (oppose[index] === 'rockBig' && this.props.chosen === 'paperBig') {
        this.setState({
          outcomeVisibility: true,
          outcome: "You Win",
          currentResult: 1,
          won: 'win'
        })
      }

      if (oppose[index] === 'rockBig' && this.props.chosen === 'lizardBig') {
        this.setState({
          outcomeVisibility: true,
          outcome: "You Lose",
          currentResult: -1,
          won: 'lose'
        })
      }

      if (oppose[index] === 'rockBig' && this.props.chosen === 'spockBig') {
        this.setState({
          outcomeVisibility: true,
          outcome: "You Win",
          currentResult: 1,
          won: 'win'
        })
      }

      if (oppose[index] === 'paperBig' && this.props.chosen === 'scissorsBig') {
        this.setState({
          outcomeVisibility: true,
          outcome: "You Win",
          currentResult: 1,
          won: 'win'
        })
      }

      if (oppose[index] === 'paperBig' && this.props.chosen === 'rockBig') {
        this.setState({
          outcomeVisibility: true,
          outcome: "You Lose",
          currentResult: -1,
          won: 'lose'
        })
      }

      if (oppose[index] === 'paperBig' && this.props.chosen === 'lizardBig') {
        this.setState({
          outcomeVisibility: true,
          outcome: "You Win",
          currentResult: 1,
          won: 'win'
        })
      }

      if (oppose[index] === 'paperBig' && this.props.chosen === 'spockBig') {
        this.setState({
          outcomeVisibility: true,
          outcome: "You Lose",
          currentResult: -1,
          won: 'lose'
        })
      }

      if (oppose[index] === 'lizardBig' && this.props.chosen === 'scissorsBig') {
        this.setState({
          outcomeVisibility: true,
          outcome: "You Win",
          currentResult: 1,
          won: 'win'
        })
      }

      if (oppose[index] === 'lizardBig' && this.props.chosen === 'paperBig') {
        this.setState({
          outcomeVisibility: true,
          outcome: "You Lose",
          currentResult: -1,
          won: 'lose'
        })
      }

      if (oppose[index] === 'lizardBig' && this.props.chosen === 'rockBig') {
        this.setState({
          outcomeVisibility: true,
          outcome: "You Win",
          currentResult: 1,
          won: 'win'
        })
      }

      if (oppose[index] === 'lizardBig' && this.props.chosen === 'spockBig') {
        this.setState({
          outcomeVisibility: true,
          outcome: "You Lose",
          currentResult: -1,
          won: 'lose'
        })
      }

      if (oppose[index] === 'spockBig' && this.props.chosen === 'scissorsBig') {
        this.setState({
          outcomeVisibility: true,
          outcome: "You Lose",
          currentResult: -1,
          won: 'lose'
        })
      }

      if (oppose[index] === 'spockBig' && this.props.chosen === 'paperBig') {
        this.setState({
          outcomeVisibility: true,
          outcome: "You Win",
          currentResult: 1,
          won: 'win'
        })
      }

      if (oppose[index] === 'spockBig' && this.props.chosen === 'rockBig') {
        this.setState({
          outcomeVisibility: true,
          outcome: "You Lose",
          currentResult: -1,
          won: 'lose'
        })
      }

      if (oppose[index] === 'spockBig' && this.props.chosen === 'lizardBig') {
        this.setState({
          outcomeVisibility: true,
          outcome: "You win",
          currentResult: 1,
          won: 'win'
        })
      }
    }, 500)

  }

  render() {
    const { widthGrow, outcome, outcomeVisibility, currentResult, won } = this.state;

    return (
      <section className='gameResult'>
        <div className={widthGrow ? "gameResult__chosen gameResult__chosen--bigger" : "gameResult__chosen"}>
          <div className="gameResult__yourChosen">
            <GameBigCircle classBigCircle={this.props.chosen} win={won} />
            <h2 className="gameResult__yourChosenTxt">You Picked</h2>
          </div>

          <div className="gameResult__houseChosen">
            <div className='gameResult__house' id={won === 'lose' ? 'win' : null}></div>
            <h2 className="gameResult__houseChosenTxt">The House Picked</h2>

          </div>


          <div className={outcomeVisibility ? 'gameResult__outcome gameResult__outcome--visibility' : 'gameResult__outcome'}>
            {this.state.outcomeVisibility ?
              <>
                <h2 className='gameResult__win'>{outcome}</h2>
                <button className="gameResult__again" onClick={() => this.props.playAgain(currentResult)}>Play Again</button>
              </>
              : null}
          </div>
        </div>
      </section>
    )
  }
}

export default GameResult
