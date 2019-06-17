import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const Complete = (props) => {
  return (
    <Base {...props}>
      <path d="M8.75 17.75a1 1 0 0 1-.7-.3L3.3 12.71a1 1 0 0 1 0-1.42 1 1 0 0 1 1.41 0l4 4L19.29 4.8a1 1 0 0 1 1.41 1.41L9.46 17.45a1 1 0 0 1-.71.3z"/>
      <path fill="none" d="M.01.01h23.98v23.98H.01z"/>
    </Base>
  );
};

Complete.propTypes = {
  color: TString,
};

export default Complete;
