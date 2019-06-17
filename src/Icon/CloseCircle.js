import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const CloseCircle = (props) => {
  return (
    <Base {...props}>
      <path d="M12 22.5A10.5 10.5 0 1 1 22.5 12 10.51 10.51 0 0 1 12 22.5zm0-19a8.5 8.5 0 1 0 8.5 8.5A8.51 8.51 0 0 0 12 3.5z"/>
      <path d="M8.37 16.66a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.42L15 7.64a1 1 0 0 1 1.42 0 1 1 0 0 1 0 1.41l-7.35 7.32a1 1 0 0 1-.7.29z"/>
      <path d="M15.68 16.66a1 1 0 0 1-.71-.29L7.66 9.05a1 1 0 0 1 1.41-1.41L16.39 15a1 1 0 0 1 0 1.42 1 1 0 0 1-.71.24z"/>
      <path fill="none" d="M0 0h24v24H0z"/>
    </Base>
  );
};

CloseCircle.propTypes = {
  color: TString,
};

export default CloseCircle;
