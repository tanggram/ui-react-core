import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const Evening = (props) => {
  return (
    <Base {...props}>
      <path d="M3 12V5.5a1 1 0 0 0-2 0v13a1 1 0 0 0 2 0V14h18v4.55a1 1 0 0 0 2 0V12z"/>
      <rect width="4.46" height="2.5" x="4" y="8.46" className="cls-1" rx=".5"/>
      <path fill="none" d="M0 0h24v24H0z"/>
    </Base>
  );
};

Evening.propTypes = {
  color: TString,
};

export default Evening;
