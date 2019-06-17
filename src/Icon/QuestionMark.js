import React from 'react';
import {TNumber, TString} from '../prop_types';
import Base from './Base';

const QuestionMark = (props) => {
  return (
    <Base {...props}>
      <path d="M11 18h2v-2h-2v2m1-16A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-14a4 4 0 0 0-4 4h2a2 2 0 0 1 2-2 2 2 0 0 1 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5a4 4 0 0 0-4-4z"/>
    </Base>
  );
};

QuestionMark.propTypes = {
  size: TNumber,
  className: TString,
  color: TString,
};

export default QuestionMark;
