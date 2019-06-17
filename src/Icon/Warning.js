import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const Warning = (props) => {
  return (
    <Base {...props}>
      <path d="M11 7h2v8h-2z"/>
      <circle cx="12" cy="17.01" r="1"/>
      <path d="M23.87 19.5l-11-19a1 1 0 0 0-1.74 0l-11 19a1 1 0 0 0 0 1A1 1 0 0 0 1 21h22a1 1 0 0 0 .87-.51 1 1 0 0 0 0-.99zM2.73 19L12 3l9.27 16z"/>
      <path fill="none" d="M0 0h24v24H0z"/>
    </Base>
  );
};

Warning.propTypes = {
  color: TString,
};

export default Warning;
