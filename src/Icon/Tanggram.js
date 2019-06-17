import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const Tanggram = (props) => {
  return (
    <Base {...props}>
      <path fill='none' d='M0 0h24v24H0z' />
      <path fillRule='evenodd' d='M11 14.6l9.6-10.4.4 10-10 .4zm-.6-.1L9.6.4 17 7.1l-6.6 7.4zm-2.3 7.3l-3.3-4.2 5-2.8-1.7 7zM3 15.6l2.9-4.1 4.2 2.9L3 15.6zm-.4-8.5l6.9-.4.5 6.9-7.4-6.5zm11.9 16.1H9.4v-5.1h5.1v5.1zm2.2-3.4l-5.1-4.5 4.6-.3 5.1 4.5-4.6.3z'
        clipRule='evenodd' />
    </Base>
  );
};

Tanggram.propTypes = {
  color: TString,
};

export default Tanggram;
