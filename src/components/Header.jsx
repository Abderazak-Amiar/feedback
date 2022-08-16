import PropTypes from 'prop-types'
function Header({text, bkgColor, colorText}) {
  return (
    <div style={{backgroundColor : bkgColor, color : colorText, textAlign : "center"}}>{text}</div>
  )
}

Header.defaultProps = {
    text : "Reviews",
    bkgColor : "white",
    colorText : "blue"
   
};

Header.propTypes = {
    text : PropTypes.string
}
export default Header