import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const InvestmentComplete = (props) => {
  return (
    <Base {...props}>
      <path fill="none" d="M0 0h24v24H0z"/>
      <path d="M1.5 19h21v2h-21zM9.48 15a1 1 0 0 0 .7.3 1 1 0 0 0 .71-.3l6.29-6.29a1 1 0 0 0 0-1.4 1 1 0 0 0-1.41 0l-5.59 5.59L8.23 11a1 1 0 0 0-1.41 1.41z"/>
    </Base>
  );
};

InvestmentComplete.propTypes = {
  color: TString,
};

export default InvestmentComplete;
