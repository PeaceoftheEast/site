import React from 'react'
import PropTypes from 'prop-types'

import MediaIcons from './MediaIcons';
import ncass from '../images/ncass.png'
import hygiene from '../images/'Hygiene-Rating.png'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
      <MediaIcons/>
        <div className="ncass">
          <img src={ncass}/>
        </div>
    </footer> 

)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
