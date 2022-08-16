import React, { useState } from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types'
import {FaTimes} from 'react-icons/fa'
function FeedbackItem({item, handleDelete}) {

   
  return (
     <Card>
        <div className="num-display">{item.rating}</div>
        <div className="text-display">{item.text}</div>
        <button className="close" onClick={()=>handleDelete(item.id)}>
          <FaTimes/>
        </button>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item : PropTypes.object.isRequired,
}

export default FeedbackItem