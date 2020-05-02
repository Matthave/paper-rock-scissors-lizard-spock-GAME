import React from 'react'
import pentagram from '../images/bg-pentagon.svg';
import GameCircle from './GameCircle';

function Game(props) {
  return (
    <section className='game'>
      <img src={pentagram} alt="" className="game__img" />
      <GameCircle click={() => props.click('scissorsBig')} circleClass='circleScissors' />
      <GameCircle click={() => props.click('paperBig')} circleClass='circlePaper' />
      <GameCircle click={() => props.click('rockBig')} circleClass='circleRock' />
      <GameCircle click={() => props.click('lizardBig')} circleClass='circleLizard' />
      <GameCircle click={() => props.click('spockBig')} circleClass='circleSpock' />
    </section>
  )
}

export default Game
