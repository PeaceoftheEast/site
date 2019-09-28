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
import slide1 from '../images/gallery/slide-1.png' ;
import slide2 from '../images/gallery/slide-2.png' ;
import slide3 from '../images/gallery/slide-3.png' ;
import slide4 from '../images/gallery/slide-4.png' ;
import slide5 from '../images/gallery/slide-5.png' ;
import slide6 from '../images/gallery/slide-6.png' ;
import slide7 from '../images/gallery/slide-7.png';  

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