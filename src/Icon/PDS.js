import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const PDS = (props) => {
  return (
    <Base {...props}>
      <path d="M21 2.5A2.5 2.5 0 0 0 18.47 0h-.22c-.1 0-9.5 2.17-13 3A2.62 2.62 0 0 0 3 5.5V20a2.51 2.51 0 0 0 2.46 2.5L18 23a2.5 2.5 0 0 0 2.5-2.5v-2.08A2.23 2.23 0 0 0 21 17zM5 20V5.5c0-.33.56-.49.74-.53C9 4.19 17.37 2.28 18.55 2a.5.5 0 0 1 .45.5V17c0 .33-.56.49-.73.53l-12.85 3A.5.5 0 0 1 5 20zm13 1l-5-.2 5.51-1.27v1A.49.49 0 0 1 18 21z"/>
      <path d="M7.65 8.08a.75.75 0 0 1-.17-1.48c3.07-.73 8.59-2 8.64-2a.75.75 0 1 1 .33 1.46c-.05 0-5.56 1.27-8.62 2a.55.55 0 0 1-.18.02z"/>
      <path fill="none" d="M0 0h24v24H0z"/>
    </Base>
  );
};

PDS.propTypes = {
  color: TString,
};

export default PDS;
