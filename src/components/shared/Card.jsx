import React from 'react'
import  PropTypes from  'prop-types'
function Card({children, darkmode}) {
//   return (
//     <div className={`card ${darkmode && 'reverse'}`}>{children}</div>
//   )

return <div className='card' style={{backgroundColor: darkmode ? "rgba(0,0,0,0.4)" : "#fff", color : darkmode ? "#fff" : "#000"

}}>{children}</div>
}

Card.defaultProps = {
    darkmode : false
}
Card.propTypes = {
    children : PropTypes.node.isRequired,
    darkmode : PropTypes.bool,
}

export default Card