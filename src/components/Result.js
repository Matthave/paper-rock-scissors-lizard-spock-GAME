import React from 'react'
import logoBonus from '../images/logo-bonus.svg';

function Result(props) {
  return (
    <section className='result'>
      <img className='result__logo' src={logoBonus} alt="logoGame" />
      <div className="result__score">
        <h3 className="result__scoreText">SCORE</h3>
        <h2 className="result__currentScore">{props.currentScore}</h2>
      </div>
    </section>
  )
}

export default Result
