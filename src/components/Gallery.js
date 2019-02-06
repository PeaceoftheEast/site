/**
 * Created by will on 23/01/19.
 */
import React from 'react';
import pic03 from '../images/pic03.jpg'
import banhMi from '../images/banhmibackground-reduce-2.png';
import ImageSpinner from './ImageSpinner';
import prawn from '../images/gallery/prawnie.jpg';
import lemongrassFries from '../images/gallery/lemongrass-chicken-fries.jpg';
import tofuBanhMi from '../images/gallery/tofu-banh-mi.jpg';

const Gallery = () => {
  let images = [tofuBanhMi, lemongrassFries, prawn, banhMi];
  return (
    <div>
      <h2 className="major">Gallery</h2>
      <ImageSpinner images={images} />
    </div>
  )
};

export default Gallery;