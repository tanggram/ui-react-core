import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const CheckCircle = (props) => {
  return (
    <Base {...props}>
      <path fill="none" d="M0 0h24v24H0z"/>
      <path d="M10.12 16.11a1 1 0 0 1-.7-.29l-2.67-2.67a1 1 0 0 1 1.41-1.42l2 2 5.63-5.62a1 1 0 0 1 1.41 1.41l-6.33 6.33a1 1 0 0 1-.75.26z"/>
      <path d="M12 22.45A10.5 10.5 0 1 1 22.45 12 10.51 10.51 0 0 1 12 22.45zm0-19a8.5 8.5 0 1 0 8.5 8.5 8.51 8.51 0 0 0-8.5-8.5z"/>
    </Base>
  );
};

CheckCircle.propTypes = {
  color: TString,
};

export default CheckCircle;
