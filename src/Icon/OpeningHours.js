import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const OpeningHours = (props) => {
  return (
    <Base {...props}>
      <path d="M12 22.49A10.49 10.49 0 1 1 22.49 12 10.49 10.49 0 0 1 12 22.49zm0-19A8.49 8.49 0 1 0 20.49 12 8.5 8.5 0 0 0 12 3.51z"/><path d="M15.94 17l-4.47-4.47a.76.76 0 0 1-.22-.54v-6.4h1.5v6.09L17 15.94z"/>
    </Base>
  );
};

OpeningHours.propTypes = {
  color: TString,
};

export default OpeningHours;
