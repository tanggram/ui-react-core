import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const Back = (props) => {
  return (
    <Base {...props}>
      <path d="M6 13.05h15.13V11H6l6.29-6.2a1 1 0 0 0 0-1.42 1 1 0 0 0-1.41 0l-8 8a1 1 0 0 0-.3.71 1 1 0 0 0 .3.71l8 8a1 1 0 0 0 .7.3 1 1 0 0 0 .71-1.71z"/>
      <path fill="none" d="M0 .05h24v24H0z"/>
    </Base>
  );
};

Back.propTypes = {
  color: TString,
};

export default Back;
