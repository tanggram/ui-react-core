import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const Portrait = (props) => {
  return (
    <Base {...props}>
      <path d="M12 1.5A10.5 10.5 0 1 0 22.5 12 10.51 10.51 0 0 0 12 1.5zm0 19a8.5 8.5 0 1 1 8.5-8.5 8.51 8.51 0 0 1-8.5 8.5z"/>
      <path d="M16.79 6.26a1.22 1.22 0 0 0-1.34.26L5.13 16.84h12.42V7.39a1.22 1.22 0 0 0-.76-1.13zm-1.24 8.58H10l5.59-5.59z"/>
      <path fill="none" d="M0 0h24v24H0z"/>
    </Base>
  );
};

Portrait.propTypes = {
  color: TString,
};

export default Portrait;
