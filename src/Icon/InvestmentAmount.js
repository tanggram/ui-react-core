import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const InvestmentAmount = (props) => {
  return (
    <Base {...props}>
      <path fill="none" d="M.04 0h24v24h-24z"/>
      <path d="M18.54 24h-13a2.5 2.5 0 0 1-2.5-2.5v-19A2.5 2.5 0 0 1 5.55 0h13A2.5 2.5 0 0 1 21 2.5v19a2.5 2.5 0 0 1-2.46 2.5zM5.55 2a.5.5 0 0 0-.5.5v19a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-19a.5.5 0 0 0-.5-.5z"/>
      <path d="M17 8H7a1.26 1.26 0 0 1-1.21-1.29v-2A1.26 1.26 0 0 1 7 3.46h10a1.26 1.26 0 0 1 1.25 1.25v2A1.25 1.25 0 0 1 17 8zM7.29 6.46h9.5V5h-9.5z"/>
      <rect width="2.5" height="2.5" x="14.79" y="9.64" rx=".5"/>
      <rect width="2.5" height="2.5" x="6.58" y="13.57" rx=".5"/>
      <rect width="2.5" height="2.5" x="6.58" y="9.64" rx=".5"/>
      <rect width="2.5" height="2.5" x="10.79" y="9.64" rx=".5"/>
      <rect width="2.5" height="2.5" x="10.79" y="13.57" rx=".5"/>
      <rect width="2.5" height="2.5" x="6.58" y="17.5" rx=".5"/>
      <rect width="2.5" height="2.5" x="10.79" y="17.5" rx=".5"/>
      <rect width="2.5" height="6.43" x="14.79" y="13.57" rx=".5"/>
    </Base>
  );
};

InvestmentAmount.propTypes = {
  color: TString,
};

export default InvestmentAmount;
