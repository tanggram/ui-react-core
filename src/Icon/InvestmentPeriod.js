import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const InvestmentPeriod = (props) => {
  return (
    <Base {...props}>
      <rect width="3.5" height="5.96" x="2.5" y="15.59" rx=".62"/>
      <rect width="3.5" height="12.97" x="7.67" y="8.58" rx=".71"/>
      <rect width="3.5" height="9.5" x="12.83" y="12.05" rx=".67"/>
      <rect width="3.5" height="17.5" x="18" y="4.05" rx=".74"/>
      <path fill="none" d="M0 .05h24v24H0z"/>
    </Base>
  );
};

InvestmentPeriod.propTypes = {
  color: TString,
};

export default InvestmentPeriod;
