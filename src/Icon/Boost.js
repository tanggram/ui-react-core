import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const Boost = (props) => {
  return (
    <Base {...props}>
      <path d="M21.5 1.5h-6.2a1 1 0 0 0-.71.3l-5 5.13-1.34 1.29H1.16a1 1 0 0 0-.7 1.7l4.8 4.81a2.83 2.83 0 0 0-.89.61 7.94 7.94 0 0 0-1.92 5.12v1h1a8 8 0 0 0 5.13-1.92 2.91 2.91 0 0 0 .6-.89L14 23.46a1 1 0 0 0 .71.29 1 1 0 0 0 1-1l-.06-7.12 6.55-6.2a1 1 0 0 0 .31-.72V2.5a1 1 0 0 0-1.01-1zm-16.59 10l-1.33-1.28h2.66zm2.25 6.59a5 5 0 0 1-2.58 1.21 5 5 0 0 1 1.21-2.59 1 1 0 0 1 .69-.29 1 1 0 0 1 .68.29 1 1 0 0 1 0 1.42zm5.15.82l1.35-1.35v2.72zm-1.42-1.42L6.32 13l8.75-8.8 4.75 4.75zM20.5 7.47l-4-4h4z"/>
      <path fill="none" d="M0 0h24v24H0z"/>
    </Base>
  );
};

Boost.propTypes = {
  color: TString,
};

export default Boost;
