import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const Password = (props) => {
  return (
    <Base {...props}>
      <path d="M21.19 19.79l-2.44-2.45 1.62-1.62-1.06-1.06-1.62 1.62-1.85-1.84 1.63-1.62-1.06-1.06-1.63 1.62-3.21-3.21.81-.81a2.61 2.61 0 0 0 0-3.66L9.66 3A2.58 2.58 0 0 0 6 3L3.29 5.7a2.61 2.61 0 0 0 0 3.66L6 12.07a2.57 2.57 0 0 0 3.65 0l.49-.49 9.63 9.62a1 1 0 0 0 1.41 0 1 1 0 0 0 .01-1.41zM7.42 10.66L4.71 7.94a.57.57 0 0 1 0-.82L7.42 4.4a.6.6 0 0 1 .41-.17.63.63 0 0 1 .42.17L11 7.12a.57.57 0 0 1 0 .82l-1.33 1.3a.87.87 0 0 0-.26.18 1.15 1.15 0 0 0-.19.26l-1 1a.59.59 0 0 1-.8-.02z"/>
      <path fill="none" d="M0 0h24v24H0z"/>
    </Base>
  );
};

Password.propTypes = {
  color: TString,
};

export default Password;
