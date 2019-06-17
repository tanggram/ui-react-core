import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const RiskProfile = (props) => {
  return (
    <Base {...props}>
      <path
        d="M18.5 0h-13A2.5 2.5 0 0 0 3 2.5v19A2.5 2.5 0 0 0 5.5 24h10.36L21 19.5v-17A2.5 2.5 0 0 0 18.5 0zM5 21.5v-19a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5V17h-5v5H5.5a.5.5 0 0 1-.5-.5zM18.53 19L16 21.23V19z"
      />
      <path fill="none" d="M0 0h24v24H0z"/>
      <path
        d="M8.63 13.29l2.28-2.2 1.52 1.54 4.87-4.87-1.06-1.06-3.8 3.8-1.5-1.52-2.31 2.23V5.75h-1.5v10.04h9.86v-1.5H8.63v-1z"
      />
    </Base>
  );
};

RiskProfile.propTypes = {
  color: TString,
};

export default RiskProfile;
