import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const TCoin = (props) => {
  return (
    <Base {...props}>
      <path fill="none" d="M0 0h24v24H0z"/>
      <path d="M8.41 9.36h2.79v7.71h1.5V9.36h2.91v-1.5h-7.2v1.5z"/>
      <path d="M12 1.57a10.5 10.5 0 1 0 10.5 10.5A10.51 10.51 0 0 0 12 1.57zm0 19a8.5 8.5 0 1 1 8.5-8.5 8.51 8.51 0 0 1-8.5 8.5z"/>
    </Base>
  );
};

TCoin.propTypes = {
  color: TString,
};

export default TCoin;
