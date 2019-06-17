import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const Support = (props) => {
  return (
    <Base {...props}>
      <path d="M21.91 9.21H21C20.74 3.84 17.05 0 12 0S3.26 3.84 3 9.21h-.91a.58.58 0 0 0-.59.59v6.82a.59.59 0 0 0 .59.59h3.82a.59.59 0 0 0 .59-.59V9.8a.58.58 0 0 0-.59-.59H5C5.25 5 8.11 2 12 2s6.75 3 7 7.21h-.89a.58.58 0 0 0-.59.59v6.82a.59.59 0 0 0 .59.59h1.14a5.32 5.32 0 0 1-3.54 4.05 1.33 1.33 0 1 0 .13 1 6.26 6.26 0 0 0 4.43-5.05h1.66a.59.59 0 0 0 .59-.59V9.8a.58.58 0 0 0-.61-.59z"/>
    </Base>
  );
};

Support.propTypes = {
  color: TString,
};

export default Support;
