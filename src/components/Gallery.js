/**
 * Created by will on 23/01/19.
 */
import React from 'react';
import pic03 from '../images/pic03.jpg'
import banhMi from '../images/banhmibackground.jpg';
import ImageSpinner from './ImageSpinner';
import prawn from '../images/gallery/prawn3.jpg';

const Gallery = () => {
  let images = [pic03, banhMi, prawn];
  return (
    <div>
      <h2 className="major">Gallery</h2>
      <ImageSpinner images={images} />
    </div>
  )
};

export default Gallery;