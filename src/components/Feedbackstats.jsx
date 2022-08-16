import React from 'react'
import PropTypes from 'prop-types'
function Feedbackstats({feedback}) {

    const average = feedback.reduce((prev, curr)=>{return prev+curr.rating},0)/feedback.length
            average.toFixed(1).replace(/[.,]0$/, "")
  return (
    <div className='feedback-stats'>

        <h4>{feedback.length} Reviews</h4>
        <h4>Rating : {isNaN(average) ? 0 : average} </h4>
    </div>
  )
}

Feedbackstats.propTypes = {
    feedback : PropTypes.array.isRequired,
}
export default Feedbackstats