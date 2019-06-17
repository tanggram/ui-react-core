import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const RewardRate = (props) => {
  return (
    <Base {...props}>
      <path d="M12 1.47A10.48 10.48 0 1 0 22.45 12 10.49 10.49 0 0 0 12 1.47zm0 19A8.49 8.49 0 1 1 20.46 12 8.5 8.5 0 0 1 12 20.43z"/>
      <path d="M15.94 6.93l-9 9A.72.72 0 0 0 7 17a.74.74 0 0 0 1 0l9-9a.74.74 0 1 0-1-1.05zM14.51 13.48a2 2 0 1 0 2 2 2 2 0 0 0-2-2zm0 2.49a.5.5 0 1 1 .49-.5.5.5 0 0 1-.49.53zM9.44 10.41a2 2 0 1 0-2-2 2 2 0 0 0 2 2zm0-2.49a.5.5 0 0 1 .5.5.5.5 0 0 1-.5.5.51.51 0 0 1-.5-.5.5.5 0 0 1 .5-.5z"/>
      <path fill="none" d="M.03.03h23.95v23.95H.03z"/>
    </Base>
  );
};

RewardRate.propTypes = {
  color: TString,
};

export default RewardRate;
