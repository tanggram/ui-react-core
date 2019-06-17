import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const Refund = (props) => {
  return (
    <Base {...props}>
      <path d="M12 1.52a10.39 10.39 0 0 0-7.23 2.91v-.85a.75.75 0 0 0-1.5 0v3.74H7a.75.75 0 0 0 0-1.5h-.8A8.48 8.48 0 1 1 3.52 12v-1h-2v1A10.48 10.48 0 1 0 12 1.52z"/>
      <path fill="none" d="M.03.03h23.95v23.95H.03z"/>
      <path d="M13.26 11.08H13v-1.7h2.49v-2H13V5.76h-2v1.62h-.26a2.85 2.85 0 1 0 0 5.7H11v1.71H8.51v2H11v1.46h2v-1.47h.26a2.85 2.85 0 1 0 0-5.7zm-2.52 0a.85.85 0 1 1 0-1.7H11v1.7zm2.52 3.71H13v-1.71h.26a.86.86 0 1 1 0 1.71z"/>
    </Base>
  );
};

Refund.propTypes = {
  color: TString,
};

export default Refund;
