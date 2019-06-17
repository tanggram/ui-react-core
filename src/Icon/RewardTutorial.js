import React from 'react';
import {TNumber, TString} from '../prop_types';
import Base from './Base';

const RewardTutorial = (props) => {
  return (
    <Base {...props}>
      <path d="M11 10h2v7.5h-2z"/><circle cx="12" cy="7.5" r="1"/><path d="M12 1.5A10.5 10.5 0 1 0 22.5 12 10.51 10.51 0 0 0 12 1.5zm0 19a8.5 8.5 0 1 1 8.5-8.5 8.51 8.51 0 0 1-8.5 8.5z"/>
    </Base>
  );
};

RewardTutorial.propTypes = {
  size: TNumber,
  className: TString,
  color: TString,
};

export default RewardTutorial;
