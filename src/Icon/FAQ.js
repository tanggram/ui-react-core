import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const FAQ = (props) => {
  return (
    <Base {...props}>
      <path fill="none" d="M0 .07h24v24H0z"/>
      <path d="M12 1.57a10.5 10.5 0 1 0 10.5 10.5A10.51 10.51 0 0 0 12 1.57zm0 19a8.5 8.5 0 1 1 8.5-8.5 8.51 8.51 0 0 1-8.5 8.5z"/>
      <path d="M12 6.07a3.5 3.5 0 0 0-3.5 3.5v1h2v-1a1.5 1.5 0 1 1 1.5 1.5 1 1 0 0 0-1 1v3h2v-2.15a3.5 3.5 0 0 0-1-6.85z"/>
      <circle cx="12" cy="17.07" r="1"/>
    </Base>
  );
};

FAQ.propTypes = {
  color: TString,
};

export default FAQ;
