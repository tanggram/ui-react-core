import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const Security = (props) => {
  return (
    <Base {...props}>
      <path d="M19.72 7.71h-1.48V6.48a6.27 6.27 0 0 0-12.53 0v1.23H4.28a2.78 2.78 0 0 0-2.78 2.78V20a2.79 2.79 0 0 0 2.78 2.78h15.44A2.79 2.79 0 0 0 22.5 20v-9.51a2.78 2.78 0 0 0-2.78-2.78zm-12-1.22a4.27 4.27 0 0 1 8.53 0v1.22H7.71zM20.5 20a.78.78 0 0 1-.78.78H4.28A.78.78 0 0 1 3.5 20v-9.51a.78.78 0 0 1 .78-.78h15.44a.78.78 0 0 1 .78.78z"/>
      <path d="M10.83 14.93l.67.66a1.17 1.17 0 1 0 1 0l.67-.66v-2.34h-2.34z"/>
      <path fill="none" d="M0-.01h24v24H0z"/>
    </Base>
  );
};

Security.propTypes = {
  color: TString,
};

export default Security;
