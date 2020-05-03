import React from 'react'
import rulesImg from '../images/image-rules-bonus.svg'

function Rules(props) {
  return (
    <div className='rules'>
      <div className="rules__wrap">
        <div className="rules__escape" onClick={props.showRules}></div>
        <img className='rules__img' src={rulesImg} alt="" />
      </div>
    </div>
  )
}

export default Rules
