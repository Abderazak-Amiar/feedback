import React, { useState, useContext } from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types'
import {FaTimes} from 'react-icons/fa'
import FeedbackContext from '../context/FeedbackContext'
function FeedbackItem({item}) {

  const {handleDelete} = useContext(FeedbackContext)
   
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