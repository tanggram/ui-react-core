import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const Cancelled = (props) => {
  return (
    <Base {...props}>
      <path d="M12 22.49A10.49 10.49 0 1 1 22.49 12 10.49 10.49 0 0 1 12 22.49zm0-19A8.49 8.49 0 1 0 20.49 12 8.5 8.5 0 0 0 12 3.51z"/>
      <path d="M4.583 18.003L18.011 4.575l1.414 1.415L5.997 19.418z"/>
      <path fill="none" d="M23.99 23.99H.01V.01h23.98z"/>
    </Base>
  );
};

Cancelled.propTypes = {
  color: TString,
};

export default Cancelled;
