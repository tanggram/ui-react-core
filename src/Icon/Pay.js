import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const Pay = (props) => {
  return (
    <Base {...props}>
      <path d="M15.5 24h-10A2.5 2.5 0 0 1 3 21.5v-19A2.5 2.5 0 0 1 5.5 0h10A2.5 2.5 0 0 1 18 2.5V4a1 1 0 0 1-2 0V2.5a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5v19a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V20a1 1 0 0 1 2 0v1.5a2.5 2.5 0 0 1-2.5 2.5z"/>
      <path d="M16.84 7.49A4.51 4.51 0 0 0 12.45 11H9.56l1.11-1.11a1 1 0 0 0 0-1.41 1 1 0 0 0-1.42 0L5.76 12l3.47 3.48a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-1-1h2.83a4.5 4.5 0 1 0 4.39-5.51zm0 7a2.5 2.5 0 1 1 2.5-2.5 2.5 2.5 0 0 1-2.5 2.5z"/>
      <path fill="none" d="M0 0h24v24H0z"/>
    </Base>
  );
};

Pay.propTypes = {
  color: TString,
};

export default Pay;
