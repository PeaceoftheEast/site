/**
 * Created by will on 23/01/19.
 */
import React from 'react';
import pic03 from '../images/pic03.jpg'

const Gallery = () => {
  return (
    <div>
      <h2 className="major">Gallery</h2>
      <span className="image main"><img src={pic03} alt="" /></span>
    </div>
  )
};

export default Gallery;