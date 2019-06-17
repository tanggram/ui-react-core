import React from 'react';
import {TNumber, TString} from '../prop_types';
import Base from './Base';

const Search = (props) => {
  return (
    <Base {...props}>
      <path d="M8.5 15.92a7 7 0 1 1 7-7 7 7 0 0 1-7 7zm0-12a5 5 0 1 0 5 5 5 5 0 0 0-5-4.99z"/><path d="M19.77 20.77a1 1 0 0 1-.7-.29l-6.61-6.61a1 1 0 1 1 1.41-1.41l6.61 6.61a1 1 0 0 1 0 1.41 1 1 0 0 1-.71.29z"/>
    </Base>
  );
};

Search.propTypes = {
  size: TNumber,
  className: TString,
  color: TString,
};

export default Search;
