import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const Add = (props) => {
  return (
    <Base {...props}>
      <path fill="none" d="M0 0h24v24H0z"/>
      <path d="M20 11h-7V4a1 1 0 0 0-2 0v7H4a1 1 0 0 0 0 2h7v7a1 1 0 0 0 2 0v-7h7a1 1 0 0 0 0-2z"/>
    </Base>
  );
};

Add.propTypes = {
  color: TString,
};

export default Add;
