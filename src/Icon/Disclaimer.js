import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const Disclaimer = (props) => {
  return (
    <Base {...props}>
      <path fill="none" d="M.02.02h24v24h-24z"/>
      <path
        d="M18.52 0h-13A2.5 2.5 0 0 0 3 2.52v19A2.5 2.5 0 0 0 5.53 24h10.35L21 19.52v-17A2.5 2.5 0 0 0 18.52 0zM5 21.52v-19a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5V17h-5v5H5.53a.5.5 0 0 1-.53-.48zM18.56 19L16 21.25V19z"
      />
      <path
        d="M17.29 14.25l-3-3a4.09 4.09 0 0 0 .54-2 4.17 4.17 0 1 0-4.17 4.16 4.09 4.09 0 0 0 2.29-.69l2.95 3a1 1 0 0 0 .71.29 1 1 0 0 0 .71-.29 1 1 0 0 0-.03-1.47zm-8.82-5a2.17 2.17 0 1 1 2.16 2.16 2.17 2.17 0 0 1-2.16-2.17z"
      />
    </Base>
  );
};

Disclaimer.propTypes = {
  color: TString,
};

export default Disclaimer;
