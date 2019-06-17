import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const ForgotPassword = (props) => {
  return (
    <Base {...props}>
      <path transform="rotate(-180 12 12)" fill="none" d="M0 0h24v24H0z"/>
      <path d="M18.38 1.5a3.51 3.51 0 0 0-3.5 3.5v1h2V5a1.5 1.5 0 1 1 1.5 1.5 1 1 0 0 0-1 1v3h2V8.35a3.5 3.5 0 0 0-1-6.85z"/>
      <circle cx="18.38" cy="12.5" r="1"/>
      <path d="M15.76 18.65l1.45-1.45-1.41-1.41-1.46 1.45L13.06 16l1.46-1.45-1.42-1.45-1.46 1.46-2.72-2.71.7-.7a2.42 2.42 0 0 0 .73-1.74 2.46 2.46 0 0 0-.73-1.75L7.1 5.15a2.47 2.47 0 0 0-3.49 0L1.09 7.66a2.46 2.46 0 0 0-.73 1.75 2.42 2.42 0 0 0 .73 1.74l2.52 2.51a2.47 2.47 0 0 0 3.49 0l.41-.4 8.89 8.85a1 1 0 0 0 1.41 0 1 1 0 0 0 0-1.41zM8.21 9.74L7 10.92a1.51 1.51 0 0 0-.26.18 1 1 0 0 0-.17.25l-.9.9a.48.48 0 0 1-.67 0L2.5 9.74a.46.46 0 0 1 0-.66L5 6.57a.43.43 0 0 1 .33-.14.45.45 0 0 1 .34.14l2.54 2.51a.46.46 0 0 1 0 .66z"/>
    </Base>
  );
};

ForgotPassword.propTypes = {
  color: TString,
};

export default ForgotPassword;
