import React from 'react';
import {TNumber, TString} from '../prop_types';
import Base from './Base';

const Stores = (props) => {
  return (
    <Base {...props}>
      <path d="M23.31 8l-2.93-4.5a1 1 0 0 0-.83-.5H4.45a1 1 0 0 0-.84.46L.69 8a1 1 0 0 0 0 1 1 1 0 0 0 .88.52H3V20a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V9.51h1.47a1 1 0 0 0 .88-.51 1 1 0 0 0-.04-1zm-2.68-.45h-2.81l-1-2.5H19zM11 5v2.5H8.34l1-2.5zm3.62 0l1 2.5H13V5zM5 5h2.21l-1 2.5H3.37zm4.45 14v-6h5.09v6zM19 19h-2.46v-8H7.45v8H5V9.51h14z"/>
    </Base>
  );
};

Stores.propTypes = {
  size: TNumber,
  className: TString,
  color: TString,
};

export default Stores;
