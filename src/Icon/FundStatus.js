import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const FundStatus = (props) => {
  return (
    <Base {...props}>
      <path fill="none" d="M-.03.02h24v24h-24z"/>
      <path
        d="M18.47 0h-13A2.5 2.5 0 0 0 3 2.52v19A2.5 2.5 0 0 0 5.48 24h10.35L21 19.52v-17A2.5 2.5 0 0 0 18.47 0zM16 21.25V19h2.55zM19 17h-5v5H5.48a.5.5 0 0 1-.5-.5v-19a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5z"
      />
      <path
        d="M14.37 6.13l-2.58 5.85L9.4 8.13l-1.96 3.14H6.22v1.5h2.06l1.12-1.8 2.62 4.22 2.14-4.87.8 2.45h2.76v-1.5h-1.67l-1.68-5.14z"
      />
    </Base>
  );
};

FundStatus.propTypes = {
  color: TString,
};

export default FundStatus;
