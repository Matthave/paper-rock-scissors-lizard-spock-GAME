import React from 'react'

function RulesBtn(props) {
  return (
    <section className='rulesBtn'>
      <button onClick={props.showRules} className="rulesBtn__btn">
        RULES
      </button>
    </section>
  )
}

export default RulesBtn
