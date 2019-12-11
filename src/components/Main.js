import React from 'react'
import PropTypes from 'prop-types'

import MediaIcons from './MediaIcons';
import Gallery from './Gallery';

import pic01 from '../images/pic01.jpg'
import tofupic from '../images/tofu-banhmi.png'
import viethead from '../images/viet-face.png'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About Us</h2>
          <span className="image main"><img src={viethead} alt="" /></span>
          <p>CATER-INK have been providing a professional service at a range of events of different sizes. </p>
          <p>We offer a fully-flexible menu for specific needs and requirements. Of course using both fresh and high quality ingredients. </p>
          <p>Not forgetting of course our fun and friendly staff who come with free big smiles!</p>
          <p>Our experience within the catering industry, event catering and global food travel over the years, has allowed us to continually surpass expectation and satisfy the masses.  </p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Food</h2>
          <span className="image main"><img src={tofupic} alt="" /></span>
          <p>Peace of the East specialise in Southeast Asian street food, with flavours inspired from all across the east, so we know how important it is to use both the finest and freshest of ingredients. There is literally no other way to replicate such depth and intricate cooking, without this attention to detail. We aim to cater for a diverse range of tastes and dietary requirements, by allowing everybody to choose what accompanies their main, offering healthier options for those heavy heads!</p>
          <p>We are passionate about the environment as well as our food. Our impact is at the forefront of our minds when it comes to catering. All our food is both ethically and sustainably sourced, from local suppliers where possible. We also strive to be plastic-free; all our packaging is made from biodegradable material. Packaging  from our suppliers is recycled where possible, as is our cooking oil. </p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <Gallery/>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact Us</h2>
          <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="bot-field" value="contact" />
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <MediaIcons/>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main