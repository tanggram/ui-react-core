import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const Direction = (props) => {
  return (
    <Base {...props}>
      <path d="M21.6 7.06L17 2.5V6H7.75A3.4 3.4 0 0 0 4.5 9.47v12h2v-12A1.41 1.41 0 0 1 7.76 8h9.3v3.64z"/>
    </Base>
  );
};

Direction.propTypes = {
  color: TString,
};

export default Direction;
