import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const Invisible = (props) => {
  return (
    <Base {...props}>
      <path fill="none" transform="rotate(-180 12 12)" d="M0 0h24v24H0z"/>
      <path fill="none" d="M-.05 0h24v24h-24z"/>
      <path d="M23.79 11.45a24.19 24.19 0 0 0-4.73-5.11l2.69-2.69a1 1 0 0 0 0-1.42 1 1 0 0 0-1.41 0l-2.95 2.95A10.56 10.56 0 0 0 12 3.5C5.41 3.5.33 11.13.12 11.45a1 1 0 0 0 0 1.1 23.83 23.83 0 0 0 4.77 5.14l-2.67 2.66a1 1 0 0 0 0 1.42 1 1 0 0 0 .71.29 1 1 0 0 0 .7-.29l2.93-2.93A10.46 10.46 0 0 0 12 20.5c6.54 0 11.63-7.63 11.84-7.95a1 1 0 0 0-.05-1.1zM2.18 12C3.41 10.34 7.4 5.5 12 5.5a8.19 8.19 0 0 1 4 1.15l-2.22 2.14L12 7l-5 5 1.79 1.79-2.47 2.47A22.35 22.35 0 0 1 2.18 12zM12 18.5a8.22 8.22 0 0 1-4-1.12l2.17-2.17L12 17l5-5-1.8-1.79 2.44-2.44A22.84 22.84 0 0 1 21.73 12c-1.24 1.66-5.22 6.5-9.73 6.5z"/>
    </Base>
  );
};

Invisible.propTypes = {
  color: TString,
};

export default Invisible;
