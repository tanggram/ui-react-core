import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const TransactionID = (props) => {
  return (
    <Base {...props}>
      <path d="M20 1.53H5.48A2.5 2.5 0 0 0 3 4v17.49a1 1 0 0 0 1 1h14.34a1 1 0 0 0 1-1L19.17 4c0-.17.41-.49.78-.49a1 1 0 1 0 0-2zm-15 19V4a.5.5 0 0 1 .5-.49h11.74a2.07 2.07 0 0 0-.06.5l.15 16.46z"/>
      <path d="M6.27 5.93h4.49v1.5H6.27zM6.27 8.85h4.49v1.5H6.27zM6.27 11.76h9.48v1.5H6.27zM6.27 14.68h9.48v1.5H6.27zM11.62 6.14h.7v4.05h-.7zM15.34 6.38a1.9 1.9 0 0 0-1-.24h-1.15v4.05h1.16a1.91 1.91 0 0 0 1-.23 1.55 1.55 0 0 0 .65-.68 2.15 2.15 0 0 0 .23-1v-.2a2.18 2.18 0 0 0-.23-1 1.68 1.68 0 0 0-.66-.7zm.16 1.91a1.51 1.51 0 0 1-.3 1 1.06 1.06 0 0 1-.85.34h-.46V6.71h.49a1 1 0 0 1 .84.35 1.56 1.56 0 0 1 .28 1z"/>
      <path fill="none" d="M.03.03h23.95v23.95H.03z"/>
    </Base>
  );
};

TransactionID.propTypes = {
  color: TString,
};

export default TransactionID;
