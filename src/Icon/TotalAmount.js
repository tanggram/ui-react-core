import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const Rewards = (props) => {
  return (
    <Base {...props}>
      <path d="M17.43 15.8v-1h.81a.75.75 0 0 0 0-1.5h-.81v-1.13h-1.49v1.13h-.17a2 2 0 0 0 0 4h.17v1H15a.75.75 0 0 0 0 1.5h1v1h1.49v-1a2 2 0 1 0 0-4zm-1.49 0h-.17a.51.51 0 0 1-.5-.5.5.5 0 0 1 .5-.5h.17zm1.49 2.49v-1a.51.51 0 0 1 .5.5.5.5 0 0 1-.5.5z"/>
      <path d="M21 11.57V4a2.5 2.5 0 0 0-2.5-2.49H4.07A2.5 2.5 0 0 0 1.57 4v10a2.5 2.5 0 0 0 2.5 2.49H10a6.6 6.6 0 1 0 11-4.95zM3.57 4a.5.5 0 0 1 .5-.5h14.41A.5.5 0 0 1 19 4v1.63H3.57zm6.73 10.53H4.07a.5.5 0 0 1-.5-.5v-6.4H19v2.72a6.51 6.51 0 0 0-2.38-.46 6.62 6.62 0 0 0-6.32 4.64zm6.3 6.56a4.6 4.6 0 1 1 4.6-4.6 4.6 4.6 0 0 1-4.6 4.6z"/>
      <path fill="none" d="M.03.03h23.95v23.95H.03z"/>
    </Base>
  );
};

Rewards.propTypes = {
  color: TString,
};

export default Rewards;
