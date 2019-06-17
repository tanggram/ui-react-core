import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const TermsAndConditions = (props) => {
  return (
    <Base {...props}>
      <path
        d="M18.49 0h-13A2.5 2.5 0 0 0 3 2.5v19A2.5 2.5 0 0 0 5.51 24h10.34L21 19.48V2.5A2.5 2.5 0 0 0 18.49 0zM5 21.48V2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5V17h-5v5H5.51a.5.5 0 0 1-.51-.52zM18.53 19L16 21.21V19z"/>
      <path d="M7.26 5.44h9.49v1.5H7.26zM7.26 8.36h9.49v1.5H7.26zM7.26 11.28h9.49v1.5H7.26zM7.26 14.2h9.49v1.5H7.26z"/>
    </Base>
  );
};

TermsAndConditions.propTypes = {
  color: TString,
};

export default TermsAndConditions;
