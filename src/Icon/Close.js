import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const Close = (props) => {
  return (
    <Base {...props}>
      <path fill="none" d="M23.99 23.99H.01V.01h23.98z"/>
      <path d="M6.3 18.65a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.41L16.9 5.64a1 1 0 0 1 1.41 1.41L7 18.36a1 1 0 0 1-.7.29z"/>
      <path d="M17.61 18.65a1 1 0 0 1-.71-.29L5.59 7.05a1 1 0 0 1 0-1.41 1 1 0 0 1 1.41 0L18.31 17a1 1 0 0 1 0 1.41 1 1 0 0 1-.7.24z"/>
    </Base>
  );
};

Close.propTypes = {
  color: TString,
};

export default Close;
