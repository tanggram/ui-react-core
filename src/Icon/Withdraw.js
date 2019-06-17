import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const Withdraw = (props) => {
  return (
    <Base {...props}>
      <path d="M11.08 15h.17v1h-1a.75.75 0 0 0 0 1.5h1v.77h1.5v-.77a2 2 0 0 0 0-4v-1h.81a.75.75 0 0 0 0-1.5h-.81v-.89h-1.5V11h-.17a2 2 0 0 0 0 4zm2.17.5a.51.51 0 0 1-.5.5v-1a.5.5 0 0 1 .5.52zm-2.17-3h.17v1h-.17a.51.51 0 0 1-.5-.5.5.5 0 0 1 .5-.48z" className="cls-2"/>
      <path d="M13 7.5V3.92l.86.86a1 1 0 0 0 .71.29 1 1 0 0 0 .71-1.7L12 .09 8.72 3.35a1 1 0 1 0 1.42 1.42l.86-.86V7.5H0V21h24V7.5zM22 19H2V9.5h20z" className="cls-2"/>
    </Base>
  );
};

Withdraw.propTypes = {
  color: TString,
};

export default Withdraw;
