import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const Login = (props) => {
  return (
    <Base {...props}>
      <path d="M18.5 0h-10A2.5 2.5 0 0 0 6 2.5V4a1 1 0 0 0 2 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v19a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5V20a1 1 0 0 0-2 0v1.5A2.5 2.5 0 0 0 8.5 24h10a2.5 2.5 0 0 0 2.5-2.5v-19A2.5 2.5 0 0 0 18.5 0z"/><path d="M12.56 14.06A1 1 0 0 0 14 15.48L17.45 12 14 8.51a1 1 0 0 0-1.41 0 1 1 0 0 0 0 1.42L13.62 11H1.5v2h12.12z"/>
    </Base>
  );
};

Login.propTypes = {
  color: TString,
};

export default Login;
