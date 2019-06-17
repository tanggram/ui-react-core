import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const Pending = (props) => {
  return (
    <Base {...props}>
      <path d="M18.54 22.49H5.5a1 1 0 0 1-1-1v-3a1 1 0 0 1 .17-.57l4.15-6-4.08-5.76a1 1 0 0 1-.19-.56V2.52a1 1 0 0 1 .28-.72 1 1 0 0 1 .71-.29h13a1 1 0 0 1 1 1v3a1 1 0 0 1-.17.57L15.26 12l4.11 6a1.06 1.06 0 0 1 .17.57v2.91a1 1 0 0 1-1 1.01zm-12-2h11v-1.61l-4.32-6.37a1 1 0 0 1 0-1.13l4.28-6.19V3.51h-11v1.75l4.32 6.12a1 1 0 0 1 0 1.14L6.5 18.81z"/>
      <path d="M8.89 6.5h6.22l-3.11 4-3.11-4z"/>
      <path fill="none" d="M.01.01h23.98v23.98H.01z"/>
    </Base>
  );
};

Pending.propTypes = {
  color: TString,
};

export default Pending;
