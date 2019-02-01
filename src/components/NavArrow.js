/**
 * Created by will on 01/02/19.
 */
import React from 'react';

const NavArrow = ({onClick, style}) => {
  return (
    <div className={style} onClick={onClick}/>
  )
};

export default NavArrow;