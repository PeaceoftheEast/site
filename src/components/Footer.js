import React from 'react'
import PropTypes from 'prop-types'

import MediaIcons from './MediaIcons';
import ncass from '../images/ncass.png'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
      <MediaIcons/>
        <div className="ncass">
          <img src={ncass}/>
        </div>

        <p className="copyright">&copy; Gatsby Starter - Dimension. Design: <a href="https://html5up.net">HTML5 UP</a>. Built with: <a href="https://www.gatsbyjs.org/">Gatsby.js</a></p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
