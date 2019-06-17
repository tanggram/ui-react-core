import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const Category = (props) => {
  return (
    <Base {...props}>
      <path fill="none" d="M0 .05h24v24H0z"/>
      <path d="M2.5 11.58h11a1 1 0 0 0 .7-.29l8-8a1 1 0 0 0 .21-1.09 1 1 0 0 0-.92-.62h-11a1 1 0 0 0-.78.42L1.79 9.87A1 1 0 0 0 1.58 11a1 1 0 0 0 .92.58zm8.45-8h8.14l-6 6H4.91zM10.5 12.55h-8a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1zm-1 8h-6v-6h6zM21.5 12.52h-8a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1 1 1 0 0 0 .71-.3l8-8a1 1 0 0 0 .21-1.09 1 1 0 0 0-.92-.61zm-7 6.58v-4.58h4.59z"/>
    </Base>
  );
};

Category.propTypes = {
  color: TString,
};

export default Category;
