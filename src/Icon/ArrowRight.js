import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const ArrowRight = (props) => {
  return (
    <Base {...props}>
      <path d="M10.75 18.56a1 1 0 0 1-.67-.26 1 1 0 0 1-.08-1.41l4.39-4.83L10 7.24a1 1 0 0 1 .06-1.41 1 1 0 0 1 1.42.07l5 5.49a1 1 0 0 1 0 1.35l-5 5.5a1 1 0 0 1-.73.32z"/>
      <path fill="none" d="M0 .07h24v24H0z"/>
    </Base>
  );
};

ArrowRight.propTypes = {
  color: TString,
};

export default ArrowRight;
