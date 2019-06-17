import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const TCenter = (props) => {
  return (
    <Base {...props}>
      <path d="M20.2 3H3.8a2.29 2.29 0 0 0-2.3 2.23v11.14a2.29 2.29 0 0 0 2.29 2.28h.3V24L9 18.65h11.2a2.29 2.29 0 0 0 2.3-2.28V5.23A2.29 2.29 0 0 0 20.2 3zm.3 13.42a.28.28 0 0 1-.3.28h-12l-2.11 2.19v-2.23H3.8a.28.28 0 0 1-.3-.28V5.23A.29.29 0 0 1 3.8 5h16.4a.29.29 0 0 1 .3.28z"/>
      <circle cx="15.84" cy="8.74" r="1"/>
      <circle cx="15.84" cy="12.86" r="1"/>
      <circle cx="13.78" cy="10.81" r="1"/>
      <circle cx="17.9" cy="10.81" r="1"/>
      <path d="M8.56 8.31h-2v1.5h-1.5v2h1.5v1.5h2v-1.5h1.5v-2h-1.5v-1.5z"/>
      <path fill="none" d="M0 0h24v24H0z"/>
    </Base>
  );
};

TCenter.propTypes = {
  color: TString,
};

export default TCenter;
