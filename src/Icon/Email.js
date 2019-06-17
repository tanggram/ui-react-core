import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const Email = (props) => {
  return (
    <Base {...props}>
      <path fill="none" transform="rotate(-180 12.025 11.965)" d="M.05-.03H24v24H.05z"/>
      <path fill="none" d="M0-.03h23.95v24H0z"/>
      <path d="M21.46 3H2.5A2.5 2.5 0 0 0 0 5.47v13A2.5 2.5 0 0 0 2.5 21h19a2.5 2.5 0 0 0 2.5-2.53v-13A2.5 2.5 0 0 0 21.46 3zM2.5 5h19a.5.5 0 0 1 .5.5v1.73L12 10.9 2 7.23V5.47A.5.5 0 0 1 2.5 5zm19 14h-19a.5.5 0 0 1-.5-.5V9.36l9.63 3.55A1 1 0 0 0 12 13a1 1 0 0 0 .34-.06L22 9.36v9.11a.51.51 0 0 1-.54.53z"/>
    </Base>
  );
};

Email.propTypes = {
  color: TString,
};

export default Email;
