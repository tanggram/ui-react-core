import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const Logout = (props) => {
  return (
    <Base {...props}>
      <path d="M17 19a1 1 0 0 0-1 1v1.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-19a.5.5 0 0 1 .5-.5h10a.51.51 0 0 1 .5.5V4a1 1 0 1 0 2 0V2.49A2.5 2.5 0 0 0 15.47 0h-10A2.5 2.5 0 0 0 3 2.49v19A2.5 2.5 0 0 0 5.49 24h10A2.5 2.5 0 0 0 18 21.45V20a1 1 0 0 0-1-1z"/>
      <path d="M22 11.08V11h-.1l-2.48-2.51A1 1 0 0 0 18 9.9l1.09 1.1H7v2h12.09L18 14a1 1 0 0 0 0 1.41 1 1 0 0 0 1.41 0l2.5-2.41H22v-.1l.9-.9z"/>
      <path fill="none" d="M0 0h23.95v23.95H0z"/>
    </Base>
  );
};

Logout.propTypes = {
  color: TString,
};

export default Logout;
