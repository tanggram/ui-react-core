import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const Location = (props) => {
  return (
    <Base {...props}>
      <path d="M12 23.85l-.68-.62C11 23 4.06 16.43 4.06 8a7.94 7.94 0 0 1 15.88 0c0 8.48-7 15-7.26 15.28zM12 2a5.94 5.94 0 0 0-5.94 6c0 6.14 4.25 11.31 5.94 13.12 1.69-1.82 5.94-7 5.94-13.12A5.94 5.94 0 0 0 12 2z"/>
      <path d="M12 11.8a3.89 3.89 0 1 1 3.89-3.89A3.89 3.89 0 0 1 12 11.8zM12 6a1.9 1.9 0 1 0 1.89 1.9A1.9 1.9 0 0 0 12 6z"/>
    </Base>
  );
};

Location.propTypes = {
  color: TString,
};

export default Location;
