import React from 'react'

function GameCircle(props) {
  return (
    <div className={`${props.circleClass} ${props.won}`} onClick={props.click}>

    </div>
  )
}

export default GameCircle
