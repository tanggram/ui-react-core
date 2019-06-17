import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const DriversLicense = (props) => {
  return (
    <Base {...props}>
      <path
        d="M21.5 3h-19A2.5 2.5 0 0 0 0 5.45v13A2.51 2.51 0 0 0 2.5 21h19a2.51 2.51 0 0 0 2.5-2.5v-13A2.5 2.5 0 0 0 21.5 3zm.5 15.5a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5h19a.5.5 0 0 1 .5.5z"
      />
      <path
        d="M13.04 6.2h7.5v1.5h-7.5zM13.04 8.61h7.5v1.5h-7.5zM13.04 11.02h5.5v1.5h-5.5zM11.56 11.58h-.78L9.57 9.2a.55.55 0 0 0-.33-.11H6.12a.55.55 0 0 0-.33.11l-1.2 2.38h-.78a.47.47 0 0 0-.44.49v1.19a.46.46 0 0 0 .44.49h.84v.06a1 1 0 0 0 2 0h2.41a1 1 0 0 0 2 0h.51a.47.47 0 0 0 .44-.49v-1.25a.47.47 0 0 0-.45-.49z"
      />
      <path fill="none" d="M0-.05h24v24H0z"/>
    </Base>
  );
};

DriversLicense.propTypes = {
  color: TString,
};

export default DriversLicense;
