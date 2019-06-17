import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const WrongAnswer = (props) => {
  return (
    <Base {...props}>
      <path d="M18.46.07H5.54a2.49 2.49 0 0 0-2.49 2.48v18.9a2.49 2.49 0 0 0 2.49 2.48h10.3L21 19.46V2.55A2.49 2.49 0 0 0 18.46.07zM16 21.18V19h2.5zM19 17h-5v5H5.54a.5.5 0 0 1-.5-.49V2.55a.5.5 0 0 1 .5-.49h12.92a.5.5 0 0 1 .5.49z"/>
      <path d="M16.17 7.29a1 1 0 0 0-1.41 0L12 10.1 9.14 7.28a1 1 0 1 0-1.41 1.41l2.82 2.81-2.82 2.82a1 1 0 0 0 0 1.4 1 1 0 0 0 .71.29 1 1 0 0 0 .7-.29L12 12.91l2.81 2.81a1 1 0 0 0 .71.29 1 1 0 0 0 .7-.29 1 1 0 0 0 0-1.4l-2.86-2.82 2.81-2.81a1 1 0 0 0 0-1.4z"/>
      <path fill="none" d="M-5.53-.99h23.86v23.86H-5.53z"/>
      <path fill="none" d="M.02 0h23.86v23.86H.02z"/>
    </Base>
  );
};

WrongAnswer.propTypes = {
  color: TString,
};

export default WrongAnswer;
