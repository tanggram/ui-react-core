import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const Medicare = (props) => {
  return (
    <Base {...props}>
      <path fill="none" d="M0 0h24v24H0z"/>
      <path
        d="M21.5 3h-19A2.5 2.5 0 0 0 0 5.5v13A2.5 2.5 0 0 0 2.5 21h19a2.5 2.5 0 0 0 2.5-2.5v-13A2.5 2.5 0 0 0 21.5 3zm.5 15.5a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5h19a.5.5 0 0 1 .5.5z"
      />
      <path
        d="M13.04 6.25h7.5v1.5h-7.5zM13.04 8.66h7.5v1.5h-7.5zM13.04 11.07h5.5v1.5h-5.5zM8.31 8.5h-2V11h-2.5v2h2.5v2.5h2V13h2.5v-2h-2.5V8.5z"
      />
    </Base>
  );
};

Medicare.propTypes = {
  color: TString,
};

export default Medicare;
