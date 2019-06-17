import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const Setting = (props) => {
  return (
    <Base {...props}>
      <g transform="translate(-2, -5)">
        <path fill='none' d='M0 0h24v24H0z' />
        <path fillRule='evenodd' d='M25.2,27.4H2.8l1.3-1.3l19-18.8c0.8-0.8,2.1-0.2,2.1,0.9L25.2,27.4L25.2,27.4z'
              clipRule='evenodd' />
        <path d="M13.3,25.1c0-0.1,0-0.2,0.1-0.2c0.1,0,0.2,0,0.2,0.1c0,0,0.2,0.4,1.1,0.4c0.9,0,1.1-0.4,1.1-0.4
				c0-0.1,0.1-0.1,0.2-0.1c0.1,0,0.1,0.1,0.1,0.2c0,0-0.3,0.6-1.4,0.6C13.6,25.8,13.3,25.2,13.3,25.1z" fillRule='evenodd' clipRule='evenodd' fill='#FFFFFF'/>
        <path d="M12.3,23.9c-0.3,0-0.6-0.3-0.6-0.6v-2c0-0.3,0.3-0.6,0.6-0.6h0.1c0.3,0,0.6,0.3,0.6,0.6v2
				C12.9,23.6,12.6,23.9,12.3,23.9L12.3,23.9z" fillRule='evenodd' clipRule='evenodd' fill='#FFFFFF'/>
        <path d="M17.2,23.9c-0.3,0-0.6-0.3-0.6-0.6v-2c0-0.3,0.3-0.6,0.6-0.6h0.1c0.3,0,0.6,0.3,0.6,0.6v2
				C17.8,23.6,17.5,23.9,17.2,23.9L17.2,23.9z" fillRule='evenodd' clipRule='evenodd' fill='#FFFFFF'/>
      </g>
    </Base>
  );
};

Setting.propTypes = {
  color: TString,
};

export default Setting;
