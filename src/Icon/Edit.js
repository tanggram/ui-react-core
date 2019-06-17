import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const Edit = (props) => {
  return (
    <Base {...props}>
      <path d="M21.89 4.57l-2.46-2.46a1 1 0 0 0-.71-.3 1 1 0 0 0-.71.3L6.7 13.42a.59.59 0 0 0-.13.18v.06l-.07.16-.89 3.36a1 1 0 0 0 .26 1 1 1 0 0 0 .71.29 1.07 1.07 0 0 0 .25 0l3.36-.89.16-.07h.06l.18-.14L21.89 6a1 1 0 0 0 0-1.43zm-12 10.61l-1-1 9.9-9.9 1.05 1zM1.44 19.02h21v2h-21z"/>
      <path fill="none" d="M0 0h24v24H0z"/>
    </Base>
  );
};

Edit.propTypes = {
  color: TString,
};

export default Edit;
