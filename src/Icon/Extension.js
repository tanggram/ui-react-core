import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const Extension = (props) => {
  return (
    <Base {...props}>
      <path fill="none" d="M0 0h24v24H0z"/>
      <circle cx="12" cy="7" r="1.5"/>
      <circle cx="12" cy="12" r="1.5"/>
      <circle cx="12" cy="17" r="1.5"/>
    </Base>
  );
};

Extension.propTypes = {
  color: TString,
};

export default Extension;
