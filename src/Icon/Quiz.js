import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const Quiz = (props) => {
  return (
    <Base {...props}>
      <path fill="none" d="M-.03-.03h24.06v24.06H-.03z"/>
      <path d="M7.94 2.8h8.23a1 1 0 0 0 0-2H7.94a1 1 0 0 0 0 2zM18.9 6.6l1.75-1.75a1 1 0 1 0-1.41-1.42l-1.91 1.91A9.63 9.63 0 0 0 12 3.75a9.76 9.76 0 1 0 6.9 2.85zM12 21.28a7.77 7.77 0 1 1 7.77-7.76A7.77 7.77 0 0 1 12 21.28z"/>
      <path d="M12 7.81a3.51 3.51 0 0 0-3.51 3.51v1h2v-1a1.51 1.51 0 1 1 3 0 1.5 1.5 0 0 1-1.5 1.5 1 1 0 0 0-1 1v3.05h2v-2.19a3.51 3.51 0 0 0-1-6.87z"/>
      <circle cx="12.03" cy="18.83" r="1"/>
    </Base>
  );
};

Quiz.propTypes = {
  color: TString,
};

export default Quiz;
