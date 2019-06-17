import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const Rewards = (props) => {
  return (
    <Base {...props}>
      <path d="M19 8.46a7 7 0 1 0-11.58 5.27V23L12 21.06 16.48 23v-9.18A7 7 0 0 0 19 8.46zm-12 0a5 5 0 1 1 5 5 5 5 0 0 1-5-5zM14.48 20L12 18.89 9.42 20v-5a6.93 6.93 0 0 0 2.58.5 6.83 6.83 0 0 0 2.48-.5z"/>
      <path fill="none" d="M.03.03h23.95v23.95H.03z"/>
    </Base>
  );
};

Rewards.propTypes = {
  color: TString,
};

export default Rewards;
