import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const RightAnswer = (props) => {
  return (
    <Base {...props}>
      <path d="M15.77 7.16l-5.59 5.59-1.95-2a1 1 0 0 0-1.41 1.45l2.66 2.65a1 1 0 0 0 .7.3 1 1 0 0 0 .71-.3l6.29-6.29a1 1 0 0 0 0-1.4 1 1 0 0 0-1.41 0z"/>
      <path d="M18.46.07H5.54a2.49 2.49 0 0 0-2.49 2.48v18.9a2.49 2.49 0 0 0 2.49 2.48h10.3L21 19.46V2.55A2.49 2.49 0 0 0 18.46.07zM16 21.18V19h2.5zM19 17h-5v5H5.54a.5.5 0 0 1-.5-.49V2.55a.5.5 0 0 1 .5-.49h12.92a.5.5 0 0 1 .5.49z"/>
      <path fill="none" d="M.07.07h23.86v23.86H.07z"/>
    </Base>
  );
};

RightAnswer.propTypes = {
  color: TString,
};

export default RightAnswer;
