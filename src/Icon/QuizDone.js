import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const QuizDone = (props) => {
  return (
    <Base {...props}>
      <path fill="none" d="M-.03-.03h24.06v24.06H-.03z"/>
      <path d="M7.94 2.8h8.23a1 1 0 0 0 0-2H7.94a1 1 0 0 0 0 2zM18.9 6.6l1.75-1.75a1 1 0 1 0-1.41-1.42l-1.91 1.91A9.63 9.63 0 0 0 12 3.75a9.76 9.76 0 1 0 6.9 2.85zM12 21.28a7.77 7.77 0 1 1 7.77-7.76A7.77 7.77 0 0 1 12 21.28z"/>
      <path d="M15.77 10l-5.59 5.6-1.95-1.95a1 1 0 0 0-1.41 1.41l2.66 2.65a1 1 0 0 0 .7.29 1 1 0 0 0 .71-.29l6.29-6.29a1 1 0 0 0 0-1.41 1 1 0 0 0-1.41-.01z"/>
    </Base>
  );
};

QuizDone.propTypes = {
  color: TString,
};

export default QuizDone;
