import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const Time = (props) => {
  return (
    <Base {...props}>
      <path d="M8 2.76h8.16a1 1 0 0 0 0-2H8a1 1 0 1 0 0 2zM18.83 6.53l1.73-1.73a1 1 0 0 0 0-1.41 1 1 0 0 0-1.41 0l-1.88 1.88a9.71 9.71 0 1 0 1.56 1.26zM12 21.1a7.71 7.71 0 1 1 7.7-7.71A7.71 7.71 0 0 1 12 21.1z"/>
      <path d="M11.25 7.1h1.49v7.22h-1.49z"/>
      <path fill="none" d="M.07 0h23.86v23.86H.07z"/>
    </Base>
  );
};

Time.propTypes = {
  color: TString,
};

export default Time;
