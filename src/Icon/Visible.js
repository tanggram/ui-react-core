import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const Visible = (props) => {
  return (
    <Base {...props}>
      <path fill="none" transform="rotate(-180 12 12)" d="M.02 0h23.95v24H.02z"/>
      <path fill="none" d="M-.02 0h23.95v24H-.02z"/>
      <path d="M23.77 11.45C23.55 11.13 18.48 3.5 12 3.5S.35 11.13.14 11.45a1 1 0 0 0 0 1.1c.21.32 5.29 8 11.81 8s11.6-7.63 11.82-7.95a1 1 0 0 0 0-1.15zM12 18.5c-4.53 0-8.52-4.84-9.75-6.5C3.43 10.34 7.4 5.5 12 5.5s8.53 4.84 9.76 6.5c-1.28 1.66-5.26 6.5-9.76 6.5z"/>
      <path d="M7 12l4.98 5 5-5-5-5L7 12z"/>
    </Base>
  );
};

Visible.propTypes = {
  color: TString,
};

export default Visible;
