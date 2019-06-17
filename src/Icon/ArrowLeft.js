import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const ArrowLeft = (props) => {
  return (
    <Base {...props}>
      <path d="M15.5 21a1 1 0 0 1-.73-.31l-7.5-8a1 1 0 0 1 0-1.37l7.49-8a1 1 0 1 1 1.46 1.36L9.37 12l6.86 7.32a1 1 0 0 1-.05 1.41 1 1 0 0 1-.68.27z"/>
      <path fill="none" d="M0 0h24v24H0z"/>
    </Base>
  );
};

ArrowLeft.propTypes = {
  color: TString,
};

export default ArrowLeft;
