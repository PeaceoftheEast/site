import React from 'react'
import PropTypes from 'prop-types'

import MediaIcons from './MediaIcons';
import Gallery from './Gallery';

import pic01 from '../images/pic01.jpg'
import unitDesign from '../images/unit-design.png'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About Us</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <p>Lifelong friends, myself and Will (a.k.a. Snipadvisor - we'll get to that!) have been fellow festival goers and keen foodies for as long as we can remember. Taking regular, and much-needed breaks from getting down to our favourite beats, the hunt for the perfect treat to refuel would commence. Party goers turned food critics we scour the whole festival site, sometimes several times until we find the perfect staple. Sitting down to sample the delights for what the finest traders have to offer we would reminisce about our past faves and the not so's, often flicking through the pictures of the traders we'd loved for their food in the past or just because they look so damn cool!</p>
          <p>Festival season DONE, that's it for another year. I don't think so!. Meeting up at our houses, it's time to recreate and reinvent our favourite street food. Discussions long into the night into what food the scene is missing. After a lengthy trip to Vietnam Will, or  now known as the Snipadvisor, for his awesomely detailed account of his time there on the banh mi trail. It was now obvious what was missing. After sampling and re-sampling,  we pulled the legendarily identifiable street food back into the 21st century, seeking out the best breads and finest ingredients, alas, we had reached our holy grail. The perfect banh mi.</p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Food</h2>
          <span className="image main"><img src={unitDesign} alt="" /></span>
          <p>At Peace of the East, the inspiration for our banh mi comes from sampling the best flavours and spices from the East. Our perfect sandwich enables party goers to grab something both delicious and nutritious to keep energy levels up. At Peace of the East we know that Monday morning feeling when you think that a health kick needs to start, but why wait, swap your banh mi for our seasoned rice for those healthier heads on the field. Perhaps you're feeling really naughty, take a real twist and bed your munch on some of our freshly cooked crispy fries. We really do aim to please the masses. All come with our signature pickled slaw and sriracha aiolli to really put that icing on the cake.</p>
          <p>Our footprint is at the forefront of our minds when it comes to catering. All our food is both ethically and sustainably sourced, from local suppliers where possible. We also strive to be plastic-free, therefore all our packaging is both plastic free and biodegradable. We also recycle all possible packaging that our that our goods are supplied in, and recycle all of our cooking oil used, giving planet earth that much needed hug back. </p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <Gallery/>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact Us</h2>
          <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contact" />
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