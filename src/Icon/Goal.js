import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const Goal = (props) => {
  return (
    <Base {...props}>
      <path d="M21.71 20.29L13 11.59V9.46h7a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-9v10.13l-8.71 8.7a1 1 0 0 0-.21 1.09A1 1 0 0 0 3 22h18a1 1 0 0 0 .92-.62 1 1 0 0 0-.21-1.09zM19 7.46h-6v-4h6zM5.41 20L12 13.41 18.59 20z"/>
      <path fill="none" d="M0 0h24v24H0z"/>
    </Base>
  );
};

Goal.propTypes = {
  color: TString,
};

export default Goal;
