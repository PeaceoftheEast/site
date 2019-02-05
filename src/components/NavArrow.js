/**
 * Created by will on 01/02/19.
 */
import React from 'react';

const NavArrow = ({onClick, style, iconName}) => {
  return (
    <div className={style} onClick={onClick}>
      <i className={iconName}/>
    </div>
  )
};

export default NavArrow;