import React from 'react'

function Rules(props) {
  return (
    <section className='rules'>
      <button onClick={props.showRules} className="rules__btn">
        RULES
      </button>
    </section>
  )
}

export default Rules
