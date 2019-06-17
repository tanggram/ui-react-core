import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const Transaction = (props) => {
  return (
    <Base {...props}>
      <path d="M20.17 24H4a1 1 0 0 1-1-1V2.74A2.71 2.71 0 0 1 5.69 0H22a1 1 0 0 1 0 2c-.45 0-1 .41-1 .74L21.17 23a1 1 0 0 1-.29.71 1 1 0 0 1-.71.29zM5 22h14.17L19 2.75a2.56 2.56 0 0 1 .11-.75H5.69a.72.72 0 0 0-.69.74z"/>
      <path d="M7.12 5.08h9.99v1.5H7.12zM7.12 8.45h9.99v1.5H7.12zM7.12 11.84h9.99v1.5H7.12zM7.12 15.22h9.99v1.5H7.12z"/>
      <path fill="none" d="M.01.01h23.98v23.98H.01z"/>
    </Base>
  );
};

Transaction.propTypes = {
  color: TString,
};

export default Transaction;
