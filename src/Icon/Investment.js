import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const Investment = (props) => {
  return (
    <Base {...props}>
      <path d="M21.5 5.32h-5.18a1 1 0 0 0 0 2h2.77l-5.79 5.79L9.68 9.5a1 1 0 0 0-1.41 0L1.79 16l1.42 1.42L9 11.62l3.61 3.61a1 1 0 0 0 1.41 0l6.5-6.5v2.77a1 1 0 0 0 2 0V6.32a1 1 0 0 0-1.02-1z"/>
      <path fill="none" d="M0 0h24v24H0z"/>
      <path d="M1.5 19h21v2h-21z"/>
    </Base>
  );
};

Investment.propTypes = {
  color: TString,
};

export default Investment;
